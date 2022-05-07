using Cool_WheelsAPI.Models;
using Cool_WheelsAPI.Repositories;
using Microsoft.Data.SqlClient;

namespace Cool_WheelsAPI.Repositories
{
    public class TrackRepository : ITrackRepository
    {
        private readonly IConfiguration _config;

        // The constructor accepts an IConfiguration object as a parameter. This class comes from the ASP.NET framework and is useful for retrieving things out of the appsettings.json file like connection strings.
        public TrackRepository(IConfiguration config)
        {
            _config = config;
        }

        public SqlConnection Connection
        {
            get
            {
                return new SqlConnection(_config.GetConnectionString("DefaultConnection"));
            }
        }

        public List<Track> GetAllTracks()
        {
            using (SqlConnection conn = Connection)
            {
                conn.Open();
                using (SqlCommand cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"SELECT Id,
                                               [Name],
                                               Price,
                                               ImageUrl,
                                               BuyerId
                                        FROM Track";

                    SqlDataReader reader = cmd.ExecuteReader();
                    List<Track> tracks = new List<Track>();
                    while (reader.Read())
                    {
                        Track track = new Track
                        {
                            Id = reader.GetInt32(reader.GetOrdinal("Id")),
                            Name = reader.GetString(reader.GetOrdinal("Name")),
                            Price = reader.GetDecimal(reader.GetOrdinal("Price")),
                            BuyerId = reader.GetInt32(reader.GetOrdinal("BuyerId")),
                            ImageUrl = reader.GetString(reader.GetOrdinal("ImageUrl")),
                        };

                        tracks.Add(track);
                    }

                    reader.Close();

                    return tracks;
                }
            }
        }

        public Track GetTrackById(int id)
        {
            using (SqlConnection conn = Connection)
            {
                conn.Open();
                using (SqlCommand cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"SELECT Id,
                                               [Name],
                                               Price,
                                               ImageUrl,
                                               BuyerId
                                        FROM Track
                                        WHERE Id = @id";

                    cmd.Parameters.AddWithValue("@id", id);

                    using (SqlDataReader reader = cmd.ExecuteReader())
                    {
                        if (reader.Read())
                        {
                            Track track = new Track
                            {
                                Id = reader.GetInt32(reader.GetOrdinal("Id")),
                                Name = reader.GetString(reader.GetOrdinal("Name")),
                                Price = reader.GetDecimal(reader.GetOrdinal("Price")),
                                BuyerId = reader.GetInt32(reader.GetOrdinal("BuyerId")),
                                ImageUrl = reader.GetString(reader.GetOrdinal("ImageUrl")),
                            };
                            return track;
                        }
                        else
                        {
                            return null;
                        }
                    }
                }
            }
        }

        public void AddTrack(Track track)
        {
            using (SqlConnection conn = Connection)
            {
                conn.Open();
                using (SqlCommand cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                    INSERT INTO Track ([Name], Price, BuyerId, ImageUrl)
                    OUTPUT INSERTED.ID
                    VALUES (@name, @price, @buyerId, @imageUrl);
                ";

                    cmd.Parameters.AddWithValue("@name", track.Name);
                    cmd.Parameters.AddWithValue("@price", track.Price);
                    cmd.Parameters.AddWithValue("@imageUrl", track.ImageUrl);

                    if (track.BuyerId.ToString() == null)
                    {
                        cmd.Parameters.AddWithValue("@buyerId", DBNull.Value);
                    }
                    else
                    {
                        cmd.Parameters.AddWithValue("@buyerId", track.BuyerId);
                    }

                    int newlyCreatedId = (int)cmd.ExecuteScalar();

                    track.Id = newlyCreatedId;
                }
            }
        }

        public void UpdateTrack(Track track)
        {
            using (SqlConnection conn = Connection)
            {
                conn.Open();

                using (SqlCommand cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                            UPDATE Track
                            SET 
                               [Name] = @name,
                               Price = @price,
                               ImageUrl = @imageUrl,
                               BuyerId = @buyerId
                            WHERE Id = @id";

                    cmd.Parameters.AddWithValue("@name", track.Name);
                    cmd.Parameters.AddWithValue("@price", track.Price);
                    cmd.Parameters.AddWithValue("@imageUrl", track.ImageUrl);
                    cmd.Parameters.AddWithValue("@buyerId", track.BuyerId);
                    cmd.Parameters.AddWithValue("@id", track.Id);

                    cmd.ExecuteNonQuery();
                }
            }
        }

        public void DeleteTrack(int id)
        {
            using (SqlConnection conn = Connection)
            {
                conn.Open();

                using (SqlCommand cmd = conn.CreateCommand())
                {
                    cmd.CommandText =
                        @"DELETE FROM Track
                          WHERE Id = @id
                        ";
                    cmd.Parameters.AddWithValue("@id", id);

                    cmd.ExecuteNonQuery();
                }
            }
        }
    }
}

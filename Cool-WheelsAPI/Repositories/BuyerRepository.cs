using Cool_WheelsAPI.Models;
using Microsoft.Data.SqlClient;

namespace Cool_WheelsAPI.Repositories
{
    public class BuyerRepository : IBuyerRepository
    {
        private readonly IConfiguration _config;

        // The constructor accepts an IConfiguration object as a parameter. This class comes from the ASP.NET framework and is useful for retrieving things out of the appsettings.json file like connection strings.
        public BuyerRepository(IConfiguration config)
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

        public List<Buyer> GetAllBuyers()
        {
            using (SqlConnection conn = Connection)
            {
                conn.Open();
                using (SqlCommand cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"SELECT Id,
                                               FirebaseUserId,
                                               [Name],
                                               UserName,
                                               Email,
                                               About,
                                               Image,
                                               [Role]
                                        FROM Buyer";

                    SqlDataReader reader = cmd.ExecuteReader();
                    List<Buyer> buyers = new List<Buyer>();
                    while (reader.Read())
                    {
                        Buyer buyer = new Buyer
                        {
                            Id = reader.GetInt32(reader.GetOrdinal("Id")),
                            Name = reader.GetString(reader.GetOrdinal("Name")),
                            FirebaseUserId = reader.GetString(reader.GetOrdinal("FirebaseUserId")),
                            UserName = reader.GetString(reader.GetOrdinal("UserName")),
                            Email = reader.GetString(reader.GetOrdinal("Email")),
                            About = reader.GetString(reader.GetOrdinal("About")),
                            Image = reader.GetString(reader.GetOrdinal("Image")),
                            Role = reader.GetString(reader.GetOrdinal("Role"))
                        };

                        buyers.Add(buyer);
                    }

                    reader.Close();

                    Console.WriteLine(buyers);
                    return buyers;
                }
            }
        }

        public Buyer GetByFirebaseUserId(string firebaseUserId)
        {
            using (SqlConnection conn = Connection)
            {
                conn.Open();
                using (SqlCommand cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"SELECT Id,
                                               FirebaseUserId,
                                               [Name],
                                               UserName,
                                               Email,
                                               About,
                                               Image,
                                               [Role]
                                        FROM Buyer
                                        WHERE FirebaseUserId = @firebaseUserId";

                    cmd.Parameters.AddWithValue("@firebaseUserId", firebaseUserId);

                    SqlDataReader reader = cmd.ExecuteReader();

                    if (reader.Read())
                    {
                        Buyer buyer = new Buyer
                        {
                            Id = reader.GetInt32(reader.GetOrdinal("Id")),
                            FirebaseUserId = reader.GetString(reader.GetOrdinal("FirebaseUserId")),
                            Name = reader.GetString(reader.GetOrdinal("Name")),
                            UserName = reader.GetString(reader.GetOrdinal("UserName")),
                            Email = reader.GetString(reader.GetOrdinal("Email")),
                            About = reader.GetString(reader.GetOrdinal("About")),
                            Image = reader.GetString(reader.GetOrdinal("Image")),
                            Role = reader.GetString(reader.GetOrdinal("Role"))
                        };

                        reader.Close();
                        return buyer;
                    }
                    else
                    {
                        reader.Close();
                        return null;
                    }
                }
            }
        }

        public void AddBuyer(Buyer buyer)
        {
            using (SqlConnection conn = Connection)
            {
                conn.Open();
                using (SqlCommand cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                    INSERT INTO Buyer (FirebaseUserId, [Name], UserName, Email, About, Image, [Role])
                    OUTPUT INSERTED.ID
                    VALUES (@firebaseUserId, @name, @userName, @email, @about, @image, @role);
                ";

                    cmd.Parameters.AddWithValue("@firebaseUserId", buyer.FirebaseUserId);
                    cmd.Parameters.AddWithValue("@name", buyer.Name);
                    cmd.Parameters.AddWithValue("@userName", buyer.UserName);
                    cmd.Parameters.AddWithValue("@email", buyer.Email);
                    cmd.Parameters.AddWithValue("@about", buyer.About);
                    cmd.Parameters.AddWithValue("@image", buyer.Image);
                    cmd.Parameters.AddWithValue("@role", buyer.Role);

                    int id = (int)cmd.ExecuteScalar();

                    buyer.Id = id;
                }
            }
        }

        public void UpdateBuyer(Buyer buyer)
        {
            using (SqlConnection conn = Connection)
            {
                conn.Open();

                using (SqlCommand cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                            UPDATE Buyer
                            SET 
                                [Name] = @name,
                                UserName = @userName,
                                Email = @email,
                                About = @about,
                                Image = @image,
                                Role = @role
                            WHERE FirebaseUserId = @firebaseUserId";

                    cmd.Parameters.AddWithValue("@firebaseUserId", buyer.FirebaseUserId);
                    cmd.Parameters.AddWithValue("@name", buyer.Name);
                    cmd.Parameters.AddWithValue("@userName", buyer.UserName);
                    cmd.Parameters.AddWithValue("@email", buyer.Email);
                    cmd.Parameters.AddWithValue("@about", buyer.About);
                    cmd.Parameters.AddWithValue("@image", buyer.Image);
                    cmd.Parameters.AddWithValue("@role", buyer.Role);

                    cmd.ExecuteNonQuery();
                }
            }
        }

        public void DeleteBuyer(string firebaseUserId)
        {
            using (SqlConnection conn = Connection)
            {
                conn.Open();

                using (SqlCommand cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                            DELETE FROM Buyer
                            WHERE FirebaseUserId = @firebaseUserId
                        ";

                    cmd.Parameters.AddWithValue("@firebaseUserId", firebaseUserId);

                    cmd.ExecuteNonQuery();
                }
            }
        }
    }
}

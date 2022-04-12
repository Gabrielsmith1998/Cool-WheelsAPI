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
                                               [Name]
                                        FROM Buyer";

                    SqlDataReader reader = cmd.ExecuteReader();
                    List<Buyer> buyers = new List<Buyer>();
                    while (reader.Read())
                    {
                        Buyer buyer = new Buyer
                        {
                            Id = reader.GetInt32(reader.GetOrdinal("Id")),
                            Name = reader.GetString(reader.GetOrdinal("Name"))
                        };

                        buyers.Add(buyer);
                    }

                    reader.Close();

                    Console.WriteLine(buyers);
                    return buyers;
                }
            }
        }

        public Buyer GetBuyerById(int id)
        {
            using (SqlConnection conn = Connection)
            {
                conn.Open();
                using (SqlCommand cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"SELECT Id,
                                               [Name]
                                        FROM Buyer
                                        WHERE Id = @id";

                    cmd.Parameters.AddWithValue("@id", id);

                    SqlDataReader reader = cmd.ExecuteReader();

                    if (reader.Read())
                    {
                        Buyer buyer = new Buyer
                        {
                            Id = reader.GetInt32(reader.GetOrdinal("Id")),
                            Name = reader.GetString(reader.GetOrdinal("Name"))
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
                    INSERT INTO Buyer ([Name])
                    OUTPUT INSERTED.ID
                    VALUES (@name);
                ";

                    cmd.Parameters.AddWithValue("@name", buyer.Name);

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
                                [Name] = @name
                            WHERE Id = @id";

                    cmd.Parameters.AddWithValue("@name", buyer.Name);
                    cmd.Parameters.AddWithValue("@id", buyer.Id);

                    cmd.ExecuteNonQuery();
                }
            }
        }

        public void DeleteBuyer(int buyerId)
        {
            using (SqlConnection conn = Connection)
            {
                conn.Open();

                using (SqlCommand cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                            DELETE FROM Buyer
                            WHERE Id = @id
                        ";

                    cmd.Parameters.AddWithValue("@id", buyerId);

                    cmd.ExecuteNonQuery();
                }
            }
        }
    }
}

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
    }
}

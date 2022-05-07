using Cool_WheelsAPI.Models;
using Microsoft.Data.SqlClient;

namespace Cool_WheelsAPI.Repositories
{
    public class CarRepository : ICarRepository
    {
        private readonly IConfiguration _config;
        public CarRepository(IConfiguration config)
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

        public List<Car> GetAllCars()
        {
            using (SqlConnection conn = Connection)
            {
                conn.Open();
                using (SqlCommand cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                        SELECT Id, [Name], Color, Year, Price, ImageUrl, BuyerId
                        FROM Car
                    ";
                    SqlDataReader reader = cmd.ExecuteReader();

                    List<Car> cars = new List<Car>();
                    while (reader.Read())
                    {
                        Car car = new Car
                        {
                            Id = reader.GetInt32(reader.GetOrdinal("Id")),
                            Name = reader.GetString(reader.GetOrdinal("Name")),
                            Color = reader.GetString(reader.GetOrdinal("Color")),
                            Year = reader.GetString(reader.GetOrdinal("Year")),
                            Price = (double)reader.GetDecimal(reader.GetOrdinal("Price")),
                            ImageUrl = reader.GetString(reader.GetOrdinal("ImageUrl")),
                            BuyerId = reader.GetInt32(reader.GetOrdinal("BuyerId"))
                        };

                        cars.Add(car);
                    }
                    reader.Close();

                    return cars;
                }
            }
        }

        public Car GetCarById(int id)
        {
            using (SqlConnection conn = Connection)
            {
                conn.Open();
                using (SqlCommand cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                        SELECT Id, [Name], Color, Year, Price, ImageUrl, BuyerId
                        FROM Car
                        WHERE Id = @id
                    ";

                    cmd.Parameters.AddWithValue("@id", id);

                    SqlDataReader reader = cmd.ExecuteReader();

                    if (reader.Read())
                    {
                        Car car = new Car
                        {
                            Id = reader.GetInt32(reader.GetOrdinal("Id")),
                            Name = reader.GetString(reader.GetOrdinal("Name")),
                            Color = reader.GetString(reader.GetOrdinal("Color")),
                            Year = reader.GetString(reader.GetOrdinal("Year")),
                            Price = (double)reader.GetDecimal(reader.GetOrdinal("Price")),
                            ImageUrl = reader.GetString(reader.GetOrdinal("ImageUrl")),
                            BuyerId = reader.GetInt32(reader.GetOrdinal("BuyerId"))
                        };

                        reader.Close();
                        return car;
                    }
                    else
                    {
                        reader.Close();
                        return null;
                    }
                }
            }
        }
        public void AddCar(Car car)
        {
            using (SqlConnection conn = Connection)
            {
                conn.Open();
                using (SqlCommand cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                    INSERT INTO Car ([Name], Color, Year, Price, ImageUrl, BuyerId)
                    OUTPUT INSERTED.ID
                    VALUES (@name, @color, @year, @price, @imageUrl, @buyerId)
                ";
                    cmd.Parameters.AddWithValue("@name", car.Name);
                    cmd.Parameters.AddWithValue("@color", car.Color);
                    cmd.Parameters.AddWithValue("@year", car.Year);
                    cmd.Parameters.AddWithValue("@price", car.Price);
                    cmd.Parameters.AddWithValue("@imageUrl", car.ImageUrl);

                    if (car.BuyerId.ToString() == null)
                    {
                        cmd.Parameters.AddWithValue("@buyerId", DBNull.Value);
                    }
                    else
                    {
                        cmd.Parameters.AddWithValue("@buyerId", car.BuyerId);
                    }

                    int newlyCreatedId = (int)cmd.ExecuteScalar();

                    car.Id = newlyCreatedId;
                }
            }
        }
        public void UpdateCar(Car car)
        {
            using (SqlConnection conn = Connection)
            {
                conn.Open();
                using (SqlCommand cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                    UPDATE Car
                    SET
                        [Name] = @name,
                        Color = @color,
                        Year = @year,
                        Price = @price,
                        ImageUrl = @imageUrl,
                        BuyerId = @buyerId
                    WHERE Id = @id
                ";

                    cmd.Parameters.AddWithValue("@name", car.Name);
                    cmd.Parameters.AddWithValue("@color", car.Color);
                    cmd.Parameters.AddWithValue("@year", car.Year);
                    cmd.Parameters.AddWithValue("@price", car.Price);
                    cmd.Parameters.AddWithValue("@imageUrl", car.ImageUrl);
                    cmd.Parameters.AddWithValue("@buyerId", car.BuyerId);
                    cmd.Parameters.AddWithValue("@id", car.Id);

                    cmd.ExecuteNonQuery();
                }
            }
        }
        public void DeleteCar(int id)
        {
            using (SqlConnection conn = Connection)
            {
                conn.Open();
                using (SqlCommand cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                    DELETE FROM Car
                    WHERE Id = @id
                ";
                    cmd.Parameters.AddWithValue("id", id);

                    cmd.ExecuteNonQuery();
                }
            }
        }
    }
}
using Microsoft.AspNetCore.Mvc.ModelBinding.Validation;

namespace Cool_WheelsAPI.Models
{
    public class Car
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Color { get; set; }
        public string Year { get; set; }
        public double Price { get; set; }
        public string ImageUrl { get; set; }
        [ValidateNever]
        public string BuyerId { get; set; }
    }
}

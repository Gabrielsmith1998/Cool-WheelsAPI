﻿namespace Cool_WheelsAPI.Models
{
    public class Track
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public decimal Price { get; set; }
        public string ImageUrl { get; set; }
        public int BuyerId { get; set; }
    }
}

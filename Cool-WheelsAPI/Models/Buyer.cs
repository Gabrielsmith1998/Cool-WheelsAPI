using System.ComponentModel.DataAnnotations;

namespace Cool_WheelsAPI.Models

{
    public class Buyer
    {
        public int Id { get; set; }

        [Required]
        public string FirebaseUserId { get; set; }

        [Required]
        public string Name { get; set; }
        public string UserName { get; set; }

        [Required]
        public string Email { get; set; }
        public string About { get; set; }
        public string Image { get; set; }

        [Required]
        public string Role { get; set; }
    }
}

using Cool_WheelsAPI.Models;

namespace Cool_WheelsAPI.Repositories
{
    public interface IBuyerRepository
    {
        List<Buyer> GetAllBuyers();
        //Buyer GetBuyerById(int id);
        //void AddBuyer(Buyer buyer);
        //void UpdateBuyer(Buyer buyer);
        //void DeleteBuyer(int buyerId);
    }
}

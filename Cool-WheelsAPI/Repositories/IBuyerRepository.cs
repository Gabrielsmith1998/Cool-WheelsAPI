using Cool_WheelsAPI.Models;

namespace Cool_WheelsAPI.Repositories
{
    public interface IBuyerRepository
    {
        List<Buyer> GetAllBuyers();
        void AddBuyer(Buyer buyer);
        void UpdateBuyer(Buyer buyer);
        void DeleteBuyer(string firebaseUserId);
        Buyer GetByFirebaseUserId(string firebaseUserId);
    }
}

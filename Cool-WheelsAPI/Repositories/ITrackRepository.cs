using Cool_WheelsAPI.Models;

namespace Cool_WheelsAPI.Repositories
{
    public interface ITrackRepository
    {
        List<Track> GetAllTracks();
        Track GetTrackById(int id);
        void AddTrack(Track track);
        void UpdateTrack(Track track);
        void DeleteTrack(int id);
    }
}

using Cool_WheelsAPI.Models;
using Cool_WheelsAPI.Repositories;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Cool_WheelsAPI.Controllers
{
    [Route("api/tracks")]
    [ApiController]
    public class TracksController : ControllerBase
    {
        private readonly ITrackRepository _trackRepo;

        // ASP.NET will give us an instance of our Walker Repository. This is called "Dependency Injection"
        public TracksController(ITrackRepository tracksRepository)
        {
            _trackRepo = tracksRepository;
        }
        // GET: api/<TrackController>
        [HttpGet]
        public List<Track> Get()
        {
            return _trackRepo.GetAllTracks();
        }

        // GET api/<TrackController>/5
        [HttpGet("{id}")]
        public Track Get(int id)
        {
            return _trackRepo.GetTrackById(id);
        }

        // POST api/<TrackController>
        [HttpPost]
        public IActionResult Post(Track newTrack)
        {
                _trackRepo.AddTrack(newTrack);
                return Ok(newTrack);
        }

        [HttpPut("{id}")]
        public IActionResult UpdateSpy(int id, Track track)
        {
            if (id != track.Id)
            {
                return BadRequest();
            }

            var existingTrack = _trackRepo.GetTrackById(id);
            if (existingTrack == null)
            {
                return NotFound();
            }
            else
            {
                _trackRepo.UpdateTrack(track);
                return NoContent();
            }
        }

        // DELETE api/<TrackController>/5
        [HttpDelete("{id}")]
        public IActionResult DeleteATrack(int id)
        {
            var matchingTrack = _trackRepo.GetTrackById(id);
            if (matchingTrack == null)
            {
                return NotFound();
            }
            else
            {
                _trackRepo.DeleteTrack(matchingTrack.Id);
                return NoContent();
            }
        }
    }
}

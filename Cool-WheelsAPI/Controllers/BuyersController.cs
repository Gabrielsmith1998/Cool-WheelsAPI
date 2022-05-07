using Microsoft.AspNetCore.Mvc;
using Cool_WheelsAPI.Repositories;
using Cool_WheelsAPI.Models;
using Microsoft.AspNetCore.Authorization;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Cool_WheelsAPI.Controllers
{
    [Route("api/buyers")]
    [ApiController]
    public class BuyersController : ControllerBase
    {
        private readonly IBuyerRepository _buyerRepo;

        public BuyersController(IBuyerRepository buyerRepository)
        {
            _buyerRepo = buyerRepository;
        }

        // GET: api/buyers
        [Authorize]
        [HttpGet]
        public List<Buyer> Get()
        {
            return _buyerRepo.GetAllBuyers();
        }

        [Authorize]
        [HttpGet("{firebaseUserId}")]
        public IActionResult GetByFirebaseUserId(string firebaseUserId)
        {
            var matchingBuyer = _buyerRepo.GetByFirebaseUserId(firebaseUserId);
            if (matchingBuyer == null)
            {
                return NotFound();
            }

            return Ok(matchingBuyer);
        }

        [Authorize]
        [HttpGet("DoesUserExist/{firebaseUserId}")]
        public IActionResult DoesUserExist(string firebaseUserId)
        {
            var matchingBuyer = _buyerRepo.GetByFirebaseUserId(firebaseUserId);
            if (matchingBuyer == null)
            {
                return NotFound();
            }

            return Ok();
        }

        // POST api/buyers
        [HttpPost]
        public IActionResult Post(Buyer buyer)
        {
            // All newly registered users start out as a "user" user type (i.e. they are not admins)
            buyer.Role = "user";
            _buyerRepo.AddBuyer(buyer);
            return CreatedAtAction(
                nameof(GetByFirebaseUserId), new { firebaseUserId = buyer.FirebaseUserId }, buyer);
        }

        // PATCH api/buyers/<firebaseUserId>
        [Authorize]
        [HttpPatch("{firebaseUserId}")]
        public IActionResult Put(string firebaseUserId, Buyer buyer)
        {
            if (firebaseUserId != buyer.FirebaseUserId)
            {
                return BadRequest();
            }

            var existingBuyer = _buyerRepo.GetByFirebaseUserId(firebaseUserId);
            if (existingBuyer == null)
            {
                return NotFound();
            }
            else
            {
                _buyerRepo.UpdateBuyer(buyer);
                return NoContent();
            }
        }

        // DELETE api/buyers/<firebaseUserId>
        [Authorize]
        [HttpDelete("{firebaseUserId}")]
        public IActionResult Delete(string firebaseUserId)
        {
            var matchingBuyer = _buyerRepo.GetByFirebaseUserId(firebaseUserId);
            if (matchingBuyer == null)
            {
                return NotFound();
            }
            else
            {
                _buyerRepo.DeleteBuyer(matchingBuyer.FirebaseUserId);
                return NoContent();
            }
        }
    }
}

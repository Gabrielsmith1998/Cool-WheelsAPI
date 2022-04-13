using Microsoft.AspNetCore.Mvc;
using Cool_WheelsAPI.Repositories;
using Cool_WheelsAPI.Models;

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
        [HttpGet]
        public List<Buyer> Get()
        {
            return _buyerRepo.GetAllBuyers();
        }

        // GET api/buyers/<id>
        [HttpGet("{id}")]
        public IActionResult GetById(int id)
        {
            var matchingBuyer = _buyerRepo.GetBuyerById(id);
            if (matchingBuyer == null)
            {
                return NotFound();
            }

            return Ok(matchingBuyer);
        }

        // POST api/buyers
        [HttpPost]
        public IActionResult Post(Buyer buyer)
        {
            if (!ValidNewBuyer(buyer))
            {
                return BadRequest(buyer);
            }
            else
            {
                _buyerRepo.AddBuyer(buyer);
                return Ok(buyer);
            }
        }

        private bool ValidNewBuyer(Buyer buyer)
        {
            if (buyer == null)
            {
                return false;
            }
            if (buyer.Name == null)
            {
                return false;
            }

            return true;
        }

        // PUT api/buyers/<id>
        [HttpPut("{id}")]
        public IActionResult Put(int id, Buyer buyer)
        {
            if (id != buyer.Id)
            {
                return BadRequest();
            }

            var existingBuyer = _buyerRepo.GetBuyerById(id);
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

        // DELETE api/buyers/<id>
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var matchingBuyer = _buyerRepo.GetBuyerById(id);
            if (matchingBuyer == null)
            {
                return NotFound();
            }
            else
            {
                _buyerRepo.DeleteBuyer(id);
                return NoContent();
            }
        }
    }
}

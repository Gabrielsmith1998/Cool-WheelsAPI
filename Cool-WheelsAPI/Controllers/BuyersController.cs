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
            //return Ok();
        }

        // GET api/<BuyersController>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<BuyersController>
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/<BuyersController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<BuyersController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}

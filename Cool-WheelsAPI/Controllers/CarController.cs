using Cool_WheelsAPI.Models;
using Cool_WheelsAPI.Repositories;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Cool_WheelsAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CarController : ControllerBase
    {
        private readonly ICarRepository _carRepo;
        // GET: api/<CarController>
        public CarController(ICarRepository carRepository)
        {
            _carRepo = carRepository;
        }

        [HttpGet]
        public List<Car> GetAllCars()
        {
            return _carRepo.GetAllCars();
        }

        // GET api/<CarController>/5
        [HttpGet("{id}")]
        public Car Get(int id)
        {
            return _carRepo.GetCarById(id);
        }

        // POST api/<CarController>
        [HttpPost]
        public IActionResult Post(Car newCar)
        {
            _carRepo.AddCar(newCar);
            return Ok(newCar);
        }

        // PATCH api/<CarController>/5
        [EnableCors("_myAllowSpecificOrigins")]
        [HttpPatch("{id}")]
        public IActionResult Put(int id, Car car)
        {
            if (id != car.Id)
            {
                return BadRequest();
            }
            var existingCar = _carRepo.GetCarById(id);
            if (existingCar == null)
            {
                return NotFound();
            }
            else
            {
                _carRepo.UpdateCar(car);
                return NoContent();
            }
        }

        // DELETE api/<CarController>/5
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var matchingCar = _carRepo.GetCarById(id);
            if (matchingCar == null)
            {
                return NotFound();
            }
            else
            {
                _carRepo.DeleteCar(matchingCar.Id);
                return NoContent();
            }
        }
    }
}

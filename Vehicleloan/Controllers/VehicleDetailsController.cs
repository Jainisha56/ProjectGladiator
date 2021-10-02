using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Vehicleloan.Models;

namespace Vehicleloan.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class VehicleDetailsController : ControllerBase
    {
        private readonly VehicleLoanContext _context;

        public VehicleDetailsController(VehicleLoanContext context)
        {
            _context = context;
        }

        // GET: api/VehicleDetails
        [HttpGet]
        public async Task<ActionResult<IEnumerable<VehicleDetails>>> GetVehicleDetails()
        {
            return await _context.VehicleDetails.ToListAsync();
        }

        // GET: api/VehicleDetails/5
        [HttpGet("{id}")]
        public async Task<ActionResult<VehicleDetails>> GetVehicleDetails(int id)
        {
            var vehicleDetails = await _context.VehicleDetails.FindAsync(id);

            if (vehicleDetails == null)
            {
                return NotFound();
            }

            return vehicleDetails;
        }
        [HttpGet("vehicle/{Email}")]
        public IActionResult GetVehicleId(string Email)
        {
            var res = from user in _context.UserDetails
                      where user.UserEmail == Email
                      join vehicle in _context.VehicleDetails on user.UserId equals vehicle.UserId
                      //int intIdt = db.Users.Max(u => u.UserId);
                        select new
                      {
                          user.UserId,
                          vehicle.VehicleId,
                          vehicle.VehicleName
                      };
            int newid = res.Max(u => u.VehicleId);
            var res2 = from vehicle in _context.VehicleDetails
                       where vehicle.VehicleId == newid
                       select new
                       {
                           vehicle.VehicleId,
                           vehicle.VehicleName,
                           vehicle.UserId
                       };
            return Ok(res2);
        }

        // PUT: api/VehicleDetails/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutVehicleDetails(int id, VehicleDetails vehicleDetails)
        {
            if (id != vehicleDetails.VehicleId)
            {
                return BadRequest();
            }

            _context.Entry(vehicleDetails).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!VehicleDetailsExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/VehicleDetails
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<VehicleDetails>> PostVehicleDetails(VehicleDetails vehicleDetails)
        {
            _context.VehicleDetails.Add(vehicleDetails);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetVehicleDetails", new { id = vehicleDetails.VehicleId }, vehicleDetails);
        }

        [HttpPost("email/{email}")]
        public async Task<ActionResult<VehicleDetails>> AddVehicleDetails(string email, VehicleDetails vehicleDetails)
        {
            var res = _context.UserDetails.Where(x => x.UserEmail == email).FirstOrDefault();
            vehicleDetails.UserId = res.UserId;
            _context.VehicleDetails.Add(vehicleDetails);
            await _context.SaveChangesAsync();

            return Ok();
        }

        // DELETE: api/VehicleDetails/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<VehicleDetails>> DeleteVehicleDetails(int id)
        {
            var vehicleDetails = await _context.VehicleDetails.FindAsync(id);
            if (vehicleDetails == null)
            {
                return NotFound();
            }

            _context.VehicleDetails.Remove(vehicleDetails);
            await _context.SaveChangesAsync();

            return vehicleDetails;
        }

        private bool VehicleDetailsExists(int id)
        {
            return _context.VehicleDetails.Any(e => e.VehicleId == id);
        }
    }
}

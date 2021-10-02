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
    public class EmploymentDetailsController : ControllerBase
    {
        private readonly VehicleLoanContext _context;

        public EmploymentDetailsController(VehicleLoanContext context)
        {
            _context = context;
        }

        // GET: api/EmploymentDetails
        [HttpGet]
        public async Task<ActionResult<IEnumerable<EmploymentDetails>>> GetEmploymentDetails()
        {
            return await _context.EmploymentDetails.ToListAsync();
        }

        // GET: api/EmploymentDetails/5
        [HttpGet("{id}")]
        public async Task<ActionResult<EmploymentDetails>> GetEmploymentDetails(int id)
        {
            var employmentDetails = await _context.EmploymentDetails.FindAsync(id);

            if (employmentDetails == null)
            {
                return NotFound();
            }

            return employmentDetails;
        }

        // PUT: api/EmploymentDetails/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutEmploymentDetails(int id, EmploymentDetails employmentDetails)
        {
            if (id != employmentDetails.EmpId)
            {
                return BadRequest();
            }

            _context.Entry(employmentDetails).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!EmploymentDetailsExists(id))
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

        // POST: api/EmploymentDetails
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<EmploymentDetails>> PostEmploymentDetails(EmploymentDetails employmentDetails)
        {
            _context.EmploymentDetails.Add(employmentDetails);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetEmploymentDetails", new { id = employmentDetails.EmpId }, employmentDetails);
        }

        // DELETE: api/EmploymentDetails/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<EmploymentDetails>> DeleteEmploymentDetails(int id)
        {
            var employmentDetails = await _context.EmploymentDetails.FindAsync(id);
            if (employmentDetails == null)
            {
                return NotFound();
            }

            _context.EmploymentDetails.Remove(employmentDetails);
            await _context.SaveChangesAsync();

            return employmentDetails;
        }

        [HttpPost("employmentdetails/{email}")]
        public async Task<ActionResult<EmploymentDetails>> PostUserEmploymentDetails(string email, EmploymentDetails employmentDetails)
        {
            var user = _context.UserDetails.Where(u => u.UserEmail == email).FirstOrDefault();
            var userid = user.UserId;
            employmentDetails.UserId = userid;
            _context.EmploymentDetails.Add(employmentDetails);
            await _context.SaveChangesAsync();
            return Ok();
        }

        private bool EmploymentDetailsExists(int id)
        {
            return _context.EmploymentDetails.Any(e => e.EmpId == id);
        }
    }
}

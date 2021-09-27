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
    public class UserDetailsController : ControllerBase
    {
        private readonly VehicleLoanContext _context;

        public UserDetailsController(VehicleLoanContext context)
        {
            _context = context;
        }
        
        Dictionary<string, bool> status = new Dictionary<string, bool>();

        // GET: api/UserDetails
        [HttpGet]
        public async Task<ActionResult<IEnumerable<UserDetails>>> GetUserDetails()
        {
            return await _context.UserDetails.ToListAsync();
        }

        // GET: api/UserDetails/5
        [HttpGet("{id}")]
        public async Task<ActionResult<UserDetails>> GetUserDetails(int id)
        {
            var userDetails = await _context.UserDetails.FindAsync(id);

            if (userDetails == null)
            {
                return NotFound();
            }

            return userDetails;
        }

        // PUT: api/UserDetails/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutUserDetails(int id, UserDetails userDetails)
        {
            if (id != userDetails.UserId)
            {
                return BadRequest();
            }

            _context.Entry(userDetails).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!UserDetailsExists(id))
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

        // POST: api/UserDetails
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost("register")]
        public async Task<ActionResult<UserDetails>> PostUserregister(UserDetails userDetails)
        {
            //_context.UserDetails.Add(userDetails);

            var res = _context.UserDetails.Where(x => x.UserEmail == userDetails.UserEmail).FirstOrDefault();
            if (res == null)
            {
                _context.UserDetails.Add(userDetails);
                await _context.SaveChangesAsync();
                status.Add("Success", true);
                return Ok(status);

            }
            else
            {
                status.Add("Success", false);
                return Ok(status);
            }
           

           // return CreatedAtAction("GetUserDetails", new { id = userDetails.UserId }, userDetails);
        }

        [HttpPost("login")]
        public IActionResult PostUserlogin(UserDetails userDetails)
        {
            //_context.UserDetails.Add(userDetails);

            var user = _context.UserDetails.Where(u => u.UserEmail == userDetails.UserEmail && u.UserPassword == userDetails.UserPassword).FirstOrDefault();
            if (user != null)
            {
                status.Add("Success", true);
                return Ok(status);
            }
            else
            {
                status.Add("Success", false);
                return Ok(status);
            }


            // return CreatedAtAction("GetUserDetails", new { id = userDetails.UserId }, userDetails);
        }

        // DELETE: api/UserDetails/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<UserDetails>> DeleteUserDetails(int id)
        {
            var userDetails = await _context.UserDetails.FindAsync(id);
            if (userDetails == null)
            {
                return NotFound();
            }

            _context.UserDetails.Remove(userDetails);
            await _context.SaveChangesAsync();

            return userDetails;
        }

        private bool UserDetailsExists(int id)
        {
            return _context.UserDetails.Any(e => e.UserId == id);
        }
    }
}

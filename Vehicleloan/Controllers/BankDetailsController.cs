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
    public class BankDetailsController : ControllerBase
    {
        private readonly VehicleLoanContext _context;

        public BankDetailsController(VehicleLoanContext context)
        {
            _context = context;
        }

        // GET: api/BankDetails
        [HttpGet]
        public async Task<ActionResult<IEnumerable<BankDetails>>> GetBankDetails()
        {
            return await _context.BankDetails.ToListAsync();
        }

        // GET: api/BankDetails/5
        [HttpGet("{id}")]
        public async Task<ActionResult<BankDetails>> GetBankDetails(decimal id)
        {
            var bankDetails = await _context.BankDetails.FindAsync(id);

            if (bankDetails == null)
            {
                return NotFound();
            }

            return bankDetails;
        }

        // PUT: api/BankDetails/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutBankDetails(decimal id, BankDetails bankDetails)
        {
            if (id != bankDetails.AccountNum)
            {
                return BadRequest();
            }

            _context.Entry(bankDetails).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!BankDetailsExists(id))
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

        // POST: api/BankDetails
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<BankDetails>> PostBankDetails(BankDetails bankDetails)
        {
            _context.BankDetails.Add(bankDetails);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (BankDetailsExists(bankDetails.AccountNum))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("GetBankDetails", new { id = bankDetails.AccountNum }, bankDetails);
        }

        [HttpPut("{id}")]
        public IActionResult AddUserbankDetails(int id, BankDetails bankDetails)
        {
            _context.BankDetails.Add(bankDetails);
             return Ok(); 
        }

        // DELETE: api/BankDetails/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<BankDetails>> DeleteBankDetails(decimal id)
        {
            var bankDetails = await _context.BankDetails.FindAsync(id);
            if (bankDetails == null)
            {
                return NotFound();
            }

            _context.BankDetails.Remove(bankDetails);
            await _context.SaveChangesAsync();

            return bankDetails;
        }

        [HttpPost("bankdetails/{email}")]
        public async Task<ActionResult<BankDetails>> PostUserBankDetails(string email, BankDetails bankdetails)
        {
           
            var user = _context.UserDetails.Where(u => u.UserEmail == email).FirstOrDefault();
            var userid = user.UserId;
            bankdetails.UserRefId = userid;
            _context.BankDetails.Add(bankdetails);
            await _context.SaveChangesAsync();
 
            return Ok(true);
          
        }


        private bool BankDetailsExists(decimal id)
        {
            return _context.BankDetails.Any(e => e.AccountNum == id);
        }
    }
}

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
    public class LoanProfilesController : ControllerBase
    {
        private readonly VehicleLoanContext _context;

        public LoanProfilesController(VehicleLoanContext context)
        {
            _context = context;
        }

        // GET: api/LoanProfiles
        [HttpGet]
        public async Task<ActionResult<IEnumerable<LoanProfile>>> GetLoanProfile()
        {
            return await _context.LoanProfile.ToListAsync();
        }
        [HttpGet("approved")]
        public IActionResult approvedLoanApplications()
        {
            var q = (
                     from loan in _context.LoanApplications where loan.ApplicationStatus == "true"
                     join loanp in _context.LoanProfile on loan.ApplicationId equals loanp.LoanApplicationId
                     join vehicle in _context.VehicleDetails on loan.VehicleId equals vehicle.VehicleId
                     join user in _context.UserDetails on loan.UserRefId equals user.UserId
                     join emp in _context.EmploymentDetails on user.UserId equals emp.UserId

                     select new
                     {
                         user.UserFirstName,
                         vehicle.VehicleName,
                         emp.AnnualSal,
                         loan.Amount,
                         loanp.Emi,
                         loan.Interest,
                         loan.Duration,
                         loanp.LoanStartDate,
                         loanp.LoanEndDate
                     }

                ).ToList();
            return Ok(q);
        }

        [HttpGet("email/{email}")]
        public IActionResult LoanApprovedHistory(string email  )
        {
            var q = ( from loanp in _context.LoanProfile
                      join user in _context.UserDetails on loanp.UserRefId equals user.UserId
                      where user.UserEmail == email
                      join vehicle in _context.VehicleDetails on loanp.VehicleId equals vehicle.VehicleId

                      select new
                      {
                          vehicle.VehicleName,
                          loanp.TotalAmount,
                          loanp.TotalInstallments,
                          loanp.LoanStartDate,
                          loanp.LoanEndDate,
                          loanp.Emi                      
                      }
                
                ).ToList();
            return Ok(q);
        }
            // GET: api/LoanProfiles/5
            [HttpGet("{id}")]
        public async Task<ActionResult<LoanProfile>> GetLoanProfile(int id)
        {
            var loanProfile = await _context.LoanProfile.FindAsync(id);

            if (loanProfile == null)
            {
                return NotFound();
            }

            return loanProfile;
        }

        // PUT: api/LoanProfiles/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutLoanProfile(int id, LoanProfile loanProfile)
        {
            if (id != loanProfile.LoanId)
            {
                return BadRequest();
            }

            _context.Entry(loanProfile).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!LoanProfileExists(id))
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

        // POST: api/LoanProfiles
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<LoanProfile>> PostLoanProfile(LoanProfile loanProfile)
        {
            var res = _context.LoanApplications.Where(x => x.ApplicationId == loanProfile.LoanApplicationId).FirstOrDefault();

            DateTime startdate = DateTime.Now;
            int months = loanProfile.TotalInstallments?? default(int);
            DateTime lastdate = startdate.AddMonths(months);
            
            loanProfile.LoanStartDate = startdate;
            loanProfile.LoanEndDate = lastdate;

            _context.LoanProfile.Add(loanProfile);
            await _context.SaveChangesAsync();
            return Ok();
           // return CreatedAtAction("GetLoanProfile", new { id = loanProfile.LoanId }, loanProfile);
        }

        // DELETE: api/LoanProfiles/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<LoanProfile>> DeleteLoanProfile(int id)
        {
            var loanProfile = await _context.LoanProfile.FindAsync(id);
            if (loanProfile == null)
            {
                return NotFound();
            }

            _context.LoanProfile.Remove(loanProfile);
            await _context.SaveChangesAsync();

            return loanProfile;
        }

        private bool LoanProfileExists(int id)
        {
            return _context.LoanProfile.Any(e => e.LoanId == id);
        }
    }
}

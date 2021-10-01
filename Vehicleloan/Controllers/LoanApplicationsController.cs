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
    public class LoanApplicationsController : ControllerBase
    {
        private readonly VehicleLoanContext _context;

        public LoanApplicationsController(VehicleLoanContext context)
        {
            _context = context;
        }

        // GET: api/LoanApplications
        [HttpGet]
        public async Task<ActionResult<IEnumerable<LoanApplications>>> GetLoanApplications()
        {
            return await _context.LoanApplications.ToListAsync();
        }

        // GET: api/LoanApplications/5
        [HttpGet("{id}")]
        public async Task<ActionResult<LoanApplications>> GetLoanApplications(int id)
        {
            var loanApplications = await _context.LoanApplications.FindAsync(id);

            if (loanApplications == null)
            {
                return NotFound();
            }

            return loanApplications;
        }
        [HttpGet("accept/{id}")]
        public IActionResult AcceptLoanApplications(int id)
        {
            var q = (from loan in _context.LoanApplications where loan.ApplicationId == id
                     join vehicle in _context.VehicleDetails on loan.VehicleId equals vehicle.VehicleId
                     join user in _context.UserDetails on loan.UserRefId equals user.UserId
                     join emp in _context.EmploymentDetails on user.UserId equals emp.UserId
                     select new
                     {
                         user.UserFirstName,
                         vehicle.VehicleName,
                         emp.AnnualSal,
                         loan.Amount,
                         loan.Interest,
                         loan.Duration,
                         vehicle.VehicleId,
                         user.UserId,
                         loan.ApplicationId
                     }

                );
            return Ok(q);
        }

        [HttpGet("rejected")]
        public IActionResult RejectedLoanApplications( )
        {
            //return Ok(
            //   // _context.LoanApplications.Select(x => x.UserRef.UserId == u.UserId ).Where(y => y.Vehi)
            //   _context.UserDetails.Select(x=> 
            //   x.LoanApplications.Where(i=> i.UserRef.UserId == x.UserId ).Select(
            //       y => new {y.UserRef.UserFirstName ,y.Vehicle.VehicleName , y.Amount , y.Interest , y.Duration}
            //       ) )
            //    );

            var q = ( from loan in _context.LoanApplications where loan.ApplicationStatus == "false"
                      join vehicle in _context.VehicleDetails on loan.VehicleId equals vehicle.VehicleId
                      join user in _context.UserDetails on loan.UserRefId equals user.UserId 
                      join emp in _context.EmploymentDetails on user.UserId equals emp.UserId

                      select new
                      {
                          user.UserFirstName , vehicle.VehicleName , emp.AnnualSal ,
                          loan.Amount , loan.Interest , loan.Duration
                      }
                
                ).ToList() ;
            return Ok(q);
        }
        [HttpGet("pending")]
        public IActionResult pendingLoanApplications()
        {
            var q = (from loan in _context.LoanApplications
                     where loan.ApplicationStatus == null
                     join vehicle in _context.VehicleDetails on loan.VehicleId equals vehicle.VehicleId
                     join user in _context.UserDetails on loan.UserRefId equals user.UserId
                     join emp in _context.EmploymentDetails on user.UserId equals emp.UserId

                     select new
                     {
                         user.UserFirstName,
                         vehicle.VehicleName,
                         emp.AnnualSal,
                         loan.Amount,
                         loan.Interest,
                         loan.Duration,
                         emp.ExistingEmi,
                         loan.ApplicationId,
                         loan.ApplicationStatus
                     }

                ).ToList();
            return Ok(q);
        }

        [HttpGet("Pendingemail/{email}")]
        public IActionResult LoanPendingApplications(string email)
        {
            var q = (from loan in _context.LoanApplications where loan.ApplicationStatus == null
                     join user in _context.UserDetails on loan.UserRefId equals user.UserId
                     where user.UserEmail == email
                     join vehicle in _context.VehicleDetails on loan.VehicleId equals vehicle.VehicleId

                     select new
                     {
                         vehicle.VehicleName,
                         loan.Amount,
                         loan.Duration,
                         loan.Interest,
                         loan.ApplicationStatus, 
                         loan.ApplicationDate
                     }

                ).ToList();
            return Ok(q);
        }
        [HttpGet("Rejectedemail/{email}")]
        public IActionResult LoanRejectedApplications(string email)
        {
            var q = (from loan in _context.LoanApplications
                     where loan.ApplicationStatus == "false"
                     join user in _context.UserDetails on loan.UserRefId equals user.UserId
                     where user.UserEmail == email
                     join vehicle in _context.VehicleDetails on loan.VehicleId equals vehicle.VehicleId

                     select new
                     {
                         vehicle.VehicleName,
                         loan.Amount,
                         loan.Duration,
                         loan.Interest,
                         loan.ApplicationStatus,
                         loan.ApplicationDate
                     }

                ).ToList();
            return Ok(q);
        }
        //public async Task<ActionResult<IEnumerable<LoanApplications>>> RejectedLoanApplications(int id)


        // PUT: api/LoanApplications/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        //[HttpPut("{id}")]
        //public async Task<IActionResult> PutLoanApplications(int id, LoanApplications loanApplications)
        //{
        //    if (id != loanApplications.ApplicationId)
        //    {
        //        return BadRequest();
        //    }

        //    _context.Entry(loanApplications).State = EntityState.Modified;

        //    try
        //    {
        //        await _context.SaveChangesAsync();
        //    }
        //    catch (DbUpdateConcurrencyException)
        //    {
        //        if (!LoanApplicationsExists(id))
        //        {
        //            return NotFound();
        //        }
        //        else
        //        {
        //            throw;
        //        }
        //    }

        //    return NoContent();
        //}
        [HttpPut("AcceptApp/{id}")]

        public IActionResult UpdateAcceptStatus(int id , LoanApplications loanApplications)
        {
            var res = _context.LoanApplications.Where(x => x.ApplicationId == id).FirstOrDefault();
            res.ApplicationStatus = "true";
            _context.SaveChanges();
            return Ok();
        }
        [HttpPut("RejectApp/{id}")]

        public IActionResult RejectAcceptStatus(int id, LoanApplications loanApplications)
        {
            var res = _context.LoanApplications.Where(x => x.ApplicationId == id).FirstOrDefault();
            res.ApplicationStatus = "false";
            _context.SaveChanges();
            return Ok();
        }

        // POST: api/LoanApplications
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<LoanApplications>> PostLoanApplications(LoanApplications loanApplications)
        {
            _context.LoanApplications.Add(loanApplications);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetLoanApplications", new { id = loanApplications.ApplicationId }, loanApplications);
        }
        [HttpPost("email/{email}")]
        public async Task<ActionResult<LoanApplications>> AddLoanApplications( string email ,LoanApplications loanApplications)
        {
            var res = _context.UserDetails.Where(x => x.UserEmail == email).FirstOrDefault();
            var r = ( from user in _context.UserDetails where user.UserEmail == email 
                      join vehicle in _context.VehicleDetails on user.UserId equals vehicle.UserId

                      select new
                      {
                          vehicle.VehicleId,
                          user.UserId
                      }
                ).ToList();
           // int vid = r.Select(y => y.VehicleId);
            //loanApplications.VehicleId = r.Select(y => y.VehicleId).Where(z => z.)
            _context.LoanApplications.Add(loanApplications);
            await _context.SaveChangesAsync();
            return Ok();

        }
        [HttpPost("Addloan")]
        public IActionResult PostApplication(LoanApplications app)
        {
            DateTime Appdate = DateTime.Now;
            app.ApplicationDate = Appdate;
            _context.LoanApplications.Add(app);
            _context.SaveChanges();
            return Ok();
        }
        // DELETE: api/LoanApplications/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<LoanApplications>> DeleteLoanApplications(int id)
        {
            var loanApplications = await _context.LoanApplications.FindAsync(id);
            if (loanApplications == null)
            {
                return NotFound();
            }

            _context.LoanApplications.Remove(loanApplications);
            await _context.SaveChangesAsync();

            return loanApplications;
        }

        private bool LoanApplicationsExists(int id)
        {
            return _context.LoanApplications.Any(e => e.ApplicationId == id);
        }
    }
}

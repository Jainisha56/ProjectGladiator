using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Mail;
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
        Dictionary<string, bool> status = new Dictionary<string, bool>();

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
                         loan.ApplicationStatus,
                         emp.WorkExperience,
                         emp.EmpId
                     }

                ).ToList();

            //int newid = q.Max(x => x.EmpId);

            //var p = (from loan in _context.LoanApplications
            //         where loan.ApplicationStatus == null
            //         join vehicle in _context.VehicleDetails on loan.VehicleId equals vehicle.VehicleId
            //         join user in _context.UserDetails on loan.UserRefId equals user.UserId
            //         join emp in _context.EmploymentDetails on user.UserId equals emp.UserId
            //         where emp.EmpId == newid

            //         select new
            //         {
            //             user.UserFirstName,
            //             vehicle.VehicleName,
            //             emp.AnnualSal,
            //             loan.Amount,
            //             loan.Interest,
            //             loan.Duration,
            //             emp.ExistingEmi,
            //             loan.ApplicationId,
            //             loan.ApplicationStatus,
            //             emp.WorkExperience,
            //             emp.EmpId
            //         }

            //    ).ToList();

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
            status.Add("Success", true);
            return Ok(status);
        }


        [HttpPost("loanconfirmation/{vname}")]
        public IActionResult LoanConfirmation(string vname,LoanApplications loanapp)
        {
            //_context.UserDetails.Add(userDetails);
            var res = _context.UserDetails.Where(x => x.UserId == loanapp.UserRefId).FirstOrDefault();
            var res2 = _context.LoanApplications.Where(y => y.UserRefId == loanapp.UserRefId).FirstOrDefault();
            //var getinfo = (from user in _context.UserDetails
            //              where user.UserEmail == email
            //              join appl in _context.LoanApplications on user.UserId equals appl.UserRefId
            //              join vehicle in _context.VehicleDetails on appl.VehicleId equals vehicle.VehicleId
            //              where vehicle.VehicleId==loanapp.VehicleId
            //              select new
            //              {
            //                  vehicle.VehicleName,
            //                  appl.ApplicationId
            //              }).ToList()
            //              ;

            //string vname = getinfo.Select(x => x.VehicleName).ToString();
            //int appid = int.Parse(getinfo.Select(x => x.ApplicationId).ToString());
            if (res != null)
            {

                string Body = "Hello " + res.UserFirstName + " " + res.UserLastName + ", We received your Loan application for the vehicle " + vname + " with a total Loan Amount of "
                    +loanapp.Amount+". \nYour Application Id is "+ res2.ApplicationId + ". \n\n Do not reply to this Email, It is system generated.  ";
                //codeget = code;
                SendMail("vehicleloanlti@gmail.com", res.UserEmail , "JPAG Vehicle Loans", Body);
                //status.Add("Success", true);
                // return Ok(status);
                return Ok(new { status = true });
            }
            else
            {
                //status.Add("Success", false);
                // codeget = -1;
                //return Ok(status);
                return Ok(new { status = false });
            }
            // return CreatedAtAction("GetUserDetails", new { id = userDetails.UserId }, userDetails);
        }

        [HttpPost("Rejectmail/{id}")]
        public IActionResult RejectConfirmation(int id)
        {
            //_context.UserDetails.Add(userDetails);
            var res = _context.LoanApplications.Where(x => x.ApplicationId == id).FirstOrDefault();
            //var res2 = _context.VehicleDetails.Where(y => y.VehicleId == res.VehicleId).FirstOrDefault();
            var res3 = _context.UserDetails.Where(y => y.UserId == res.UserRefId).FirstOrDefault();
            if (res != null)
            {

                string Body = "Hello, "+res3.UserFirstName+" "+res3.UserLastName +" we are sorry to inform you that your loan application with ID : " + res.ApplicationId + " has been rejected.  \n\n Do not reply to this Email, It is system generated.";
                //codeget = code;
                SendMail("vehicleloanlti@gmail.com", res3.UserEmail, "JPAG Vehicle Loans", Body);
                //status.Add("Success", true);
                // return Ok(status);
                return Ok(new { status = true });
            }
            else
            {
                //status.Add("Success", false);
                // codeget = -1;
                //return Ok(status);
                return Ok(new { status = false });
            }
            // return CreatedAtAction("GetUserDetails", new { id = userDetails.UserId }, userDetails);
        }
        [HttpPost("Acceptmail/{id}")]
        public IActionResult AcceptConfirmation(int id)
        {
            //_context.UserDetails.Add(userDetails);
            var res = _context.LoanApplications.Where(x => x.ApplicationId == id).FirstOrDefault();
            var res2 = _context.LoanProfile.Where(y => y.LoanApplicationId == id).FirstOrDefault();
            var res3 = _context.UserDetails.Where(z => z.UserId == res.UserRefId).FirstOrDefault();

            if (res != null)
            {

                string Body = "Congrats, " + res3.UserFirstName + " " + res3.UserLastName + " we are glad to inform you that your loan application with ID : " + res.ApplicationId + " has been accepted." +
                    " Your Loan ID:"+res2.LoanApplicationId +"\n The EMI to be paid every month for the accepted loan is "+res2.Emi +"\n\n Do not reply to this Email, It is system generated.";
                //codeget = code;
                SendMail("vehicleloanlti@gmail.com", res3.UserEmail, "JPAG Vehicle Loans", Body);
                //status.Add("Success", true);
                // return Ok(status);
                return Ok(new { status = true });
            }
            else
            {
                //status.Add("Success", false);
                // codeget = -1;
                //return Ok(status);
                return Ok(new { status = false });
            }
            // return CreatedAtAction("GetUserDetails", new { id = userDetails.UserId }, userDetails);
        }


        [NonAction]
        public static void SendMail(string from, string To, String Subject, string Body)
        {
            MailMessage mail = new MailMessage(from, To);
            mail.Subject = Subject;
            mail.Body = Body;

            //Attachment attachment = new Attachment(@"");
            //mail.Attachments.Add(attachment);
            SmtpClient client = new SmtpClient("smtp.gmail.com", 587);

            client.Credentials = new System.Net.NetworkCredential()
            {
                UserName = "vehicleloanlti@gmail.com",
                Password = "Vehicleloan4@lti"

            };
            client.EnableSsl = true;
            client.Send(mail);

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

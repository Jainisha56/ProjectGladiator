using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Mail;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Vehicleloan.Models;
using System.IO;
using System.Net.Http.Headers;


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
        Dictionary<int, bool> otpstatus = new Dictionary<int, bool>();
        int codeget;
       

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
        [HttpGet("email/{Email}")]
        public IActionResult GetUserdetail(string Email)
        {
            var userDetails = _context.UserDetails.Where(x => x.UserEmail == Email).FirstOrDefault();

            if (userDetails == null)
            {
                return NotFound();
            }
            else
            {
                return Ok(userDetails);
            }

        }

        [HttpPut("updateUser/{id}")]
        public IActionResult UpdateUserdetails(int id, UserDetails userDetails)
        {
            var res = _context.UserDetails.Where(x => x.UserId == id).FirstOrDefault();
            if (res != null)
            {
                res.UserFirstName = userDetails.UserFirstName;
                res.UserLastName = userDetails.UserLastName;
                res.UserGender = userDetails.UserGender;
                res.UserPhoneNum = userDetails.UserPhoneNum;
                res.UserAddress = userDetails.UserAddress;
                res.UserState = userDetails.UserState;
                res.UserCity = userDetails.UserCity;
                res.UserPincode = userDetails.UserPincode;
                res.UserEmail = userDetails.UserEmail;

                _context.SaveChanges();
                status.Add("Success", true);
                return Ok(status);
            }
            else
            {
                status.Add("Success", false);
                return Ok(status);
            }

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
                DateTime currentdate = DateTime.Today;
                DateTime birthdate = userDetails.UserDoB;
                // TimeSpan age = currentdate - birthdate;
                //int age = int.Parse(currentdate - birthdate);
                int age = currentdate.Year - birthdate.Year;
                if (birthdate > currentdate.AddYears(-age))
                    age--;
                userDetails.UserAge = age;

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

            var user = _context.UserDetails.Where(u => u.UserEmail == userDetails.UserEmail && u.UserPassword==userDetails.UserPassword).FirstOrDefault();
            //String.Equals(x.Username, (string)drUser["Username"], 
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
        [HttpPost("adminlogin")]
        public IActionResult PostAdminlogin(AdminDetails adminDetails)
        {
            //_context.UserDetails.Add(userDetails);

            var admin = _context.AdminDetails.Where(u => u.AdminEmail == adminDetails.AdminEmail && u.AdminPassword == adminDetails.AdminPassword).FirstOrDefault();
            if (admin != null)
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


        [HttpPost("forgotpassword")]
        public IActionResult ForgotUserlogin(UserDetails userDetails)
        {
            //_context.UserDetails.Add(userDetails);
            var res = _context.UserDetails.Where(x => x.UserEmail == userDetails.UserEmail).FirstOrDefault();

            if (res != null)
            {
                var random = new Random();
                int code = random.Next(1000, 9999);
                string Body = "hi heres your OTP as per your request for re-setting password " + code;
                //codeget = code;
                SendMail("vehicleloanlti@gmail.com", userDetails.UserEmail, "JPAG Vehicle Loans", Body);
                //status.Add("Success", true);
                // return Ok(status);
                return Ok(new { status=true, rnum = code });
            }
            else
            {
                //status.Add("Success", false);
                // codeget = -1;
                //return Ok(status);
                return Ok(new { status = false, rnum = -1 });
            }
            // return CreatedAtAction("GetUserDetails", new { id = userDetails.UserId }, userDetails);
        }
        [NonAction]
        public int retcode()
        {
            var random = new Random();
            int code = random.Next(1000, 9999);

            return code;
        }
        [HttpPut("changepwd/{Email}")]
        public IActionResult PutChangepwd(string Email, UserDetails userDetails)
        {
            var data = _context.UserDetails.Where(x => x.UserEmail == Email).FirstOrDefault();
            if (data != null)
            {
                data.UserPassword = userDetails.UserPassword;
                _context.SaveChanges();
                status.Add("Success", true);
                return Ok(status);
            }
            else
            {
                status.Add("Success", true);
                return Ok(status);
            }
        }

        [HttpPost("file/{s}")]
        public string post(string s)
        {
            var file = Request.Form.Files.Count > 0 ? Request.Form.Files[0] : null;
            string foldername = s;
            string webRootPath = Directory.GetCurrentDirectory();
            string mypath = "E:\\LTI projects\\GET_953_-_DOTNET_-_Final_Project_Details\\Vehicle Loan Final\\storedfiles";
            string newPath = Path.Combine(mypath, foldername);
            if (!Directory.Exists(newPath))
            {
                Directory.CreateDirectory(newPath);
            }
            if (file != null && file.Length > 0)
            {
                string filename = ContentDispositionHeaderValue.Parse(file.ContentDisposition).FileName.Trim('"');
                string fullPath = Path.Combine(newPath, filename);
                using (var stream = new FileStream(fullPath, FileMode.Create))
                {
                    file.CopyTo(stream);
                }
            }
            return "success";
        }
        //[HttpPut("AcceptApp/{id}")]

        //public IActionResult UpdateAcceptStatus(int id, LoanApplications loanApplications)
        //{
        //    var res = _context.LoanApplications.Where(x => x.ApplicationId == id).FirstOrDefault();
        //    res.ApplicationStatus = "true";
        //    _context.SaveChanges();
        //    return Ok();
        //}
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


    }
}

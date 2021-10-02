using System;
using System.Collections.Generic;

// Code scaffolded by EF Core assumes nullable reference types (NRTs) are not used or disabled.
// If you have enabled NRTs for your project, then un-comment the following line:
// #nullable disable

namespace Vehicleloan.Models
{
    public partial class UserDetails
    {
        public UserDetails()
        {
            BankDetails = new HashSet<BankDetails>();
            EmploymentDetails = new HashSet<EmploymentDetails>();
            LoanApplications = new HashSet<LoanApplications>();
            LoanProfile = new HashSet<LoanProfile>();
            VehicleDetails = new HashSet<VehicleDetails>();
        }

        public int UserId { get; set; }
        public string UserFirstName { get; set; }
        public string UserLastName { get; set; }
        public decimal? UserAge { get; set; }
        public DateTime UserDoB { get; set; }
        public string UserGender { get; set; }
        public decimal? UserPhoneNum { get; set; }
        public string UserEmail { get; set; }
        public string UserAddress { get; set; }
        public string UserCity { get; set; }
        public string UserState { get; set; }
        public decimal? UserPincode { get; set; }
        public string UserPassword { get; set; }

        public virtual ICollection<BankDetails> BankDetails { get; set; }
        public virtual ICollection<EmploymentDetails> EmploymentDetails { get; set; }
        public virtual ICollection<LoanApplications> LoanApplications { get; set; }
        public virtual ICollection<LoanProfile> LoanProfile { get; set; }
        public virtual ICollection<VehicleDetails> VehicleDetails { get; set; }
    }
}

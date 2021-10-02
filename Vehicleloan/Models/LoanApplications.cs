using System;
using System.Collections.Generic;

// Code scaffolded by EF Core assumes nullable reference types (NRTs) are not used or disabled.
// If you have enabled NRTs for your project, then un-comment the following line:
// #nullable disable

namespace Vehicleloan.Models
{
    public partial class LoanApplications
    {
        public LoanApplications()
        {
            LoanProfile = new HashSet<LoanProfile>();
        }

        public int ApplicationId { get; set; }
        public int? UserRefId { get; set; }
        public int? VehicleId { get; set; }
        public decimal? Amount { get; set; }
        public int? Interest { get; set; }
        public int? Duration { get; set; }
        public string ApplicationStatus { get; set; }
        public DateTime? ApplicationDate { get; set; }

        public virtual UserDetails UserRef { get; set; }
        public virtual VehicleDetails Vehicle { get; set; }
        public virtual ICollection<LoanProfile> LoanProfile { get; set; }
    }
}

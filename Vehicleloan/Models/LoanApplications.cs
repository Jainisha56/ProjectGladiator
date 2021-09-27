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
            RejectedList = new HashSet<RejectedList>();
        }

        public int ApplicationId { get; set; }
        public int? UserRefId { get; set; }
        public int? VehicleId { get; set; }
        public decimal? Amount { get; set; }
        public decimal? Interest { get; set; }
        public decimal? Duration { get; set; }
        public string ApplicationStatus { get; set; }
        public DateTime? ApplicationDate { get; set; }

        public virtual UserDetails UserRef { get; set; }
        public virtual VehicleDetails Vehicle { get; set; }
        public virtual ICollection<RejectedList> RejectedList { get; set; }
    }
}

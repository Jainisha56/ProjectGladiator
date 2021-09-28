using System;
using System.Collections.Generic;

// Code scaffolded by EF Core assumes nullable reference types (NRTs) are not used or disabled.
// If you have enabled NRTs for your project, then un-comment the following line:
// #nullable disable

namespace Vehicleloan.Models
{
    public partial class VehicleDetails
    {
        public VehicleDetails()
        {
            LoanApplications = new HashSet<LoanApplications>();
            LoanProfile = new HashSet<LoanProfile>();
        }

        public int VehicleId { get; set; }
        public int? UserId { get; set; }
        public string VehicleType { get; set; }
        public string VehicleModel { get; set; }
        public string VehicleName { get; set; }
        public decimal? ShowroomPrice { get; set; }
        public decimal? OnRoadPrice { get; set; }
        public string ManufactureYear { get; set; }

        public virtual UserDetails User { get; set; }
        public virtual ICollection<LoanApplications> LoanApplications { get; set; }
        public virtual ICollection<LoanProfile> LoanProfile { get; set; }
    }
}

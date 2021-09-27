using System;
using System.Collections.Generic;

// Code scaffolded by EF Core assumes nullable reference types (NRTs) are not used or disabled.
// If you have enabled NRTs for your project, then un-comment the following line:
// #nullable disable

namespace Vehicleloan.Models
{
    public partial class EmploymentDetails
    {
        public int UserId { get; set; }
        public string TypeOfEmp { get; set; }
        public decimal? AnnualSal { get; set; }
        public string ExistingEmi { get; set; }

        public virtual UserDetails User { get; set; }
    }
}

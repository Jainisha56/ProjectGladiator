using System;
using System.Collections.Generic;

// Code scaffolded by EF Core assumes nullable reference types (NRTs) are not used or disabled.
// If you have enabled NRTs for your project, then un-comment the following line:
// #nullable disable

namespace Vehicleloan.Models
{
    public partial class RejectedList
    {
        public int RejectedId { get; set; }
        public int? AdminRefId { get; set; }
        public int? UserRefId { get; set; }
        public int? LoanId { get; set; }
        public string Reason { get; set; }

        public virtual AdminDetails AdminRef { get; set; }
        public virtual LoanApplications Loan { get; set; }
        public virtual UserDetails UserRef { get; set; }
    }
}

using System;
using System.Collections.Generic;

// Code scaffolded by EF Core assumes nullable reference types (NRTs) are not used or disabled.
// If you have enabled NRTs for your project, then un-comment the following line:
// #nullable disable

namespace Vehicleloan.Models
{
    public partial class LoanProfile
    {
        public int? UserRefId { get; set; }
        public int? LoanId { get; set; }
        public decimal? TotalAmount { get; set; }
        public decimal? TotalInstallments { get; set; }
        public decimal? CompletedInstallments { get; set; }
        public decimal? RemainingAmount { get; set; }
        public decimal? Emi { get; set; }
        public DateTime? LoanStartDate { get; set; }
        public DateTime? LoanEndDate { get; set; }

        public virtual LoanApplications Loan { get; set; }
        public virtual UserDetails UserRef { get; set; }
    }
}

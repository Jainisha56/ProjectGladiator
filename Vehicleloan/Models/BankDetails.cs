using System;
using System.Collections.Generic;

// Code scaffolded by EF Core assumes nullable reference types (NRTs) are not used or disabled.
// If you have enabled NRTs for your project, then un-comment the following line:
// #nullable disable

namespace Vehicleloan.Models
{
    public partial class BankDetails
    {
        public decimal AccountNum { get; set; }
        public int? UserRefId { get; set; }
        public string BankName { get; set; }
        public string AccountType { get; set; }
        public string BranchName { get; set; }
        public string IfscCode { get; set; }

        public virtual UserDetails UserRef { get; set; }
    }
}

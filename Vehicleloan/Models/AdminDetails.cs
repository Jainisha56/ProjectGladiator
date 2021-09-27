using System;
using System.Collections.Generic;

// Code scaffolded by EF Core assumes nullable reference types (NRTs) are not used or disabled.
// If you have enabled NRTs for your project, then un-comment the following line:
// #nullable disable

namespace Vehicleloan.Models
{
    public partial class AdminDetails
    {
        public AdminDetails()
        {
            RejectedList = new HashSet<RejectedList>();
        }

        public int AdminId { get; set; }
        public string AdminUserName { get; set; }
        public string AdminPassword { get; set; }
        public string AdminEmail { get; set; }

        public virtual ICollection<RejectedList> RejectedList { get; set; }
    }
}

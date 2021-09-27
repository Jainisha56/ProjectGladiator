using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

// Code scaffolded by EF Core assumes nullable reference types (NRTs) are not used or disabled.
// If you have enabled NRTs for your project, then un-comment the following line:
// #nullable disable

namespace Vehicleloan.Models
{
    public partial class VehicleLoanContext : DbContext
    {
        public VehicleLoanContext()
        {
        }

        public VehicleLoanContext(DbContextOptions<VehicleLoanContext> options)
            : base(options)
        {
        }

        public virtual DbSet<AdminDetails> AdminDetails { get; set; }
        public virtual DbSet<BankDetails> BankDetails { get; set; }
        public virtual DbSet<EmploymentDetails> EmploymentDetails { get; set; }
        public virtual DbSet<LoanApplications> LoanApplications { get; set; }
        public virtual DbSet<LoanProfile> LoanProfile { get; set; }
        public virtual DbSet<RejectedList> RejectedList { get; set; }
        public virtual DbSet<UserDetails> UserDetails { get; set; }
        public virtual DbSet<VehicleDetails> VehicleDetails { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. See http://go.microsoft.com/fwlink/?LinkId=723263 for guidance on storing connection strings.
                optionsBuilder.UseSqlServer("Server=DESKTOP-V24LP5J;Database=VehicleLoan;Trusted_Connection=True;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<AdminDetails>(entity =>
            {
                entity.HasKey(e => e.AdminId)
                    .HasName("PK__Admin_De__4A311D2FD4DA98C5");

                entity.ToTable("Admin_Details");

                entity.Property(e => e.AdminId).HasColumnName("Admin_id");

                entity.Property(e => e.AdminEmail)
                    .HasColumnName("Admin_Email")
                    .HasMaxLength(250);

                entity.Property(e => e.AdminPassword)
                    .HasColumnName("Admin_password")
                    .HasMaxLength(20);

                entity.Property(e => e.AdminUserName)
                    .IsRequired()
                    .HasColumnName("Admin_UserName")
                    .HasMaxLength(30);
            });

            modelBuilder.Entity<BankDetails>(entity =>
            {
                entity.HasKey(e => new { e.AccountNum, e.UserRefId })
                    .HasName("PK__bank_det__FE5041295FBF554F");

                entity.ToTable("bank_details");

                entity.Property(e => e.AccountNum)
                    .HasColumnName("Account_Num")
                    .HasColumnType("numeric(18, 0)");

                entity.Property(e => e.UserRefId).HasColumnName("user_ref_id");

                entity.Property(e => e.AccountType)
                    .HasColumnName("account_type")
                    .HasMaxLength(100);

                entity.Property(e => e.BranchName)
                    .HasColumnName("branch_name")
                    .HasMaxLength(50);

                entity.Property(e => e.IfscCode)
                    .HasColumnName("ifsc_code")
                    .HasMaxLength(20);

                entity.HasOne(d => d.UserRef)
                    .WithMany(p => p.BankDetails)
                    .HasForeignKey(d => d.UserRefId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__bank_deta__user___48CFD27E");
            });

            modelBuilder.Entity<EmploymentDetails>(entity =>
            {
                entity.HasKey(e => e.UserId)
                    .HasName("PK__Employme__B9BE370F4FD9D797");

                entity.ToTable("Employment_Details");

                entity.Property(e => e.UserId)
                    .HasColumnName("user_id")
                    .ValueGeneratedNever();

                entity.Property(e => e.AnnualSal)
                    .HasColumnName("annual_sal")
                    .HasColumnType("numeric(20, 0)");

                entity.Property(e => e.ExistingEmi)
                    .HasColumnName("existing_emi")
                    .HasMaxLength(10)
                    .IsUnicode(false);

                entity.Property(e => e.TypeOfEmp)
                    .HasColumnName("type_of_emp")
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.HasOne(d => d.User)
                    .WithOne(p => p.EmploymentDetails)
                    .HasForeignKey<EmploymentDetails>(d => d.UserId)
                    .HasConstraintName("FK__Employmen__user___3A81B327");
            });

            modelBuilder.Entity<LoanApplications>(entity =>
            {
                entity.HasKey(e => e.ApplicationId)
                    .HasName("PK__Loan_App__E064DD938F008D07");

                entity.ToTable("Loan_Applications");

                entity.Property(e => e.ApplicationId).HasColumnName("Application_id");

                entity.Property(e => e.Amount).HasColumnType("numeric(18, 0)");

                entity.Property(e => e.ApplicationDate)
                    .HasColumnName("Application_date")
                    .HasColumnType("datetime");

                entity.Property(e => e.ApplicationStatus)
                    .HasColumnName("Application_Status")
                    .HasMaxLength(30)
                    .IsUnicode(false);

                entity.Property(e => e.Duration)
                    .HasColumnName("duration")
                    .HasColumnType("numeric(18, 0)");

                entity.Property(e => e.Interest).HasColumnType("numeric(18, 0)");

                entity.Property(e => e.UserRefId).HasColumnName("user_ref_id");

                entity.Property(e => e.VehicleId).HasColumnName("Vehicle_id");

                entity.HasOne(d => d.UserRef)
                    .WithMany(p => p.LoanApplications)
                    .HasForeignKey(d => d.UserRefId)
                    .HasConstraintName("FK__Loan_Appl__user___4222D4EF");

                entity.HasOne(d => d.Vehicle)
                    .WithMany(p => p.LoanApplications)
                    .HasForeignKey(d => d.VehicleId)
                    .OnDelete(DeleteBehavior.Cascade)
                    .HasConstraintName("FK__Loan_Appl__Vehic__4316F928");
            });

            modelBuilder.Entity<LoanProfile>(entity =>
            {
                entity.HasNoKey();

                entity.ToTable("loan_profile");

                entity.Property(e => e.CompletedInstallments)
                    .HasColumnName("completed_installments")
                    .HasColumnType("numeric(18, 0)");

                entity.Property(e => e.Emi)
                    .HasColumnName("emi")
                    .HasColumnType("numeric(18, 0)");

                entity.Property(e => e.LoanEndDate)
                    .HasColumnName("loan_end_date")
                    .HasColumnType("datetime");

                entity.Property(e => e.LoanId).HasColumnName("loan_id");

                entity.Property(e => e.LoanStartDate)
                    .HasColumnName("loan_start_date")
                    .HasColumnType("datetime");

                entity.Property(e => e.RemainingAmount)
                    .HasColumnName("remaining_amount")
                    .HasColumnType("numeric(18, 0)");

                entity.Property(e => e.TotalAmount)
                    .HasColumnName("total_amount")
                    .HasColumnType("numeric(18, 0)");

                entity.Property(e => e.TotalInstallments)
                    .HasColumnName("total_installments")
                    .HasColumnType("numeric(18, 0)");

                entity.Property(e => e.UserRefId).HasColumnName("user_ref_id");

                entity.HasOne(d => d.Loan)
                    .WithMany()
                    .HasForeignKey(d => d.LoanId)
                    .HasConstraintName("FK__loan_prof__loan___45F365D3");

                entity.HasOne(d => d.UserRef)
                    .WithMany()
                    .HasForeignKey(d => d.UserRefId)
                    .HasConstraintName("FK__loan_prof__user___44FF419A");
            });

            modelBuilder.Entity<RejectedList>(entity =>
            {
                entity.HasKey(e => e.RejectedId)
                    .HasName("PK__Rejected__4A298A0621542B68");

                entity.ToTable("Rejected_list");

                entity.Property(e => e.RejectedId).HasColumnName("rejected_id");

                entity.Property(e => e.AdminRefId).HasColumnName("admin_ref_id");

                entity.Property(e => e.LoanId).HasColumnName("loan_id");

                entity.Property(e => e.Reason)
                    .HasColumnName("reason")
                    .HasMaxLength(1000);

                entity.Property(e => e.UserRefId).HasColumnName("user_ref_id");

                entity.HasOne(d => d.AdminRef)
                    .WithMany(p => p.RejectedList)
                    .HasForeignKey(d => d.AdminRefId)
                    .HasConstraintName("FK__Rejected___admin__4BAC3F29");

                entity.HasOne(d => d.Loan)
                    .WithMany(p => p.RejectedList)
                    .HasForeignKey(d => d.LoanId)
                    .HasConstraintName("FK__Rejected___loan___4D94879B");

                entity.HasOne(d => d.UserRef)
                    .WithMany(p => p.RejectedList)
                    .HasForeignKey(d => d.UserRefId)
                    .HasConstraintName("FK__Rejected___user___4CA06362");
            });

            modelBuilder.Entity<UserDetails>(entity =>
            {
                entity.HasKey(e => e.UserId)
                    .HasName("PK__User_Det__206A9DF83C0C075D");

                entity.ToTable("User_Details");

                entity.Property(e => e.UserId).HasColumnName("User_id");

                entity.Property(e => e.UserAddress)
                    .HasColumnName("User_Address")
                    .HasMaxLength(500);

                entity.Property(e => e.UserAge)
                    .HasColumnName("User_Age")
                    .HasColumnType("numeric(2, 0)");

                entity.Property(e => e.UserCity)
                    .HasColumnName("User_city")
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.UserDoB)
                    .HasColumnName("User_DoB")
                    .HasColumnType("date");

                entity.Property(e => e.UserEmail)
                    .HasColumnName("User_Email")
                    .HasMaxLength(250);

                entity.Property(e => e.UserFirstName)
                    .IsRequired()
                    .HasColumnName("User_FirstName")
                    .HasMaxLength(20);

                entity.Property(e => e.UserGender)
                    .HasColumnName("User_gender")
                    .HasMaxLength(10)
                    .IsUnicode(false);

                entity.Property(e => e.UserLastName)
                    .HasColumnName("User_LastName")
                    .HasMaxLength(20);

                entity.Property(e => e.UserPassword)
                    .HasColumnName("User_password")
                    .HasMaxLength(20);

                entity.Property(e => e.UserPhoneNum)
                    .HasColumnName("User_PhoneNum")
                    .HasColumnType("numeric(10, 0)");

                entity.Property(e => e.UserPincode)
                    .HasColumnName("User_pincode")
                    .HasColumnType("numeric(6, 0)");

                entity.Property(e => e.UserState)
                    .HasColumnName("User_state")
                    .HasMaxLength(50)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<VehicleDetails>(entity =>
            {
                entity.HasKey(e => e.VehicleId)
                    .HasName("PK__Vehicle___CE64613D67E90C98");

                entity.ToTable("Vehicle_Details");

                entity.Property(e => e.VehicleId).HasColumnName("Vehicle_id");

                entity.Property(e => e.ManufactureYear)
                    .HasColumnName("Manufacture_year")
                    .HasMaxLength(10)
                    .IsUnicode(false);

                entity.Property(e => e.OnRoadPrice)
                    .HasColumnName("On_road_price")
                    .HasColumnType("numeric(18, 0)");

                entity.Property(e => e.ShowroomPrice)
                    .HasColumnName("Showroom_price")
                    .HasColumnType("numeric(18, 0)");

                entity.Property(e => e.UserId).HasColumnName("user_id");

                entity.Property(e => e.VehicleModel)
                    .HasColumnName("Vehicle_model")
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.VehicleName)
                    .HasColumnName("Vehicle_name")
                    .HasMaxLength(150)
                    .IsUnicode(false);

                entity.Property(e => e.VehicleType)
                    .HasColumnName("Vehicle_type")
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.HasOne(d => d.User)
                    .WithMany(p => p.VehicleDetails)
                    .HasForeignKey(d => d.UserId)
                    .OnDelete(DeleteBehavior.Cascade)
                    .HasConstraintName("FK__Vehicle_D__user___3F466844");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}

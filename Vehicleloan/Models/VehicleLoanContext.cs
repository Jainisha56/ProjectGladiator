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
        public virtual DbSet<UserDetails> UserDetails { get; set; }
        public virtual DbSet<VehicleDetails> VehicleDetails { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. See http://go.microsoft.com/fwlink/?LinkId=723263 for guidance on storing connection strings.
                optionsBuilder.UseSqlServer("Server=DESKTOP-4G06BOQ;Database=VehicleLoan;Trusted_Connection=True;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<AdminDetails>(entity =>
            {
                entity.HasKey(e => e.AdminId)
                    .HasName("PK__Admin_De__4A311D2F1D75C073");

                entity.ToTable("Admin_Details");

                entity.Property(e => e.AdminId).HasColumnName("Admin_id");

                entity.Property(e => e.AdminEmail)
                    .IsRequired()
                    .HasColumnName("Admin_Email")
                    .HasMaxLength(250);

                entity.Property(e => e.AdminPassword)
                    .IsRequired()
                    .HasColumnName("Admin_password")
                    .HasMaxLength(20);
            });

            modelBuilder.Entity<BankDetails>(entity =>
            {
                entity.HasKey(e => e.AccountNum)
                    .HasName("PK__bank_det__EFC6E16929B4E54D");

                entity.ToTable("bank_details");

                entity.Property(e => e.AccountNum)
                    .HasColumnName("Account_Num")
                    .HasColumnType("numeric(18, 0)");

                entity.Property(e => e.AccountType)
                    .HasColumnName("account_type")
                    .HasMaxLength(100);

                entity.Property(e => e.BankName)
                    .HasColumnName("bank_name")
                    .HasMaxLength(50);

                entity.Property(e => e.BranchName)
                    .HasColumnName("branch_name")
                    .HasMaxLength(50);

                entity.Property(e => e.IfscCode)
                    .HasColumnName("ifsc_code")
                    .HasMaxLength(20);

                entity.Property(e => e.UserRefId).HasColumnName("user_ref_id");

                entity.HasOne(d => d.UserRef)
                    .WithMany(p => p.BankDetails)
                    .HasForeignKey(d => d.UserRefId)
                    .HasConstraintName("FK__bank_deta__user___4AB81AF0");
            });

            modelBuilder.Entity<EmploymentDetails>(entity =>
            {
                entity.HasKey(e => e.EmpId)
                    .HasName("PK__Employme__1299A8611329CFF6");

                entity.ToTable("Employment_Details");

                entity.Property(e => e.EmpId).HasColumnName("emp_id");

                entity.Property(e => e.AnnualSal)
                    .HasColumnName("annual_sal")
                    .HasColumnType("money");

                entity.Property(e => e.ExistingEmi)
                    .HasColumnName("existing_emi")
                    .HasMaxLength(10)
                    .IsUnicode(false);

                entity.Property(e => e.TypeOfEmp)
                    .HasColumnName("type_of_emp")
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.UserId).HasColumnName("user_id");

                entity.Property(e => e.WorkExperience).HasColumnName("Work_Experience");

                entity.HasOne(d => d.User)
                    .WithMany(p => p.EmploymentDetails)
                    .HasForeignKey(d => d.UserId)
                    .OnDelete(DeleteBehavior.Cascade)
                    .HasConstraintName("FK__Employmen__user___3A81B327");
            });

            modelBuilder.Entity<LoanApplications>(entity =>
            {
                entity.HasKey(e => e.ApplicationId)
                    .HasName("PK__Loan_App__E064DD934BE62263");

                entity.ToTable("Loan_Applications");

                entity.Property(e => e.ApplicationId).HasColumnName("Application_id");

                entity.Property(e => e.Amount).HasColumnType("money");

                entity.Property(e => e.ApplicationDate)
                    .HasColumnName("Application_date")
                    .HasColumnType("date");

                entity.Property(e => e.ApplicationStatus)
                    .HasColumnName("Application_Status")
                    .HasMaxLength(30)
                    .IsUnicode(false);

                entity.Property(e => e.Duration).HasColumnName("duration");

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
                entity.HasKey(e => e.LoanId)
                    .HasName("PK__loan_pro__A1F79554E5C15266");

                entity.ToTable("loan_profile");

                entity.Property(e => e.LoanId).HasColumnName("loan_id");

                entity.Property(e => e.CompletedInstallments).HasColumnName("completed_installments");

                entity.Property(e => e.Emi)
                    .HasColumnName("emi")
                    .HasColumnType("money");

                entity.Property(e => e.LoanApplicationId).HasColumnName("loan_application_id");

                entity.Property(e => e.LoanEndDate)
                    .HasColumnName("loan_end_date")
                    .HasColumnType("date");

                entity.Property(e => e.LoanStartDate)
                    .HasColumnName("loan_start_date")
                    .HasColumnType("date");

                entity.Property(e => e.RemainingAmount)
                    .HasColumnName("remaining_amount")
                    .HasColumnType("money");

                entity.Property(e => e.TotalAmount)
                    .HasColumnName("total_amount")
                    .HasColumnType("money");

                entity.Property(e => e.TotalInstallments).HasColumnName("total_installments");

                entity.Property(e => e.UserRefId).HasColumnName("user_ref_id");

                entity.Property(e => e.VehicleId).HasColumnName("Vehicle_id");

                entity.HasOne(d => d.LoanApplication)
                    .WithMany(p => p.LoanProfile)
                    .HasForeignKey(d => d.LoanApplicationId)
                    .HasConstraintName("FK__loan_prof__loan___47DBAE45");

                entity.HasOne(d => d.UserRef)
                    .WithMany(p => p.LoanProfile)
                    .HasForeignKey(d => d.UserRefId)
                    .HasConstraintName("FK__loan_prof__user___45F365D3");

                entity.HasOne(d => d.Vehicle)
                    .WithMany(p => p.LoanProfile)
                    .HasForeignKey(d => d.VehicleId)
                    .OnDelete(DeleteBehavior.Cascade)
                    .HasConstraintName("FK__loan_prof__Vehic__46E78A0C");
            });

            modelBuilder.Entity<UserDetails>(entity =>
            {
                entity.HasKey(e => e.UserId)
                    .HasName("PK__User_Det__206A9DF8C28293E6");

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
                    .HasMaxLength(50);

                entity.Property(e => e.UserGender)
                    .HasColumnName("User_gender")
                    .HasMaxLength(10)
                    .IsUnicode(false);

                entity.Property(e => e.UserLastName)
                    .HasColumnName("User_LastName")
                    .HasMaxLength(50);

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
                    .HasName("PK__Vehicle___CE64613D702D4058");

                entity.ToTable("Vehicle_Details");

                entity.Property(e => e.VehicleId).HasColumnName("Vehicle_id");

                entity.Property(e => e.ManufactureYear)
                    .HasColumnName("Manufacture_year")
                    .HasMaxLength(10)
                    .IsUnicode(false);

                entity.Property(e => e.OnRoadPrice)
                    .HasColumnName("On_road_price")
                    .HasColumnType("money");

                entity.Property(e => e.ShowroomPrice)
                    .HasColumnName("Showroom_price")
                    .HasColumnType("money");

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

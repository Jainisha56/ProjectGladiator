
create table User_Details (User_id int identity(1,1) primary key , User_FirstName nvarchar(50) not null ,
User_LastName nvarchar(50) , User_Age numeric(2) check(User_Age>18) , User_DoB date not null , 
User_gender varchar(10) , User_PhoneNum numeric(10) , User_Email nvarchar(250) , User_Address nvarchar(500) ,
User_city varchar(50) , User_state varchar(50) , User_pincode numeric(6) , User_password nvarchar(20) )

create table Employment_Details(
emp_id int identity(700,1) primary key ,
user_id int references User_Details(User_id) on delete cascade on update cascade, 
type_of_emp varchar(50) , annual_sal money , existing_emi varchar(10), Work_Experience int)

create table Admin_Details(Admin_id int identity(100,1) primary key  ,
Admin_Email nvarchar(250) not null,
Admin_password nvarchar(20) not null )  

--create table Admin_Details(Admin_id int primary key , Admin_UserName nvarchar(30) not null ,
--Admin_password nvarchar(20) , Admin_Email nvarchar(250) , Admin_timestamp datetime default CURRENT_TIMESTAMP )

create table Vehicle_Details(Vehicle_id int identity(200,1) primary key , 
user_id int references User_Details(User_id) on delete cascade on update cascade, 
Vehicle_type varchar(50) , Vehicle_model varchar(100), Vehicle_name varchar(150) ,
Showroom_price money , On_road_price money , Manufacture_year varchar(10))

create table Loan_Applications( Application_id int identity(1000,1) primary key , 
user_ref_id int references User_Details(User_id) ,
Vehicle_id int references Vehicle_Details(Vehicle_id) on delete cascade on update cascade, 
Amount money , Interest int , duration int ,
Application_Status varchar(30) , Application_date date )

create table loan_profile( 
loan_id int identity(500,1) primary key,
user_ref_id int references User_Details(User_id) ,
Vehicle_id int references Vehicle_Details(Vehicle_id) on delete cascade on update cascade, 
loan_application_id int references Loan_Applications(Application_id) ,
total_amount money , total_installments int ,
emi money , loan_start_date date , loan_end_date date)

create table bank_details( Account_Num numeric primary key,
user_ref_id int references User_Details(User_id) ,
bank_name nvarchar(50),
account_type nvarchar(100) ,branch_name nvarchar(50) , 
ifsc_code nvarchar(20) )

select  * from User_Details
select  * from Admin_Details
select * from Vehicle_Details
select * from Employment_Details
select * from bank_details
select * from Loan_Applications
select * from loan_profile

insert into Admin_Details (Admin_password,Admin_Email) values 
('Adityaavijay24','adityaavijay@gmail.com')
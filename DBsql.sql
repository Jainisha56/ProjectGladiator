create database VehicleLoan

use VehicleLoan

create table User_Details (User_id int identity(1,1) primary key , User_FirstName nvarchar(20) not null ,
User_LastName nvarchar(20) , User_Age numeric(2) check(User_Age>18) , User_DoB date not null , 
User_gender varchar(10) , User_PhoneNum numeric(10) , User_Email nvarchar(250) , User_Address nvarchar(500) ,
User_city varchar(50) , User_state varchar(50) , User_pincode numeric(6) , User_password nvarchar(20) )

create table Employment_Details(
emp_id int identity(700,1) primary key ,
user_id int references User_Details(User_id) on delete cascade on update cascade, 
type_of_emp varchar(50) , annual_sal numeric(20) , existing_emi varchar(10) )

create table Admin_Details(Admin_id int identity(100,1) primary key  ,
Admin_Email nvarchar(250) not null,
Admin_password nvarchar(20) not null  )  

--create table Admin_Details(Admin_id int primary key , Admin_UserName nvarchar(30) not null ,
--Admin_password nvarchar(20) , Admin_Email nvarchar(250) , Admin_timestamp datetime default CURRENT_TIMESTAMP )

create table Vehicle_Details(Vehicle_id int identity(200,1) primary key , 
user_id int references User_Details(User_id) on delete cascade on update cascade, 
Vehicle_type varchar(50) , Vehicle_model varchar(100), Vehicle_name varchar(150) ,
Showroom_price numeric , On_road_price numeric , Manufacture_year varchar(10))

create table Loan_Applications( Application_id int identity(1000,1) primary key , 
user_ref_id int references User_Details(User_id) ,
Vehicle_id int references Vehicle_Details(Vehicle_id) on delete cascade on update cascade, 
Amount numeric , Interest numeric , duration numeric ,
Application_Status varchar(30) , Application_date datetime )

create table loan_profile( 
loan_id int identity(500,1) primary key,
user_ref_id int references User_Details(User_id) ,
Vehicle_id int references Vehicle_Details(Vehicle_id) on delete cascade on update cascade, 
loan_application_id int references Loan_Applications(Application_id) ,
total_amount numeric , total_installments numeric ,
completed_installments numeric , remaining_amount numeric , 
emi numeric , loan_start_date datetime , loan_end_date datetime)

create table bank_details( Account_Num numeric primary key,
user_ref_id int references User_Details(User_id) ,
bank_name nvarchar(50),
account_type nvarchar(100) ,branch_name nvarchar(50) , 
ifsc_code nvarchar(20) )


insert into User_Details (User_FirstName , User_LastName ,User_Age,User_DoB,User_gender,
User_PhoneNum,User_Email,User_Address,User_city,User_state,User_pincode,User_password) values
('Aditya','Vijay',22,'1999-06-23', 'male',9876412365, 'adityaVijay@gmail.com','#23 Aditya ,VijayNagar ', 'Chennai','Tamil Nadu',600894,'hiaditya100'),
('Aasim','Inamdar',32,'1989-09-13', 'male',9875123965, 'aasiminamdar23@gmail.com','#39 Aasim ,Gandhi street ', 'mumbai','Maharastra',580894,'hiaasim758'),
('kavya','sharma',26,'1994-12-02', 'female',9686512365, 'kavyasharma456@gmail.com','#456 kavya ,Nandhi road ', 'bangalore','karntaka',560068,'hikavya456'),
('Roopa','shree',30,'1988-02-06', 'female',8768512365, 'roopashree12@gmail.com','#12 roopa ,mahatma street ', 'mysore','karnataka',580894,'hiroopa12')

insert into Admin_Details (Admin_password,Admin_Email) values 
('adityaaVijay23','adityaVijay@gmail.com'),
('bp$23','prashanth99@gmail.com'),
('geethika505','geethika505@gmail.com'),
('jainisha&07','jainisha07@gmail.com')

insert into Vehicle_Details (user_id,Vehicle_type,Vehicle_model,Vehicle_name,Showroom_price,On_road_price,Manufacture_year) values 
(1,'car','maruthi suzuki','baleno',1250000,1400000,'2019'),
(2,'bike','tvs','jupiter',70000,90000,'2015'),
(2,'bike','tvs','rr310',300000,350000,'2021'),
(1,'car','hyundai','verna',1200000,1350000,'2018')

insert into Employment_Details (user_id,type_of_emp,annual_sal,existing_emi) values
(1,'business',1000000,'no'),(2,'finance',1200000,'no')

-- ambiguity error with user account
insert into bank_details (Account_Num,user_ref_id,bank_name,account_type,branch_name,ifsc_code) values
(10564859,1,'icicc','savings','anna nagar','icici0007'),
(10564479,2,'axis bank','current','anna nagar','icici0007')



sp_help 

select  * from User_Details
select  * from Admin_Details
select * from Vehicle_Details
select * from Employment_Details
select * from bank_details

drop table User_Details
drop table Admin_Details
drop table Vehicle_Details
drop table Employment_Details
drop table Loan_Applications
drop table loan_profile
drop table bank_details
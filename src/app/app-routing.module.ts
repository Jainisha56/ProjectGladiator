import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminNavComponent } from './admin-nav/admin-nav.component';
import { AloginComponent } from './alogin/alogin.component';
import { ApplyLoanComponent } from './apply-loan/apply-loan.component';
import { ApprovedLoansComponent } from './approved-loans/approved-loans.component';
import { EMICalculatorComponent } from './emicalculator/emicalculator.component';
import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './home/home.component';
import { LoanApplicationsComponent } from './loan-applications/loan-applications.component';
import { LoanOffersComponent } from './loan-offers/loan-offers.component';
import { LoanProfileComponent } from './loan-profile/loan-profile.component';
import { LoanQuotesComponent } from './loan-quotes/loan-quotes.component';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RejectedListComponent } from './rejected-list/rejected-list.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { UserNavComponent } from './user-nav/user-nav.component';
import { UserSettingsComponent } from './user-settings/user-settings.component';
import { VehiclesComponent } from './vehicles/vehicles.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'Home',component:HomeComponent},
  {path:'About Us',component:AboutUsComponent},
  {path:'EMI Calculator',component:EMICalculatorComponent},
  {path:'Apply Loan',component:ApplyLoanComponent},
  {path:'Alogin',component:AloginComponent},
  {path:'Loan Offers', component:LoanOffersComponent},
  {path:'Loan Quotes', component:LoanQuotesComponent},
  {path:'Register',component:RegisterComponent},
  {path:'Login',component:LoginComponent},
  

  {path:'admin-dash',component:AdminDashboardComponent},
  {path:'vehicles',component:VehiclesComponent},
  {path:'loan-Applications',component:LoanApplicationsComponent},
  {path:'approved-loans',component:ApprovedLoansComponent},
  {path:'rejected-list',component:RejectedListComponent},
  {path:'user-dash',component:UserDashboardComponent},
  {path:'user-settings',component:UserSettingsComponent},
  {path:'loan-history',component:LoanProfileComponent},
  {path:'user-nav',component:UserNavComponent},
  {path:'admin-nav',component:AdminNavComponent},
  {path:'**',component:ErrorComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
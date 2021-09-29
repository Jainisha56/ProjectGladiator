import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AloginComponent } from './alogin/alogin.component';
import { ApplyLoanComponent } from './apply-loan/apply-loan.component';
import { ApprovedLoansComponent } from './approved-loans/approved-loans.component';
import { EMICalculatorComponent } from './emicalculator/emicalculator.component';
import { ErrorComponent } from './error/error.component';
import { ForgotpwdComponent } from './forgotpwd/forgotpwd.component';
import { HomeComponent } from './home/home.component';
import { LoanApplicationsComponent } from './loan-applications/loan-applications.component';
import { LoanOffersComponent } from './loan-offers/loan-offers.component';
import { LoanProfileComponent } from './loan-profile/loan-profile.component';
import { LoanQuotesComponent } from './loan-quotes/loan-quotes.component';

import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { RegisterComponent } from './register/register.component';
import { RejectedListComponent } from './rejected-list/rejected-list.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';

import { UserSettingsComponent } from './user-settings/user-settings.component';
import { VehiclesComponent } from './vehicles/vehicles.component';

const routes: Routes = [
  {path:'',component:HomeComponent,outlet: 'outlet-main'},
  {path:'Home',component:HomeComponent,outlet: 'outlet-main'},
  {path:'About Us',component:AboutUsComponent,outlet: 'outlet-main'},
  {path:'EMI Calculator',component:EMICalculatorComponent,outlet: 'outlet-main'},
  {path:'Apply Loan',component:ApplyLoanComponent,outlet: 'outlet-main'},
  {path:'Alogin',component:AloginComponent,outlet: 'outlet-main'},
  {path:'Loan Offers', component:LoanOffersComponent,outlet: 'outlet-main'},
  {path:'Loan Quotes', component:LoanQuotesComponent,outlet: 'outlet-main'},
  {path:'Register',component:RegisterComponent,outlet: 'outlet-main'},
  {path:'Login',component:LoginComponent,outlet: 'outlet-main'},
  
  {path:'',component:UserDashboardComponent,outlet: 'outlet-udash'},
  {path:'user-dash',component:UserDashboardComponent,outlet: 'outlet-udash'},
  {path:'user-settings',component:UserSettingsComponent,outlet: 'outlet-udash'},
  {path:'loan-history',component:LoanProfileComponent,outlet: 'outlet-udash'},

  {path:'',component:AdminDashboardComponent,outlet: 'outlet-adash'},
  {path:'admin-dash',component:AdminDashboardComponent,outlet: 'outlet-adash'},
  {path:'vehicles',component:VehiclesComponent,outlet: 'outlet-adash'},
  {path:'loan-Applications',component:LoanApplicationsComponent,outlet: 'outlet-adash'},
  {path:'approved-loans',component:ApprovedLoansComponent,outlet: 'outlet-adash'},
  {path:'rejected-list',component:RejectedListComponent,outlet: 'outlet-adash'},
  

  {path:'forgotpassword',component:ForgotpwdComponent},
  {path:'**',component:ErrorComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

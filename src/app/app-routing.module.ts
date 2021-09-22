import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { ApplyLoanComponent } from './apply-loan/apply-loan.component';
import { EMICalculatorComponent } from './emicalculator/emicalculator.component';
import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './home/home.component';
import { LoanOffersComponent } from './loan-offers/loan-offers.component';
import { LoanQuotesComponent } from './loan-quotes/loan-quotes.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'Home',component:HomeComponent},
  {path:'About Us',component:AboutUsComponent},
  {path:'EMI Calculator',component:EMICalculatorComponent},
  {path:'Apply Loan',component:ApplyLoanComponent},
  {path:'Loan Offers', component:LoanOffersComponent},
  {path:'Loan Quotes', component:LoanQuotesComponent},
  {path:'**',component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

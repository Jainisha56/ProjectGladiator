import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { ApplyLoanComponent } from './apply-loan/apply-loan.component';
import { EMICalculatorComponent } from './emicalculator/emicalculator.component';
import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'Home',component:HomeComponent},
  {path:'About Us',component:AboutUsComponent},
  {path:'EMI Calculator',component:EMICalculatorComponent},
  {path:'Apply Loan',component:ApplyLoanComponent},
  {path:'**',component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

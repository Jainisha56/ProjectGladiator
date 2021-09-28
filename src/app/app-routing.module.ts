import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmiCalculatorComponent } from './emi-calculator/emi-calculator.component';


const routes: Routes = [
  {path:'', component:EmiCalculatorComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

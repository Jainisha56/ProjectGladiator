import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotpwdComponent } from './forgotpwd/forgotpwd.component';

const routes: Routes = [
  {path:'forgot',component:ForgotpwdComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

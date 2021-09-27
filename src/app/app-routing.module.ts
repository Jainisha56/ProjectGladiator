import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminNavComponent } from './admin-nav/admin-nav.component';
import { ApprovedLoansComponent } from './approved-loans/approved-loans.component';
import { LoanApplicationsComponent } from './loan-applications/loan-applications.component';
import { RejectedListComponent } from './rejected-list/rejected-list.component';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { UserSettingsComponent } from './user-settings/user-settings.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { LoanProfileComponent } from './loan-profile/loan-profile.component';


const routes: Routes = [
  {path:'admin-dash',component:AdminDashboardComponent},
  {path:'vehicles',component:VehiclesComponent},
  {path:'loan-Applications',component:LoanApplicationsComponent},
  {path:'approved-loans',component:ApprovedLoansComponent},
  {path:'rejected-list',component:RejectedListComponent},
  {path:'user-dash',component:UserDashboardComponent},
  {path:'user-settings',component:UserSettingsComponent},
  {path:'loan-history',component:LoanProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

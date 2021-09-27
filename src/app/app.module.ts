import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminNavComponent } from './admin-nav/admin-nav.component';
import { UserNavComponent } from './user-nav/user-nav.component';
import { LoanApplicationsComponent } from './loan-applications/loan-applications.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { RejectedListComponent } from './rejected-list/rejected-list.component';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { ApprovedLoansComponent } from './approved-loans/approved-loans.component';
import { UserSettingsComponent } from './user-settings/user-settings.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { LoanProfileComponent } from './loan-profile/loan-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminNavComponent,
    UserNavComponent,
    LoanApplicationsComponent,
    AdminDashboardComponent,
    RejectedListComponent,
    VehiclesComponent,
    ApprovedLoansComponent,
    UserSettingsComponent,
    UserDashboardComponent,
    LoanProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; 

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { EMICalculatorComponent } from './emicalculator/emicalculator.component';
import { ApplyLoanComponent } from './apply-loan/apply-loan.component';
import { ErrorComponent } from './error/error.component';
import { LoanOffersComponent } from './loan-offers/loan-offers.component';
import { LoanQuotesComponent } from './loan-quotes/loan-quotes.component';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AloginComponent } from './alogin/alogin.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { LoanApplicationsComponent } from './loan-applications/loan-applications.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { RejectedListComponent } from './rejected-list/rejected-list.component';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { ApprovedLoansComponent } from './approved-loans/approved-loans.component';
import { UserSettingsComponent } from './user-settings/user-settings.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { LoanProfileComponent } from './loan-profile/loan-profile.component';
import { ChangepwdComponent } from './changepwd/changepwd.component';
import { ForgotpwdComponent } from './forgotpwd/forgotpwd.component';
import { AcceptloansComponent } from './acceptloans/acceptloans.component';

import { ChartsModule } from 'ng2-charts';
import { TabsComponent } from './tabs/tabs.component';
import { PersonaldetailsComponent } from './personaldetails/personaldetails.component';
import { AllLoanOffersComponent } from './all-loan-offers/all-loan-offers.component';



@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    AboutUsComponent,
    EMICalculatorComponent,
    ApplyLoanComponent,
    ErrorComponent,
    LoanOffersComponent,
    LoanQuotesComponent,
    TabsComponent,
    PersonaldetailsComponent,
    AllLoanOffersComponent,

    RegisterComponent,
    LoginComponent,
    AloginComponent,
//dashboards
    LoanApplicationsComponent,
    AdminDashboardComponent,
    RejectedListComponent,
    VehiclesComponent,
    ApprovedLoansComponent,
    UserSettingsComponent,
    UserDashboardComponent,
    LoanProfileComponent,
    ChangepwdComponent,
    ForgotpwdComponent,
    AcceptloansComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,

    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,

    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

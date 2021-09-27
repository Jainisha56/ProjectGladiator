import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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

    RegisterComponent,
    LoginComponent,
    AloginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

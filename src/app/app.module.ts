import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ForgotpwdComponent } from './forgotpwd/forgotpwd.component';
import { ChangepwdComponent } from './changepwd/changepwd.component';

@NgModule({
  declarations: [
    AppComponent,
    ForgotpwdComponent,
    ChangepwdComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

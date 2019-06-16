import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { HomeComponent } from './Components/home/home.component';
import { NavigationComponent } from './Components/navigation/navigation.component';
import { HistoryComponent } from './Components/history/history.component';
import { PaymentsComponent } from './Components/payments/payments.component';
import { AddCardComponent } from './Components/add-card/add-card.component';
import { ConfirmNumberComponent } from './Components/confirm-number/confirm-number.component';
import { DriverSignupComponent } from './Components/DriversComponents/driver-signup/driver-signup.component';
import { UserRequestComponent } from './Components/DriversComponents/user-request/user-request.component';
import { ContactUserComponent } from './Components/DriversComponents/contact-user/contact-user.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    NavigationComponent,
    HistoryComponent,
    PaymentsComponent,
    AddCardComponent,
    ConfirmNumberComponent,
    DriverSignupComponent,
    UserRequestComponent,
    ContactUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MaterialModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

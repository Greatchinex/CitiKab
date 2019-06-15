import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { HomeComponent } from './Components/home/home.component';
import { HistoryComponent } from './Components/history/history.component';
import { PaymentsComponent } from './Components/payments/payments.component';
import { AddCardComponent } from './Components/add-card/add-card.component';
import { ConfirmNumberComponent } from './Components/confirm-number/confirm-number.component';
import { NavigationComponent } from './Components/navigation/navigation.component';

const routes: Routes = [
  {path: "", redirectTo: "home", pathMatch: "full"},
  {path: "home", component: HomeComponent},
  {path: "login", component: LoginComponent},
  {path: "register", component: RegisterComponent},
  {path: "payments", component: PaymentsComponent},
  {path: "addcard", component: AddCardComponent},
  {path: "confirm", component: ConfirmNumberComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

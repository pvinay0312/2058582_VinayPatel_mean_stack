import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { FormsModule, NgModel, ReactiveFormsModule } from '@angular/forms';
import { signupcomponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { UserService } from './user.service';
import { AuthService } from './auth.service';
import { AlertifyService } from './alertify.service';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AddProfileComponent } from './add-profile/add-profile.component';

let routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: signupcomponent },
  { path: 'profile', component: AddProfileComponent }

];

@NgModule({
  declarations: [
    AppComponent,
    signupcomponent,
    LoginComponent,
    NavBarComponent,
    AddProfileComponent,
  ],
  imports: [
    BrowserModule, FormsModule, ReactiveFormsModule, HttpClientModule,
    RouterModule, RouterModule.forRoot(routes)
  ],
  providers: [
    UserService,
    AlertifyService,
    AuthService,


  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

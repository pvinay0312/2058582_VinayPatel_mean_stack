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
import { AddTaskcomponent } from './add-task/add-task.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';

let routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: signupcomponent },
  { path: 'task', component: AddTaskcomponent }

];

@NgModule({
  declarations: [
    AppComponent,
    signupcomponent,
    LoginComponent,
    NavBarComponent,
    AddTaskcomponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    RouterModule, RouterModule.forRoot(routes), ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [
    UserService,
    AlertifyService,
    AuthService,


  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

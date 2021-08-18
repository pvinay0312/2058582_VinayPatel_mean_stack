import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { User } from '../model/user';
import { AlertifyService } from '../alertify.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class signupcomponent implements OnInit {
  registrationForm!: FormGroup;
  user!: User;
  usersubmitted!: boolean;
  constructor(private fb: FormBuilder, private userService: UserService, private alertify: AlertifyService, private router: Router) { }
  ngOnInit() {

    this.creatRegistrationForm();
  }

  creatRegistrationForm() {
    this.registrationForm = this.fb.group({
      firstName: [null, Validators.required],
      lastName: [null, Validators.required],
      userName: [null, Validators.required],
      password: [null, [Validators.required, Validators.minLength(8)]]
    });
  }

  //Getter method for all forms 
  get firstName() {
    return this.registrationForm.get('firstName') as FormControl;
  }

  get lastName() {
    return this.registrationForm.get('lastName') as FormControl;
  }

  get userName() {
    return this.registrationForm.get('userName') as FormControl;
  }

  get password() {
    return this.registrationForm.get('password') as FormControl;
  }

  onSubmit() {
    console.log(this.registrationForm.value);
    this.usersubmitted = true;
    if (this.registrationForm.valid) {
      //this.user = Object.assign(this.user, this.registrationForm.value);
      this.userService.addUser(this.userData());
      this.registrationForm.reset();
      this.usersubmitted = false;
      this.alertify.success("You are sucessfully registered");
      this.router.navigate(['/login']);
    } else {
      this.alertify.error("Please fill out the required field");
    }
  }

  userData(): User {
    return this.user = {
      firstName: this.firstName.value,
      lastName: this.lastName.value,
      userName: this.userName.value,
      password: this.password.value
    }
  }



}

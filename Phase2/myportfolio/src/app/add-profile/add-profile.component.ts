import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Contact } from '../model/user';
import { UserService } from '../user.service';



@Component({
  selector: 'app-add-profile',
  templateUrl: './add-profile.component.html',
  styleUrls: ['./add-profile.component.css'],
  //providers: [AuthService]
})
export class AddProfileComponent implements OnInit {
  // loggedinUser: string | undefined;
  // @ViewChild('Form')
  // addProfileForm!: NgForm;
  //employees: Employee[] | undefined;
  //EmployeeData: Array<Employee> = [];
  //EmployeeData: Employee[];
  // flag: boolean = false;
  // employees: Employee[] = [];
  contact: Contact = new Contact();
  contactList = [] as  any;
  constructor(private _userService: UserService, private _router: Router) { }

  ngOnInit(): void {
    // this.getEmployee();
    // this._userService.getAllContacts().subscribe(result => {
    //   this.contactList = result;
    // }, (error) => {
    //   console.log(error);
    // })
  }

  myFunc() {
    var abc = {
      num1 : ((document.getElementById("cname") as HTMLInputElement).value),
      num2 : ((document.getElementById("phoneNumber") as HTMLInputElement).value)
    }
      
      this.contactList.push(abc);
      console.log(abc);
  }
  // onBack() {
  //   this.router.navigate(['/']);
  // }

  // // onSubmit() {
  // //   console.log('Congrats, form Submitted');
  // //   console.log(this.addProfileForm);
  // // }
  // getEmployee() {
  //   this.flag = true;
  //   this.authService.getEmployee()
  //     .subscribe((data: Employee[]) => {
  //       console.log(data);
  //       this.employees = data;
  //     });
  //   // .subscribe((data: Employee[]) => {
  //   //   console.log(complete);
  //   //   this.employees = complete;

  // }
  // loggedin() {
  //   this.loggedinUser != localStorage.getItem('token');
  //   return this.loggedinUser;
  // }

  // onLogout() {
  //   localStorage.removeItem('token');
  // }

}

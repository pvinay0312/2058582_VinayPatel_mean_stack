import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Contact } from '../model/user';
import { UserService } from '../user.service';


@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css'],
  //providers: [AuthService]
})
export class AddTaskcomponent implements OnInit {

  contact: Contact = new Contact();
  contactList = [] as any;
  constructor(private _userService: UserService, private _router: Router) { }

  ngOnInit(): void {

  }

  myFunc() {
    var abc = {
      num1: ((document.getElementById("empId") as HTMLInputElement).value),
      num2: ((document.getElementById("name") as HTMLInputElement).value),
      num3: ((document.getElementById("task") as HTMLInputElement).value),
      num4: ((document.getElementById("date") as HTMLInputElement).value)


    }

    this.contactList.push(abc);
    console.log(abc);
  }

}

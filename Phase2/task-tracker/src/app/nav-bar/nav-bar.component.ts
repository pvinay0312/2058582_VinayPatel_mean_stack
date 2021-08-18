import { Component, OnInit } from '@angular/core';
import { AlertifyService } from '../alertify.service';
import { User } from '../model/user';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  loggedinUser: any;
  constructor(private alertify: AlertifyService) {
  }

  ngOnInit(): void {
  }

  isLoggedIn() {
    if (this.loggedinUser = localStorage.getItem('token')) {
      return `${this.loggedinUser}`;
    } else {
      return false;
    }
    
  }

  onLogout() {
    localStorage.removeItem('token');
    this.alertify.success("You are logged out! ");
  }

}

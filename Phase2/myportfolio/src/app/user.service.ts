import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contact, User } from './model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _http: HttpClient) { }

  addUser(user: User) {
    let users: any[];
    if (localStorage.getItem('Users')) {
      users = JSON.parse(localStorage.getItem('Users') || '[]');
      users = [user, ...users];
    } else {
      users = [user];
    }
    localStorage.setItem('Users', JSON.stringify(users));
  }

  addNewContact(contact: Contact): Observable<Contact> {
    return this._http.post<Contact>('http://localhost:3000/profile', contact);
  }

  getAllContacts(): Observable<Contact[]> {
    return this._http.get<Contact[]>('http://localhost:3000/profile');
  } 

}

import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { AuthData } from './auth-data.model';
import { Contact } from './model/user';
import { Observable } from "rxjs";




@Injectable({ providedIn: "root" })

export class AuthService {
    url = "user.ts";
    constructor(private http: HttpClient) { }

    authUser(user: any) {
        let UserArray = [];
        if (localStorage.getItem('Users')) {
            UserArray = JSON.parse(localStorage.getItem('Users') || '[]');
        }
        return UserArray.find((p: { userName: any; password: any; }) => p.userName === user.userName && p.password === user.password);

    }
    // getEmployee(): Observable<Employee[]> {
    //     return this.http.get<Employee[]>("https://jsonplaceholder.typicode.com/todos" + '/employees')
    // }
    getEmployee() {
        return this.http.get<Contact[]>(this.url + '/users')
    }


}
    // CreateUser(email: string, password: string) {
    //     const authData: AuthData = { email: email, password: password }
    //     this.http.post("http://localhost:4200/api/user/signup", authData)
    //         .subscribe((response: any) => {
    //             console.log(response);
    //         })

    // }

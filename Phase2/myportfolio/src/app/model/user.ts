export interface User {
    firstName: string;
    lastName: string;
    userName: string;
    password: string;
}


//employee.ts
// export class Employee {
//     constructor(public cname: String,
//         public phoneNumber: Number,

//     ) { }
// }
export class Contact {
    cname: string;
    phoneNumber: number;

    constructor() {
        this.cname = "";
        this.phoneNumber = 0;
    }
}
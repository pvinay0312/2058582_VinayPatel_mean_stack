export interface User {
    firstName: string;
    lastName: string;
    userName: string;
    password: string;
}


export class Contact {
    cname: string;
    phoneNumber: number;

    constructor() {
        this.cname = "";
        this.phoneNumber = 0;
    }
}
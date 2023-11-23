import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { LoginRequest } from "../interfaces/loginRequest";

@Injectable({
    providedIn: "root"
})
export class AuthenticationService {
    constructor(private http: HttpClient) { }



    public login(obj: LoginRequest): boolean {
        if(obj.email === 'pepito@correo.com' && obj.password === '123456') {
            window.localStorage.setItem(
                'user',
                JSON.stringify({
                    email: obj.email,
                    password: obj.password
                })
            )
            return true;
        } else {
            return false;
        }
    }

    public isLogged(): boolean {
        return window.localStorage.getItem('user') !== null;
    }
}
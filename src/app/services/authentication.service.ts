import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ILoginRequest } from "../interfaces/ILoginRequest";
import { ILoginResult } from "../interfaces/ILoginResult";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: "root"
})
export class AuthenticationService {

    private user: ILoginResult = {
        Id: '',
        NombresCompletos: '',
        Correo: '',
        UsuarioTipo: '',
        FechaLogin: new Date(),
        Token: '',
    }

    constructor(private http: HttpClient) { }



    public async login(obj: ILoginRequest): Promise<boolean> {
        try {
            const res: any = await this.http.post(environment.API_URL + 'api/login', obj).toPromise();
    
            console.log(res);
            if (res) {
                this.user = res as ILoginResult;
                window.localStorage.setItem('user', JSON.stringify(this.user));
                return true; // Retorna true directamente si el login es exitoso
            } else {
                return false; // Retorna false si la respuesta no es exitosa
            }
        } catch (err) {
            console.error(err);
            return false; // Retorna false en caso de error
        }
    }

    public isLogged(): boolean {
        return window.localStorage.getItem('user') !== null;
    }

    public getUserId(): string {
        let storage =  window.localStorage.getItem('user');
        console.log(storage);
        if(!storage){
            return '';
        }
        let user  = JSON.parse(storage);
        return user.id;
    }

    public getUserToken(): string {
        let storage =  window.localStorage.getItem('user');
        console.log(storage);
        if(!storage){
            return '';
        }
        let user  = JSON.parse(storage);
        return user.token;
    }
}
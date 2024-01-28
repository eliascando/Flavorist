import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { IUsuario } from "../interfaces/IUsuario";
import { environment } from "src/environments/environment";
import { AuthenticationService } from "./authentication.service";
import { INotification } from "../interfaces/INotification";


@Injectable()
export class UsuarioService{
    constructor(
        private http: HttpClient,
        private authenticationService: AuthenticationService
    ){}

    headers = {
        'Authorization': 'Bearer ' + this.authenticationService.getUserToken()
    }

    public async registerUsuario(usuario: IUsuario): Promise<any>{
        try{
            let res = await this.http.post(environment.API_URL+'api/usuario/registrar', usuario).toPromise();
            return res;
        }
        catch(err){
            console.error(err);
            throw err;
        }
    }

    public async getNotifications(): Promise<INotification[]>{
        try{
            let res: INotification[] = await this.http.get(environment.API_URL+'api/notificacion/' + this.authenticationService.getUserId(), {headers: this.headers}).toPromise() as INotification[];
            console.log('Notificaciones: ',res);
            return res
        }
        catch(err){
            console.error(err);
            throw err;
        }
    }

    public async getUsuarioById(id: string): Promise<any>{
        try{
            let res = await this.http.get(environment.API_URL+'api/usuario/' + id, {headers: this.headers}).toPromise();
            return res;
        }
        catch(err){
            console.error(err);
            throw err;
        }
    }

    public async getFollowers(id: string): Promise<any>{
        try{
            let res = await this.http.get(environment.API_URL+'api/followers/'+id, {headers: this.headers}).toPromise();
            return res;
        }
        catch(err){
            console.error(err);
            throw err;
        }
    }
    public async getFollowing(id: string): Promise<any>{
        try{
            let res = await this.http.get(environment.API_URL+'api/following/'+id, {headers: this.headers}).toPromise();
            return res;
        }
        catch(err){
            console.error(err);
            throw err;
        }
    }
}
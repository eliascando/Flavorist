import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AuthenticationService } from "./authentication.service";
import { environment } from "src/environments/environment";

@Injectable()

export class ActionsService{

    constructor(
        private http: HttpClient,
        private autService: AuthenticationService
    ){}

    headers = {
        'Authorization': 'Bearer ' + this.autService.getUserToken()
    }

    public async darLikeReceta(postId: string): Promise<any>{
        try{
            let body = {
                referenciaID: postId,
                usuarioID: this.autService.getUserId()
            }
            let res = await this.http.post(environment.API_URL+'api/like/receta', body, {headers: this.headers}).toPromise();
            console.log(res);
            return res;
        }
        catch(err){
            console.error(err);
            throw err;
        }
    }

    public async comentarReceta(postId: string, comentario: string): Promise<any>{
        try{
            let body = {
                usuarioID: this.autService.getUserId(),
                referenciaID: postId,
                texto: comentario
            }
            console.log(body);
            let res = await this.http.post(environment.API_URL+'api/comentar/receta', body, {headers: this.headers}).toPromise();
            console.log(res);
            return res;
        }
        catch(err){
            console.error(err);
            throw err;
        }
    }

    public async eliminarLike(postId: string): Promise<any>{
        try{
            let res = this.http.delete(`${environment.API_URL}api/unlike/${this.autService.getUserId()}/${postId}`, {headers: this.headers}).toPromise();
            return res;
        }
        catch(err){
            console.error(err);
            throw err;
        }
    }

    public async contarLikes(referenciaID: string){
        try{
            let res = await this.http.get(environment.API_URL+'api/like/contar/' + referenciaID, {headers: this.headers}).toPromise();
            console.log(res);
            return res;
        }
        catch(err){
            console.error(err);
            throw err;
        }
    }

    public async guardarReceta(referenciaID: string): Promise<any>{
        try{
            let body = {
                recetaID: referenciaID,
                usuarioID: this.autService.getUserId()
            }

            let res = await this.http.post(environment.API_URL+'api/guardar/receta', body, {headers: this.headers}).toPromise();
            console.log(res);
            return res;
        }
        catch(err){
            console.error(err);
            throw err;
        }
    }

    public async eliminarGuardadoReceta(referenciaID: string): Promise<any>{
        try{
            let res = await this.http.delete(`${environment.API_URL}api/eliminar/recetaguardada/${referenciaID}/${this.autService.getUserId()}`, {headers: this.headers}).toPromise();
            console.log(res);
            return res;
        }
        catch(err){
            console.error(err);
            throw err;
        }
    }

    public async getComentariosRecetas(referenciaID: string): Promise<any>{
        try{
            let res = await this.http.get(`${environment.API_URL}api/comentario/padres/${referenciaID}`, {headers: this.headers}).toPromise();
            console.log(res);
            return res;
        }
        catch(err){
            console.error(err);
            throw err;
        }
    }

    public async getLikesOwners(referenciaID: string): Promise<any>{
        try{
            let res = await this.http.get(`${environment.API_URL}api/like/usuarios/${referenciaID}`, {headers: this.headers}).toPromise();
            console.log(res);
            return res;
        }
        catch(err){
            console.error(err);
            throw err;
        }
    }

    public async followUsuario(usuarioID: string): Promise<any>{
        try{
            let body = {
                seguidorID: this.autService.getUserId(),
                seguidoID: usuarioID
            }
            let res = await this.http.post(environment.API_URL+'api/follow', body, {headers: this.headers}).toPromise();
            console.log(res);
            return res;
        }
        catch(err){
            console.error(err);
            throw err;
        }
    }
}
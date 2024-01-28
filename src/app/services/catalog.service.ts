import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ICatalogUUID } from "../interfaces/ICatalogUUID";
import { ICatalogINT } from "../interfaces/ICatalogINT";
import { AuthenticationService } from "./authentication.service";
import { environment } from "src/environments/environment";


@Injectable()

export class CatalogService {

    ingredienteCategoria: ICatalogUUID[] = [];
    paises: ICatalogUUID[] = [];
    recetaCategoria: ICatalogUUID[] = [];
    recetaDificultad: ICatalogINT[] = [];
    unidadMedida: ICatalogINT[] = [];

    constructor(private http: HttpClient, private authService: AuthenticationService){}

    async getIngredientesCategoria(): Promise<ICatalogUUID[]> {
        try{
            let headers = {
                'Authorization': 'Bearer ' + this.authService.getUserToken()
            }
            const res: ICatalogUUID[] = await this.http.get(environment.API_URL+'api/catalogo/ingredientecategoria', {headers: headers}).toPromise() as ICatalogUUID[];
            if(res){
                this.ingredienteCategoria = res;
            }
            return this.ingredienteCategoria;
        }catch(err){
            console.error(err);
            throw err;
        }
    }

    async getRecetaCategoria(): Promise<ICatalogUUID[]> {
        try{
            let headers = {
                'Authorization': 'Bearer ' + this.authService.getUserToken()
            }
            const res: ICatalogUUID[] = await this.http.get(environment.API_URL+'api/catalogo/recetacategoria', {headers: headers}).toPromise() as ICatalogUUID[];
            if(res){
                this.recetaCategoria = res;
            }
            return this.recetaCategoria;
        }
        catch(err){
            console.error(err);
            throw err;
        }
    }

    async getRecetaCategoriaById(id: string): Promise<ICatalogUUID> {
        try{
            let headers = {
                'Authorization': 'Bearer ' + this.authService.getUserToken()
            }
            const res: ICatalogUUID = await this.http.get(environment.API_URL+'api/catalogo/recetacategoria/'+id, {headers: headers}).toPromise() as ICatalogUUID;
            return res;
        }
        catch(err){
            console.error(err);
            throw err;
        }
    }

    async getRecetaDificultad(): Promise<ICatalogINT[]> {
        try{
            let headers = {
                'Authorization': 'Bearer ' + this.authService.getUserToken()
            }
            const res: ICatalogINT[] = await this.http.get(environment.API_URL+'api/catalogo/recetadificultad', {headers: headers}).toPromise() as ICatalogINT[];
            if(res){
                this.recetaDificultad = res;
            }
            return this.recetaDificultad;
        }
        catch(err){
            console.error(err);
            throw err;
        }
    }

    async getRecetaDificultadById(id: string): Promise<ICatalogINT> {
        try{
            let headers = {
                'Authorization': 'Bearer ' + this.authService.getUserToken()
            }
            const res: ICatalogINT = await this.http.get(environment.API_URL+'api/catalogo/recetadificultad/'+id, {headers: headers}).toPromise() as ICatalogINT;
            return res;
        }
        catch(err){
            console.error(err);
            throw err;
        }
    }

    async getUnidadMedida(): Promise<ICatalogINT[]> {
        try{
            let headers = {
                'Authorization': 'Bearer ' + this.authService.getUserToken()
            }
            const res: ICatalogINT[] = await this.http.get(environment.API_URL+'api/catalogo/unidadmedida', {headers: headers}).toPromise() as ICatalogINT[];
            if(res){
                this.unidadMedida = res;
            }
            return this.unidadMedida;
        }
        catch(err){
            console.error(err);
            throw err;
        }
    }

    async getPaises(): Promise<ICatalogUUID[]> {
        try{
            const res: ICatalogUUID[] = await this.http.get(environment.API_URL+'api/catalogo/pais').toPromise() as ICatalogUUID[];
            if(res){
                this.paises = res;
            }
            return this.paises;
        }
        catch(err){
            console.error(err);
            throw err;
        }
    }
}
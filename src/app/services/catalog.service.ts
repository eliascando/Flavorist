import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ICatalogUUID } from "../interfaces/ICatalogUUID";
import { ICatalogINT } from "../interfaces/ICatalogINT";
import { AuthenticationService } from "./authentication.service";
import { environment } from "src/environments/environment";


@Injectable()

export class CatalogService {

    ingredienteCategoria: ICatalogUUID[] = [];
    pais: ICatalogINT[] = [];
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
}
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from "src/environments/environment";
import { IPostFeed } from '../interfaces/IPostFeed';
import { AuthenticationService } from './authentication.service';

@Injectable()
export class PostServiceService {

  public posts: IPostFeed[] = [];

  constructor(private http: HttpClient, private authService: AuthenticationService) { }

  public async getUserFeed(): Promise<IPostFeed[]>{
    console.log('entre a getUserFeed')
    try{
      let headers = {
        'Authorization': 'Bearer ' + this.authService.getUserToken()
      }
      let res: IPostFeed[] = await this.http.get(environment.API_URL + 'api/post/feed/' + this.authService.getUserId(), {headers: headers}).toPromise() as IPostFeed[];
      
      if(res){
        this.posts = res;
      }
      return this.posts;
    }catch(err){  
      console.error(err);
      throw err;
    }
  }

  public async getPostById(id: string): Promise<any> {
    try{
      let headers = {
        'Authorization': 'Bearer ' + this.authService.getUserToken()
      }
      let res: any = await this.http.get(`${environment.API_URL}api/post/${id}/${this.authService.getUserId()}`, {headers: headers}).toPromise();
      if(res){
        return res;
      }
    }
    catch(err){
      console.error(err);
      throw err;
    }
  }

  public async savePost(post: any): Promise<any>{
    try{
      let userId = this.authService.getUserId();
      let headers = {
        'Authorization': 'Bearer ' + this.authService.getUserToken()
      }
      console.log('Post: ',post.imagen);
      let posicionComa = post.imagen.indexOf(',');
      post.imagen = post.imagen.substring(posicionComa + 1);
      post.usuarioID = userId;
      let body: any = post;
      console.log('Body: ',body);
      let res: any = await this.http.post(environment.API_URL + 'api/post/', body, {headers: headers}).toPromise();
      console.log('Respuesta de save post: ',res);
      
      if(res){
        return res;
      }
    }catch(err){
      console.error(err);
      throw err;
    }
  }

  public async getUserPosts(id: string): Promise<IPostFeed[]>{
    try{
      let headers = {
        'Authorization': 'Bearer ' + this.authService.getUserToken()
      }
      let res: IPostFeed[] = await this.http.get(environment.API_URL + 'api/post/usuario/'+id, {headers: headers}).toPromise() as IPostFeed[];
      
      if(res){
        this.posts = res;
      }
      return this.posts;
    }
    catch(err){
      console.error(err);
      throw err;
    }
  }

  public async getUserSavedPost(id: string): Promise<any[]>{
    try{
      let headers = {
        'Authorization': 'Bearer ' + this.authService.getUserToken()
      }
      let res: any = await this.http.get(environment.API_URL + 'api/recetasguardadas/' + id, {headers: headers}).toPromise() as any;
      
      console.log('Respuesta de getUserSavedPost: ',res);

      let recetas: any[] = [];

      if(res){
        for (let post of res){
          let receta = await this.getPostById(post.recetaID);
          recetas.push(receta);
        }

        console.log('Recetas: ',recetas);
      }
      return recetas;
    }
    catch(err){
      console.error(err);
      throw err;
    }
  }

  public async getExplorePosts(): Promise<IPostFeed[]>{
    try{
      let headers = {
        'Authorization': 'Bearer ' + this.authService.getUserToken()
      }
      let res: IPostFeed[] = await this.http.get(environment.API_URL + 'api/post/explorer/' + this.authService.getUserId(), {headers: headers}).toPromise() as IPostFeed[];
      
      if(res){
        this.posts = res;
      }
      return this.posts;
    }
    catch(err){
      console.error(err);
      throw err;
    }
  }
}

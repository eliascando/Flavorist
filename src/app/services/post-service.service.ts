import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from "src/environments/environment";
import { IPostFeed } from '../interfaces/IPostFeed';
import { AuthenticationService } from './authentication.service';

@Injectable()
export class PostServiceService {

  public posts: IPostFeed[] = [];

  constructor(private http: HttpClient, private authService: AuthenticationService) { }

  getPostById(id: number) {
    return 1;
  }

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
}

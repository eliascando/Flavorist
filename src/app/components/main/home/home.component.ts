import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IPostFeed } from 'src/app/interfaces/IPostFeed';
import { PostServiceService } from 'src/app/services/post-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private postService: PostServiceService, private router: Router) { }

  public posts: IPostFeed[] = []
  cargando: boolean = true;
  sinPosts: boolean = false;

  showOptions(post: any) {
    post.showOptions = true;
  }

  async ngOnInit() {
    try{
      let post = await this.postService.getUserFeed();
      console.log('Post de la peticion del servicio ',post);
      this.posts = post;
      this.cargando = false;
      if(this.posts.length == 0){
        this.sinPosts = true;
      }
    }
    catch(err){
      console.error(err);
    }
    console.log('Posts del componente home: ',this.posts);
  }

  viewDetails(post: any) {
    console.log('viewDetails',post);
    this.router.navigateByUrl(`/post-details/${post.id}`);
  }
}
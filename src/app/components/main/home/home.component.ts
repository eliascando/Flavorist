import { Component } from '@angular/core';
import { IPostFeed } from 'src/app/interfaces/IPostFeed';
import { PostServiceService } from 'src/app/services/post-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private postService: PostServiceService) { }

  private entro: boolean = false;

  public posts: IPostFeed[] = []

  showOptions(post: any) {
    post.showOptions = true;
  }

  async ngOnInit() {
    try{
      let post = await this.postService.getUserFeed();
      console.log('Post de la peticion del servicio ',post);
      this.posts = post;
      this.entro = true;
    }
    catch(err){
      console.error(err);
    }
    console.log('Posts del componente home: ',this.posts);
  }

  hideOptions(post: any) {
      post.showOptions = false;
  }
}

import { ChangeDetectorRef, Component } from '@angular/core';
import { Router } from '@angular/router';
import { IPostFeed } from 'src/app/interfaces/IPostFeed';
import { PostServiceService } from 'src/app/services/post-service.service';

@Component({
  selector: 'app-explorer',
  templateUrl: './explorer.component.html',
  styleUrls: ['./explorer.component.css']
})
export class ExplorerComponent {

  posts: IPostFeed[] = [];
  postsOverload: any[] = [];
  cargando: boolean = true;

  constructor(
    private postService: PostServiceService,
    private router: Router
  ) { }

  async ngOnInit(): Promise<void>{
    this.posts = await this.postService.getExplorePosts();
    // this.postsOverload = this.posts;
    // this.postsOverload.forEach((post) => {
    //   post.showOptions = false;
    // });
    // console.log(this.postsOverload);
    this.cargando = false;
  }

  viewDetails(post: any) {
    console.log('viewDetails',post);
    this.router.navigateByUrl(`/post-details/${post.id}`);
  }

  // showOptions(post: any) {
  //   this.postsOverload = this.postsOverload.map(p => 
  //     p.postID === post.postID ? { ...p, showOptions: true } : p
  //   );
  //   console.log('showOptions',post);
  // }

  // hideOptions(post: any) {
  //   this.postsOverload = this.postsOverload.map(p => 
  //     p.postID === post.postID ? { ...p, showOptions: false } : p
  //   );
  //   console.log('hideOptions',post);
  // }

  // darLike(post: any){
  //   console.log('like al post: ',post.postID);
  // }
}

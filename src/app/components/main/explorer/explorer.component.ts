import { Component } from '@angular/core';

@Component({
  selector: 'app-explorer',
  templateUrl: './explorer.component.html',
  styleUrls: ['./explorer.component.css']
})
export class ExplorerComponent {

  constructor() { }


  private entro: boolean = false;

  public posts: any[] = [
    {
      titulo: 'Post 1',
      descripcion: 'Descripcion del post 10',
      imagen: './../../../../assets/img/img10.jpg',
      showOptions: false
    },
    {
      titulo: 'Post 2',
      descripcion: 'Descripcion del post 11',
      imagen: './../../../../assets/img/img12.jpg',
      showOptions: false
    },
    {
      titulo: 'Post 3',
      descripcion: 'Descripcion del post 12',
      imagen: './../../../../assets/img/img13.jpg',
      showOptions: false
    },
    {
      titulo: 'Post 4',
      descripcion: 'Descripcion del post 13',
      imagen: './../../../../assets/img/img14.jpg',
      showOptions: false
    },
    {
      titulo: 'Post 5',
      descripcion: 'Descripcion del post 14',
      imagen: './../../../../assets/img/img15.jpg',
      showOptions: false
    },
    {
      titulo: 'Post 6',
      descripcion: 'Descripcion del post 15',
      imagen: './../../../../assets/img/img16.jpg',
      showOptions: false
    },
    {
      titulo: 'Post 7',
      descripcion: 'Descripcion del post 16',
      imagen: './../../../../assets/img/img17.jpg',
      showOptions: false
    },
    {
      titulo: 'Post 8',
      descripcion: 'Descripcion del post 17',
      imagen: './../../../../assets/img/img18.jpg',
      showOptions: false
    },
    {
      titulo: 'Post 9',
      descripcion: 'Descripcion del post 4',
      imagen: './../../../../assets/img/img19.jpg',
      showOptions: false
    },
    {
      titulo: 'Post 10',
      descripcion: 'Descripcion del post 3',
      imagen: './../../../../assets/img/img10.jpg',
      showOptions: false
    }
  ];

  showOptions(post: any) {
    post.showOptions = true;
  }

  hideOptions(post: any) {
      post.showOptions = false;
  }

}

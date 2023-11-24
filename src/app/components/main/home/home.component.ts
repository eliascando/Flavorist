import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor() { }


  private entro: boolean = false;

  public posts: any[] = [
    {
      titulo: 'Post 1',
      descripcion: 'Descripcion del post 1',
      imagen: './../../../../assets/img/img1.jpg',
      showOptions: false
    },
    {
      titulo: 'Post 2',
      descripcion: 'Descripcion del post 2',
      imagen: './../../../../assets/img/img2.jpg',
      showOptions: false
    },
    {
      titulo: 'Post 3',
      descripcion: 'Descripcion del post 3',
      imagen: './../../../../assets/img/img3.jpg',
      showOptions: false
    },
    {
      titulo: 'Post 4',
      descripcion: 'Descripcion del post 4',
      imagen: './../../../../assets/img/img4.jpg',
      showOptions: false
    },
    {
      titulo: 'Post 5',
      descripcion: 'Descripcion del post 5',
      imagen: './../../../../assets/img/img5.jpg',
      showOptions: false
    },
    {
      titulo: 'Post 6',
      descripcion: 'Descripcion del post 6',
      imagen: './../../../../assets/img/img6.jpg',
      showOptions: false
    },
    {
      titulo: 'Post 7',
      descripcion: 'Descripcion del post 7',
      imagen: './../../../../assets/img/img7.jpg',
      showOptions: false
    },
    {
      titulo: 'Post 8',
      descripcion: 'Descripcion del post 8',
      imagen: './../../../../assets/img/img8.jpg',
      showOptions: false
    },
    {
      titulo: 'Post 9',
      descripcion: 'Descripcion del post 9',
      imagen: './../../../../assets/img/img9.jpg',
      showOptions: false
    },
    {
      titulo: 'Post 10',
      descripcion: 'Descripcion del post 10',
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

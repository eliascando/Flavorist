import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostServiceService {

  private posts: any[] = [
    {
      id: 1,
      titulo: 'Post 1',
      descripcion: 'Descripcion del post 1',
      imagen: './../../../../assets/img/img1.jpg',
      showOptions: false
    },
    {
      id: 2,
      titulo: 'Post 2',
      descripcion: 'Descripcion del post 2',
      imagen: './../../../../assets/img/img2.jpg',
      showOptions: false
    },
    {
      id: 3,
      titulo: 'Post 3',
      descripcion: 'Descripcion del post 3',
      imagen: './../../../../assets/img/img3.jpg',
      showOptions: false
    },
    {
      id: 4,
      titulo: 'Post 4',
      descripcion: 'Descripcion del post 4',
      imagen: './../../../../assets/img/img4.jpg',
      showOptions: false
    },
    {
      id: 5,
      titulo: 'Post 5',
      descripcion: 'Descripcion del post 5',
      imagen: './../../../../assets/img/img5.jpg',
      showOptions: false
    },
    {
      id: 6,
      titulo: 'Post 6',
      descripcion: 'Descripcion del post 6',
      imagen: './../../../../assets/img/img6.jpg',
      showOptions: false
    },
    {
      id: 7,
      titulo: 'Post 7',
      descripcion: 'Descripcion del post 7',
      imagen: './../../../../assets/img/img7.jpg',
      showOptions: false
    },
    {
      id: 8,
      titulo: 'Post 8',
      descripcion: 'Descripcion del post 8',
      imagen: './../../../../assets/img/img8.jpg',
      showOptions: false
    },
    {
      id: 9,
      titulo: 'Post 9',
      descripcion: 'Descripcion del post 9',
      imagen: './../../../../assets/img/img9.jpg',
      showOptions: false
    },
    {
      id: 10,
      titulo: 'Post 10',
      descripcion: 'Descripcion del post 10',
      imagen: './../../../../assets/img/img10.jpg',
      showOptions: false
    }
  ];

  constructor() { }

  getPostById(id: number) {
    return this.posts.find(post => post.id === id);
  }

}

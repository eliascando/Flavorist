import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar-main',
  templateUrl: './nav-bar-main.component.html',
  styleUrls: ['./nav-bar-main.component.css']
})
export class NavBarMainComponent {

  public noti : boolean = false;

  public notificaciones: any[] = [
    {
      titulo: 'Notificacion 1',
      descripcion: 'Descripcion de la notificacion 1',
      imagen: 'https://picsum.photos/200/300'
    },
    {
      titulo: 'Notificacion 2',
      descripcion: 'Descripcion de la notificacion 2',
      imagen: 'https://picsum.photos/200/300'
    },
    {
      titulo: 'Notificacion 3',
      descripcion: 'Descripcion de la notificacion 3',
      imagen: 'https://picsum.photos/200/300'
    },
    {
      titulo: 'Notificacion 4',
      descripcion: 'Descripcion de la notificacion 4',
      imagen: 'https://picsum.photos/200/300'
    },
    {
      titulo: 'Notificacion 5',
      descripcion: 'Descripcion de la notificacion 5',
      imagen: 'https://picsum.photos/200/300'
    }
  ];

  constructor(private route: Router) { }

  public cerrarSesion(): void {
    window.localStorage.removeItem('user');
    this.route.navigateByUrl('/auth');
  }

  public mostrarNotificacion(): void {
    this.noti = !this.noti;
    //console.log("muestra notifaciones",this.noti);
  }
}

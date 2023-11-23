import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar-main',
  templateUrl: './nav-bar-main.component.html',
  styleUrls: ['./nav-bar-main.component.css']
})
export class NavBarMainComponent {

  constructor() { }

  public cerrarSesion(): void {
    window.localStorage.removeItem('user');
    window.location.reload();
  }
}

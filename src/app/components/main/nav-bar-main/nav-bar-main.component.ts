import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar-main',
  templateUrl: './nav-bar-main.component.html',
  styleUrls: ['./nav-bar-main.component.css']
})
export class NavBarMainComponent {

  constructor(private route: Router) { }

  public cerrarSesion(): void {
    window.localStorage.removeItem('user');
    this.route.navigateByUrl('/auth');
  }
}

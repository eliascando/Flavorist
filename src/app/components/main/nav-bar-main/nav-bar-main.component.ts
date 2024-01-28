import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { INotification } from 'src/app/interfaces/INotification';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-nav-bar-main',
  templateUrl: './nav-bar-main.component.html',
  styleUrls: ['./nav-bar-main.component.css']
})
export class NavBarMainComponent {

  public noti : boolean = false;
  public confi : boolean = false;
  public noNotificaciones: boolean = false;
  public loadingNotificaciones: boolean = false;
  public contadorNotificaciones: number = 0;

  public notificaciones: INotification[] = [];

  constructor(
    private route: Router,
    private userService: UsuarioService,
    public authService: AuthenticationService
  ) { }

  public async getNotificaciones(): Promise<void> {
    this.loadingNotificaciones = true;
    this.notificaciones = await this.userService.getNotifications();
    console.log(this.notificaciones);
    if(this.notificaciones.length == 0) {
      this.noNotificaciones = true;
    }
    else{
      this.contadorNotificaciones = this.notificaciones.length;
      this.noNotificaciones = false;
    }
    this.loadingNotificaciones = false;
  }

  ngOnInit(): void {
    this.getNotificaciones();
  }

  public cerrarSesion(): void {
    window.localStorage.removeItem('user');
    this.route.navigateByUrl('/auth');
  }

  public mostrarNotificacion(): void {
    this.confi = false;
    this.noti = !this.noti;
    this.contadorNotificaciones = 0;
  }

  public mostrarConfiguracion(): void {
    this.noti = false;
    this.confi = !this.confi;
  }

}

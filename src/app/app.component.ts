import { Component } from '@angular/core';
import { AuthenticationService } from './services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Flavorist';
  
  constructor(private authService: AuthenticationService) { }

  public isLogged(): boolean {
    console.log(this.authService.isLogged());
    return this.authService.isLogged();
  }
}

import { Component, Input } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent {
  
    constructor(private authService: AuthenticationService) { }
    
    @Input() singup: boolean;

    public isLogged(): boolean {
      console.log(this.authService.isLogged());
      return this.authService.isLogged();
    }
}

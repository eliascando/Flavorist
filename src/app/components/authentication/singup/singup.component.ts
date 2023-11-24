import { Component } from '@angular/core';
import { AuthenticationComponent } from '../authentication.component';

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.css']
})
export class SingupComponent {

  constructor(private authComponent: AuthenticationComponent) { }

  public setVolver(): void {
    //console.log('Volver');
    this.authComponent.singup = false;
  }

}

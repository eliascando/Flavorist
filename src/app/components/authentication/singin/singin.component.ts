import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ILoginRequest } from 'src/app/interfaces/ILoginRequest';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { AuthenticationComponent } from '../authentication.component';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-singin',
  templateUrl: './singin.component.html',
  styleUrls: ['./singin.component.css']
})
export class SinginComponent {
  
  public form: any;
  // public servicio: AuthService;
  public sesion: any = {
    correo : '',
    password : ''
  }

  ngOnInit(): void {
    this.form = this.createMyForm();
  }

  public setRegister(): void {
    this.authComponent.singup = true;
  }

  public async iniciarSesion(){
    if(this.form.invalid) {
      alert('Formulario invalido');
      return;
    }
    const correo = this.form.get('email').value;
    const password = this.form.get('password').value;
    
    this.sesion.correo = correo;
    this.sesion.password = password;
    console.log(this.sesion);
    let response = this.authService.login(this.sesion as ILoginRequest);
    console.log(response);
    if(response) {
      console.log('Usuario logueado', response);
      this.router.navigateByUrl('/home');
    } else {
      alert('Usuario o contraseña incorrectos');
    }

  }

  private createMyForm(): FormGroup {
    return this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    })
  }

  constructor(private fb: FormBuilder, private router: Router, private authService: AuthenticationService, private authComponent: AuthenticationComponent) {}

}

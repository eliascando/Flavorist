import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginRequest } from 'src/app/interfaces/loginRequest';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { AuthenticationComponent } from '../authentication.component';

@Component({
  selector: 'app-singin',
  templateUrl: './singin.component.html',
  styleUrls: ['./singin.component.css']
})
export class SinginComponent {
  
  public form: any;
  // public servicio: AuthService;
  public sesion: any = {
    email : 'pepito@correo-com',
    password : '123456'
  }

  ngOnInit(): void {
    this.form = this.createMyForm();
  }

  public setRegister(): void {
    this.authComponent.singup = true;
  }

  public iniciarSesion(): void {
    if(this.form.invalid) {
      alert('Formulario invalido');
      return;
    }
    const email = this.form.get('email').value;
    const password = this.form.get('password').value;
    
    this.sesion.email = email;
    this.sesion.password = password;
    console.log(this.sesion);

    if(this.authService.login(this.sesion as LoginRequest)) {
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

import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ILoginRequest } from 'src/app/interfaces/ILoginRequest';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { AuthenticationComponent } from '../authentication.component';

@Component({
  selector: 'app-singin',
  templateUrl: './singin.component.html',
  styleUrls: ['./singin.component.css']
})
export class SinginComponent {

  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder, 
    private router: Router, 
    private authService: AuthenticationService, 
    private authComponent: AuthenticationComponent
  ) {}
    
  ngOnInit(): void {
    this.loginForm = this.fb.group({
      correo: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    })
  }

  public setRegister(): void {
    this.authComponent.singup = true;
  }

  public setForgot(): void {
    this.authComponent.forgotPass = true;
  }

  public async iniciarSesion(){
    if(this.loginForm.invalid) {
      alert('Formulario invalido');
      return;
    }
  
    console.log(this.loginForm.value);
    let response = this.authService.login(this.loginForm.value as ILoginRequest);
    console.log(response);
    if(response) {
      console.log('Usuario logueado', response);
      this.router.navigateByUrl('/home');
    } else {
      alert('Usuario o contraseña incorrectos');
    }

  }
}

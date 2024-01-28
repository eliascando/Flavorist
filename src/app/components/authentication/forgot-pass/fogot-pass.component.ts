import { Component } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { AuthenticationComponent } from '../authentication.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forgot-pass',
  templateUrl: './forgot-pass.component.html',
  styleUrls: ['./forgot-pass.component.css']
})
export class ForgotPassComponent {
  constructor(
    private authComponent: AuthenticationComponent,
    private formBuilder: FormBuilder
  ) { }

  forgotPassForm: FormGroup;

  ngOnInit(): void {
    this.forgotPassForm = this.formBuilder.group({
      correo: ['',Validators.required, Validators.email]
    })
  }

  recuperarContrasena() {
    alert('Se ha enviado un correo a su casilla de email');
  }

  volver() {
    this.authComponent.forgotPass = false;
  }
}

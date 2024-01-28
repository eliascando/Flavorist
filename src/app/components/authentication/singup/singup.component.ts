import { Component, ViewChild } from '@angular/core';
import { AuthenticationComponent } from '../authentication.component';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UsuarioService } from 'src/app/services/usuario.service';
import { IUsuario } from 'src/app/interfaces/IUsuario';
import { CatalogService } from 'src/app/services/catalog.service';
import { ICatalogUUID } from 'src/app/interfaces/ICatalogUUID';

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.css']
})
export class SingupComponent {

  constructor(
    private authComponent: AuthenticationComponent, 
    private formBuilder: FormBuilder, 
    private userService: UsuarioService,
    private catalogService: CatalogService
  ) { }

  registerForm: FormGroup;
  @ViewChild('picker') picker: Date;

  generos = [
    { value: 'M', viewValue: 'Masculino' },
    { value: 'F', viewValue: 'Femenino' }
  ];

  paises : ICatalogUUID[] = [];

  public setVolver(): void {
    this.authComponent.singup = false;
  }

  async ngOnInit(): Promise<void>{
    this.registerForm = this.formBuilder.group({
      nombres: new FormControl('', [Validators.required, Validators.minLength(3)]),
      apellidos: new FormControl('', [Validators.required, Validators.minLength(3)]),
      correo: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)]),
      fechaNacimiento: new FormControl('', [Validators.required]),
      genero: new FormControl('', [Validators.required]),
      paisID: new FormControl('', [Validators.required]),
      usuarioTipoID: 2,
      estado: true,
      foto: new FormControl(null)
    });

    this.paises = await this.catalogService.getPaises();
  }

  public async register() {
    console.log(this.registerForm.value);
    console.log(this.registerForm.valid);
    if (this.registerForm.valid) {
      try {
        const res = await this.userService.registerUsuario(this.registerForm.value as IUsuario);
        console.log(res);
      } catch (err) {
        console.error(err);
      }
    }
  }

  onDateChange(event: any) {
    console.log(event);
  }


}

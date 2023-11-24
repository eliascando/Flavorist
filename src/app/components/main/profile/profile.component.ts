import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  fotosCreadas: string[] = ['img1.jpg','img2.jpg','img3.jpg','img4.jpg','img5.jpg','img6.jpg','img7.jpg','img8.jpg','img9.jpg','img10.jpg','img11.jpg','img12.jpg','img13.jpg','img14.jpg','img15.jpg' ];

  pestanaActual: string = 'creado'; // Inicializa la pestaña actual como "creado"
  mostrarPestana(pestana: string): void {
    this.pestanaActual = pestana;
  }

   // Propiedades del perfil
   nombre: string = 'Nombre';
   apellido: string = 'Apellido';
   usuario: string = 'nombre_usuario';
   mostrarFormulario: boolean = false;
   
 
   // Propiedades para el formulario de edición
   nuevoNombre: string = '';
   nuevoApellido: string = '';
   nuevoUsuario: string = '';
   nuevaFoto: File | null = null;

   
   abrirFormularioEdicion(): void {
     this.mostrarFormulario = true;
     this.nuevoNombre = this.nombre;
     this.nuevoApellido = this.apellido;
     this.nuevoUsuario = this.usuario;
   }
 
   cerrarFormularioEdicion(): void {
     this.mostrarFormulario = false;
   }
 
   guardarCambios(): void {
     this.nombre = this.nuevoNombre;
     this.apellido = this.nuevoApellido;
     this.usuario = this.nuevoUsuario;
     this.cerrarFormularioEdicion();
   }

   cargarNuevaFoto(event: any): void {
    const files: FileList | null = event.target.files;
    if (files && files.length > 0) {
      this.nuevaFoto = files[0];
    }
  }

  compartir(): void {
    const currentURL: string = window.location.href;
    // Copiar la URL al portapapeles
    navigator.clipboard.writeText(currentURL)
    .then(() => {
      console.log('URL copiada al portapapeles: ' + currentURL);
    })
    .catch((error) => {
      console.error('Error al copiar la URL: ', error);
    });
  }
}

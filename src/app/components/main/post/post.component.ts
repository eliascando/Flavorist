import { Component } from '@angular/core';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.css']
})
export class DetallesComponent {
  imagenes: string[] = [
    "../../../assets/img/img15.jpg",
    "../../../assets/img/img18.jpg",
    "../../../assets/img/img14.jpg",
    "../../../assets/img/img12.jpg",
  ];

  imagenSeleccionada: any;
  nuevoComentario: string = '';

  cargarImagen(event: any): void {
    const files: FileList | null = event.target.files;
    if (files && files.length > 0) {
      const file: File = files[0];
      const reader = new FileReader();
      reader.onload = () => {
        this.imagenSeleccionada = { url: reader.result, descripcion: 'Descripción por defecto', comentarios: [] };
      };
      reader.readAsDataURL(file);
    }
  }

  mostrarDetalles(imagen: any): void {
    console.log('Mostrando detalles para la imagen:', imagen);
    console.log('URL de la imagen:', imagen.url);
    this.imagenSeleccionada = { ...imagen, descripcion: imagen.descripcion || 'Descripción por defecto' };
  }

  agregarComentario(): void {
    if (this.nuevoComentario.trim() !== '') {
      if (!this.imagenSeleccionada.comentarios) {
        this.imagenSeleccionada.comentarios = [];
      }
      this.imagenSeleccionada.comentarios.push(this.nuevoComentario);
      this.nuevoComentario = '';
    }
  }

  cerrarDetalles(): void {
    this.imagenSeleccionada = null;
  }
}

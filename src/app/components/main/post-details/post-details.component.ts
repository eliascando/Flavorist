import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router  } from '@angular/router';
import { PostServiceService } from 'src/app/services/post-service.service';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {
  postId: number;
  post: any;
  imagenSeleccionada: any;
  nuevoComentario: string = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private postService: PostServiceService
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const idParam = params.get('id');
      if (idParam) {
        this.postId = +idParam;
        this.loadPostDetails(this.postId);
      } else {
        console.error('ID del post no encontrado');
        // Manejar la situación, por ejemplo, redirigir a otra página
      }
    });
  }

  private loadPostDetails(id: number) {
    this.post = this.postService.getPostById(id);
    if (this.post) {
      // Usa la imagen del post cargado
      this.imagenSeleccionada = { url: this.post.imagen, descripcion: this.post.descripcion || 'Descripción por defecto', comentarios: [] };
    } else {
      console.error('Post no encontrado');
      // Opción para redirigir o mostrar un mensaje
    }
  }

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

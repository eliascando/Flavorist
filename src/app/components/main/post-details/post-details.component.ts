import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { ActionsService } from 'src/app/services/actions.service';
import { PostServiceService } from 'src/app/services/post-service.service';
import { LikesOwnersComponent } from './likes-owners/likes-owners.component';
import { UsuarioService } from 'src/app/services/usuario.service';
import { CatalogService } from 'src/app/services/catalog.service';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {
  postId: string;
  post: any;
  nuevoComentario: string = '';
  cargando: boolean = false;
  likes: number = 0;
  tieneLike: boolean = false;
  tieneGuardado: boolean = false;
  cargandoLikes: boolean = false;
  cargandoGuardado: boolean = false;
  cargandoComentarios: boolean = false;
  comentarios: any[] = [];
  likesOwners: any[] = [];
  nombreUsuario: string = '';
  fotoUsuario: string = '';
  idUsuarioPost: string = '';
  recetaCategoria: string = '';
  recetaDificultad: string = '';

  constructor(
    private route: ActivatedRoute,
    private postService: PostServiceService,
    private actionService: ActionsService,
    public dialog: MatDialog,
    private userService: UsuarioService,
    private router: Router,
    private catalogService: CatalogService
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const idParam = params.get('id');
      if (idParam) {
        this.loadPostDetails(idParam);
      } else {
        console.error('ID del post no encontrado');
      }
    });
  }

  public async verLikes(): Promise<void> {
    await this.obtenerLikesOwners();
    const dialogRef = this.dialog.open(LikesOwnersComponent, {
      width: '500px',
      data: { likes: this.likesOwners }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  private async loadPostDetails(id: string) {
    this.cargando = true;
    this.post = await this.postService.getPostById(id);
    this.likes = await this.contarLikes();
    this.tieneLike = this.post.tieneLike;
    this.tieneGuardado = this.post.guardado;
    console.log('Post encontrado:', this.post);
    this.catalogService.getRecetaCategoriaById(this.post.categoriaID).then((res) => {
      this.recetaCategoria = res.nombre;
    });
    this.catalogService.getRecetaDificultadById(this.post.dificultadID).then((res) => {
      this.recetaDificultad = res.nombre;
    });
    this.userService.getUsuarioById(this.post.usuarioID).then((res) => {
      this.nombreUsuario = res.nombres + ' ' + res.apellidos;
      this.fotoUsuario = res.imagen;
      this.idUsuarioPost = res.id;
    });
    if (this.post) {
      this.cargando = false;
    } else {
      console.error('Post no encontrado');
      this.cargando = false;
    }
    this.obtenerComentarios();
  }

  async contarLikes(): Promise<number> {
    let res: any = await this.actionService.contarLikes(this.post.id);
    console.log('Respuesta de contar likes: ', res);
    return res.data as number;
  }

  async irAlPerfil(idUsuarioPost: string): Promise<void> {
    console.log('Id del usuario del post: ', idUsuarioPost);
    this.router.navigateByUrl(`/profile/${idUsuarioPost}`);
  }


  async agregarComentario(): Promise<void> {
    if (this.nuevoComentario.trim() !== '') {
      let res = await this.actionService.comentarReceta(this.post.id, this.nuevoComentario);
      console.log('Respuesta de comentar: ', res);
      this.nuevoComentario = '';
      console.log('Comentarios de la imagen:', this.comentarios);
      this.obtenerComentarios();
    }
  }

  async darLike(): Promise<void> {
    this.cargandoLikes = true;
    if(this.tieneLike){
      let unlike = await this.actionService.eliminarLike(this.post.id);
      console.log('Respuesta de eliminar like: ', unlike);
    }else{
      console.log('Dando like a la imagen:', this.post.id);
      let res = await this.actionService.darLikeReceta(this.post.id);
      console.log('Respuesta de dar like: ', res);
    }
    this.loadPostDetails(this.post.id);
    this.cargandoLikes = false;
  }

  async guardarPost(): Promise<void> {
    this.cargandoGuardado = true;
    if(this.tieneGuardado){
      let res = await this.actionService.eliminarGuardadoReceta(this.post.id);
      console.log('Respuesta de eliminar guardado: ', res);
    }else{
      let res = await this.actionService.guardarReceta(this.post.id);
      console.log('Respuesta de guardar post: ', res);
    }
    this.loadPostDetails(this.post.id);
    this.cargandoGuardado = false;
  }

  async obtenerComentarios(): Promise<void> {
    this.cargandoComentarios = true;
    this.comentarios = await this.actionService.getComentariosRecetas(this.post.id);
    console.log('Comentarios: ', this.comentarios);
    this.cargandoComentarios = false;
  }

  async obtenerLikesOwners(): Promise<void> {
    this.likesOwners = await this.actionService.getLikesOwners(this.post.id);
    console.log('Likes owners: ', this.likesOwners);
  }

}

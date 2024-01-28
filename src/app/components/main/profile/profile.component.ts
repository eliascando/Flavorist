import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { IPostFeed } from 'src/app/interfaces/IPostFeed';
import { ActionsService } from 'src/app/services/actions.service';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { PostServiceService } from 'src/app/services/post-service.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  userPosts: IPostFeed[] = [];
  savedPosts: any[] = [];
  pestanaActual: string = 'creado'; // Inicializa la pestaña actual como "creado"
  loading: boolean = true;
  user: any = {};
  userID: string = '';
  permitirEditar: boolean = false;

  constructor(
    private postService: PostServiceService,
    private userService: UsuarioService,
    private authService: AuthenticationService,
    private router: Router,
    private route: ActivatedRoute,
    private actionsService: ActionsService
  ) {

  }

  mostrarPestana(pestana: string): void {
    this.pestanaActual = pestana;
  }

   // Propiedades del perfil
   nombre: string = 'Nombre';
   apellido: string = 'Apellido';
   usuario: string = 'nombre_usuario';
   cantidadSeguidos: number = 0;
   cantidadSeguidores: number = 0;
   permitirSeguir: boolean = true;
   mostrarFormulario: boolean = false;
   
   nombresCompletos: string = '';
 
   // Propiedades para el formulario de edición
   nuevoNombre: string = '';
   nuevoApellido: string = '';
   nuevoUsuario: string = '';
   nuevaFoto: File | null = null;

   async ngOnInit(): Promise<void> {
    this.route.paramMap.subscribe(async params => {
      const idParam = params.get('id');
      if (idParam) {
        try {
          const res = await this.userService.getUsuarioById(idParam);
          console.log('loadUserDetails', res);
          this.user = res;
          this.userID = this.user.id;
          if(this.authService.getUserId() == this.userID){
            this.permitirEditar = true;
          }
          this.nombresCompletos = `${this.user.nombres} ${this.user.apellidos}`;
          // Ahora que el userID está establecido, carga los posts
          await this.cargarPostsDelUsuario();
          let seguidores = await this.userService.getFollowers(this.userID);
          console.log('seguidores', seguidores);
          this.cantidadSeguidores = seguidores.length;
          seguidores.forEach((seguidor: any) => {
            if(seguidor.id == this.authService.getUserId()){
              this.permitirSeguir = false;
            }
          })

          let seguidos = await this.userService.getFollowing(this.userID);
          console.log('seguidos', seguidos);
          this.cantidadSeguidos = seguidos.length;
        } catch (error) {
          console.error('Error al cargar los detalles del usuario:', error);
        }
      } else {
        console.error('ID del usuario no encontrado');
      }
    });
  }
  
  private async cargarPostsDelUsuario() {
    try {
      this.loading = true;
  
      const userPosts = await this.postService.getUserPosts(this.userID);
      console.log('getUserPosts', userPosts);
      this.userPosts = userPosts;
  
      const savedPosts = await this.postService.getUserSavedPost(this.userID);
      console.log('getUserSavedPost', savedPosts);
      this.savedPosts = savedPosts;
  
    } catch (error) {
      console.error('Error al cargar los posts del usuario:', error);
    } finally {
      this.loading = false;
    }
  }
   
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
  async seguir(): Promise<void> {
    console.log('Seguir');
    let res = await this.actionsService.followUsuario(this.userID);
    console.log('Respuesta de seguir: ', res);
    this.ngOnInit();
  }
  viewDetails(post: any) {
    console.log('viewDetails',post);
    this.router.navigateByUrl(`/post-details/${post.id}`);
  }
}

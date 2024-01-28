export interface IUsuario {
    nombres: string;
    apellidos: string;
    correo: string;
    password: string;
    fechaNacimiento: Date;
    genero: string;
    paisID: number;
    usuarioTipoID: number;
    estado: boolean;
    foto: string;
}
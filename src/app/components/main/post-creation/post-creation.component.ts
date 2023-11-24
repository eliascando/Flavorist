import { Component } from '@angular/core';

@Component({
  selector: 'app-post-creation',
  templateUrl: './post-creation.component.html',
  styleUrls: ['./post-creation.component.css']
})
export class PostCreationComponent {
 // Método para manejar la selección de archivos
onFileSelect(event: Event): void {
  const element = event.currentTarget as HTMLInputElement;
  let fileList: FileList | null = element.files;

  if (fileList) {
    const file: File = fileList[0];
    console.log("Archivo seleccionado:", file);
    // Procesa el archivo aquí
  } else {
    // Maneja la situación de que no se haya seleccionado ningún archivo
    console.log("No se ha seleccionado ningún archivo.");
  }
}


  // Método para manejar el envío del formulario
  submitForm(): void {
    // Aquí implementarías la lógica para procesar los datos del formulario
    console.log("Formulario enviado");
    // Por ejemplo, enviar los datos a un servidor o validar los campos
  }
}

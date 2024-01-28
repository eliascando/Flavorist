import { Component, Input, ViewChild, ElementRef } from '@angular/core';
import { ICatalogUUID } from 'src/app/interfaces/ICatalogUUID';
import { CatalogService } from 'src/app/services/catalog.service';
import {FormBuilder, FormGroup, FormArray, FormControl,Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ICatalogINT } from 'src/app/interfaces/ICatalogINT';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { IRecetaIngrediente } from 'src/app/interfaces/IRecetaIngrediente';
import { IRecetaPaso } from 'src/app/interfaces/IRecetaPasos';
import { PostServiceService } from 'src/app/services/post-service.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-post-creation',
  templateUrl: './post-creation.component.html',
  styleUrls: ['./post-creation.component.css']
})
export class PostCreationComponent {

  isLinear = false;
  recetaCategoria: ICatalogUUID[] = [];
  recetaDificultad: ICatalogINT[] = [];
  unidadMedia: ICatalogINT[] = [];
  ingredienteCategoria: ICatalogUUID[] = [];

  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;

  pasos : IRecetaPaso[] = [];
  ingredientes: IRecetaIngrediente[] = [];
  receta: any = {};

  publicado: boolean = false;
  disableButton: boolean = false;

  @ViewChild('newItemInput') newItemInput: ElementRef;

  constructor(
    private postService: PostServiceService,
    private catalog: CatalogService, 
    private formBuilder: FormBuilder,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit() {
    this.catalog.getRecetaCategoria().then((res) => {
      console.log('getRecetaCategoria',res);
      this.recetaCategoria = res;
    }).catch((err) => {
      console.error(err);
    });

    this.catalog.getRecetaDificultad().then((res) => {
      console.log('getRecetaDificultad',res);
      this.recetaDificultad = res;
    }).catch((err) => {
      console.error(err);
    });

    this.catalog.getUnidadMedida().then((res) => {
      console.log('getUnidadMedida',res);
      this.unidadMedia = res;
    }).catch((err) => {
      console.error(err);
    });

    this.catalog.getIngredientesCategoria().then((res) => {
      console.log('getIngredientesCategoria',res);
      this.ingredienteCategoria = res;
    }).catch((err) => {
      console.error(err);
    });

    this.firstFormGroup = this.formBuilder.group({
      // controles para la carga de foto
      imagen: new FormControl(null), // Inicialmente sin archivo
      nombre: new FormControl('', Validators.required),
      descripcion: new FormControl('', Validators.required),
      tiempoPreparacion: new FormControl('', Validators.required),
      porciones: new FormControl('', Validators.required),
      costo: new FormControl('', Validators.required),
      dificultad: new FormControl('', Validators.required),
      categoriaReceta: new FormControl('', Validators.required)
    });

    this.secondFormGroup = this.formBuilder.group({
      nombreIngrediente: new FormControl('', Validators.required),
      cantidadIngrediente: new FormControl('', Validators.required),
      unidadMedidaIngrediente: new FormControl('', Validators.required),
      categoriaIngrediente: new FormControl('', Validators.required)
    });

    this.thirdFormGroup = this.formBuilder.group({});
  }


  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.pasos, event.previousIndex, event.currentIndex);
    console.log(this.pasos);
    let input = document.getElementById('newItem') as HTMLInputElement;
    input.value = '';
  }

  removeItem(index: number) {
    this.pasos.splice(index, 1);
  }

  addItem(newItem: string) {
    this.pasos.push({descripcion: newItem});
    this.newItemInput.nativeElement.value = '';
    console.log(this.pasos);
  }

  addIngrediente() {
    let ingrediente: IRecetaIngrediente = {
      nombre: this.secondFormGroup.get('nombreIngrediente')?.value,
      cantidad: this.secondFormGroup.get('cantidadIngrediente')?.value,
      unidadMedidaID: this.secondFormGroup.get('unidadMedidaIngrediente')?.value,
      categoriaID: this.secondFormGroup.get('categoriaIngrediente')?.value
    }
    console.log(ingrediente);
    this.ingredientes.push(ingrediente);
    this.secondFormGroup.reset();
    console.log(this.ingredientes);
  }

  onFileSelect(event: any): void {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
  
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.firstFormGroup.get('imagen')?.setValue(e.target.result);
      };
  
      reader.readAsDataURL(file);
    }
  }
  

  guardarReceta() {
    this.disableButton = true;
    this.receta = {
      imagen: this.firstFormGroup.get('imagen')?.value,
      usuarioID: '',
      nombre: this.firstFormGroup.get('nombre')?.value,
      descripcion: this.firstFormGroup.get('descripcion')?.value,
      tiempoPreparacion: this.firstFormGroup.get('tiempoPreparacion')?.value,
      porciones: this.firstFormGroup.get('porciones')?.value,
      costo: this.firstFormGroup.get('costo')?.value,
      dificultadID: this.firstFormGroup.get('dificultad')?.value,
      categoriaID: this.firstFormGroup.get('categoriaReceta')?.value,
      recetaPasos: this.pasos,
      recetaIngredientes: this.ingredientes
    }
    console.log(this.receta);
    this.postService.savePost(this.receta).then((res) => {
      console.log(res);
      if(res.id){
        this.publicado = true;
        this.firstFormGroup.reset();
        this.secondFormGroup.reset();
        this.thirdFormGroup.reset();
        this.pasos = [];
        this.ingredientes = [];
        this.disableButton = false;
        // Aviso de receta creada
        this.snackBar.open('Receta creada con éxito', 'Cerrar', {
          duration: 3000 // Aviso se cierra después de 3 segundos
        });
      }
    }).catch((err) => {
      console.error(err);
      this.snackBar.open('Error al guardar la receta', 'Cerrar', {
        duration: 3000
      });
    });
  }


  // Método para manejar el envío del formulario
  submitForm():void {
    // const formData = new FormData();
    // formData.append('photo', this.firstFormGroup.get('photo')?.value);
    // Añade otros campos del formulario si es necesario
    // ...
    // Aquí iría el servicio que envía los datos al servidor
  }
}

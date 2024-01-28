import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule} from '@angular/material/input';
import { MatDatepickerModule} from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';
import { MatNativeDateModule } from '@angular/material/core';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatStepperModule} from '@angular/material/stepper';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatDialogModule} from '@angular/material/dialog';
import {MatBadgeModule} from '@angular/material/badge';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { Router } from '@angular/router';
import { AuthenticationComponent } from './components/authentication/authentication.component';
import { SingupComponent } from './components/authentication/singup/singup.component';
import { SinginComponent } from './components/authentication/singin/singin.component';
import { MainComponent } from './components/main/main.component';
import { HomeComponent } from './components/main/home/home.component';
import { ExplorerComponent } from './components/main/explorer/explorer.component';
import { PostCreationComponent } from './components/main/post-creation/post-creation.component';
import { ProfileComponent } from './components/main/profile/profile.component';
import { NavBarMainComponent } from './components/main/nav-bar-main/nav-bar-main.component';
import { CommonModule } from '@angular/common';
import { PostDetailsComponent } from './components/main/post-details/post-details.component';
import { AuthenticationService } from './services/authentication.service';
import { PostServiceService } from './services/post-service.service';
import { CatalogService } from './services/catalog.service';
import { UsuarioService } from './services/usuario.service';
import { ActionsService } from './services/actions.service';
import { LikesOwnersComponent } from './components/main/post-details/likes-owners/likes-owners.component';
import { ForgotPassComponent } from './components/authentication/forgot-pass/fogot-pass.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthenticationComponent,
    SingupComponent,
    SinginComponent,
    MainComponent,
    HomeComponent,
    ExplorerComponent,
    PostCreationComponent,
    ProfileComponent,
    NavBarMainComponent,
    AppComponent,
    PostDetailsComponent,
    LikesOwnersComponent,
    ForgotPassComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterLink,
    FormsModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatButtonModule,
    MatListModule,
    MatIconModule,
    MatTableModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatTooltipModule,
    MatSortModule,
    MatSnackBarModule,
    MatStepperModule,
    MatProgressSpinnerModule,
    MatBadgeModule,
    MatDialogModule,
    DragDropModule,
    CommonModule
  ],
  providers: [
    AuthenticationService, 
    PostServiceService, 
    CatalogService, 
    UsuarioService,
    ActionsService
  ],
  bootstrap: [AppComponent, Router]
})
export class AppModule { }

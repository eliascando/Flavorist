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
import {MatStepperModule} from '@angular/material/stepper';
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
    PostDetailsComponent
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
    MatSortModule,
    MatSnackBarModule,
    MatStepperModule,
    DragDropModule,
    CommonModule
  ],
  providers: [AuthenticationService, PostServiceService, CatalogService],
  bootstrap: [AppComponent, Router]
})
export class AppModule { }

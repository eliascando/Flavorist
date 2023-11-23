import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SinginComponent } from './components/authentication/singin/singin.component';
import { SingupComponent } from './components/authentication/singup/singup.component';
import { HomeComponent } from './components/main/home/home.component';
import { ExplorerComponent } from './components/main/explorer/explorer.component';
import { MainComponent } from './components/main/main.component';
import { ProfileComponent } from './components/main/profile/profile.component';
import { NotificationComponent } from './components/main/notification/notification.component';
import { PostCreationComponent } from './components/main/post-creation/post-creation.component';
import { ConfigurationComponent } from './components/main/configuration/configuration.component';

const routes: Routes = [
  {
    path: '', redirectTo: '/auth', pathMatch: 'full'
  },
  { 
    path: 'auth', 
    children: [
      { path: 'singin', component: SinginComponent },
      { path: 'singup', component: SingupComponent }
    ]
  },
  { 
    path: 'main', component: MainComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'explorer', component: ExplorerComponent },
      { path: 'profile', component: ProfileComponent },
      { path: 'notification', component: NotificationComponent },
      { path: 'post-creation', component: PostCreationComponent },
      { path: 'configuration', component: ConfigurationComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

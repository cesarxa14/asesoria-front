import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard} from './guards/auth.guard'
import { AppComponent } from './app.component';
import { MainComponent} from './componentes/main/main.component';
import { LoginComponent }from './componentes/auth/login/login.component';
import { RegisterComponent} from './componentes/auth/register/register.component';
import { PanelgeneralComponent } from './componentes/panelgeneral/panelgeneral.component' 


const routes: Routes = [
  {path: ''        , component: MainComponent },
  {path: 'login'   , component: LoginComponent },
  {path: 'register', component: RegisterComponent },
  {path: 'panel'   , canActivate: [AuthGuard], component: PanelgeneralComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

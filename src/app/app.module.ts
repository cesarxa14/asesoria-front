import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MATERIAL_SANITY_CHECKS } from '@angular/material';
import { MaterialModules} from './material.modules'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { AuthGuard } from './guards/auth.guard';
import { TokenInterceptorService} from './servicios/token-interceptor.service'

//COMPONENTES
import { LoginComponent } from './componentes/auth/login/login.component';
import { MainComponent } from './componentes/main/main.component';
import { HeaderComponent } from './componentes/header/header.component';
import { RegisterComponent } from './componentes/auth/register/register.component';
import { PanelgeneralComponent } from './componentes/panelgeneral/panelgeneral.component';
import { PanelgeneralContentComponent } from './componentes/panelgeneral-content/panelgeneral-content.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainComponent,
    HeaderComponent,
    RegisterComponent,
    PanelgeneralComponent,
    PanelgeneralContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModules,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true

    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

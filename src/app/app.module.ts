import { LoginComponent } from './login/login.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { environment } from '../environments/environment';
import { FormsModule } from '@angular/forms';
import { AlertComponent } from './_directives/alert.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { UserService } from './_services/user.service';
import { AuthenticationService } from './_services/authentication.service';
import { AlertService } from './_services/alert.service';
import { AuthGuard } from './_guards/auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    AlertComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    routing,
    FormsModule
  ],
  providers: [
    AuthGuard,
    AlertService,
    AuthenticationService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

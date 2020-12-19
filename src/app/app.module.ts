import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { LoginFormComponent } from './authentication/login-form/login-form.component';
import { SignupFormComponent } from './authentication/signup-form/signup-form.component';
import { FormActionTextsComponent } from './authentication/form-action-texts/form-action-texts.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import {AngularFireModule} from '@angular/fire';
import {environment} from '../environments/environment';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {AngularFireMessagingModule} from '@angular/fire/messaging';

@NgModule({
  declarations: [
    AppComponent,
    AuthenticationComponent,
    LoginFormComponent,
    SignupFormComponent,
    FormActionTextsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireMessagingModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

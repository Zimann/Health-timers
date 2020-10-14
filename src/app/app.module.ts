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
import { MaterialModule } from './material/material.module';
import { HomeComponent } from './home/home.component';
import { TimersContainerComponent } from './home/timers-container/timers-container.component';
import { ProfileSettingsComponent } from './home/control-panel/profile-settings/profile-settings.component';
import { ControlPanelComponent } from './home/control-panel/control-panel.component';
import { TimerColumnComponent } from './home/timers-container/timer-column/timer-column.component';
import { CreateTimerComponent } from './home/control-panel/create-timer/create-timer.component';
import { CountdownModule } from 'ngx-countdown';
import { OptionsSlideComponent } from './home/control-panel/options-slide/options-slide';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {AudioService} from "./services/audio.service";

@NgModule({
  declarations: [
    AppComponent,
    AuthenticationComponent,
    LoginFormComponent,
    SignupFormComponent,
    FormActionTextsComponent,
    HomeComponent,
    TimersContainerComponent,
    ProfileSettingsComponent,
    ControlPanelComponent,
    TimerColumnComponent,
    CreateTimerComponent,
    OptionsSlideComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MaterialModule,
    CountdownModule,
    BrowserAnimationsModule
  ],
  providers: [AudioService],
  bootstrap: [AppComponent]
})
export class AppModule {
}

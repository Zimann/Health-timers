import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomeRoutingModule} from "./home-routing.module";
import {HomeComponent} from "./home.component";
import {TimersContainerComponent} from "./timers-container/timers-container.component";
import {ProfileSettingsComponent} from "./control-panel/profile-settings/profile-settings.component";
import {ControlPanelComponent} from "./control-panel/control-panel.component";
import {TimerColumnComponent} from "./timers-container/timer-column/timer-column.component";
import {CreateTimerComponent} from "./control-panel/create-timers/create-timer/create-timer.component";
import {OptionsSlideComponent} from "./control-panel/options-slide/options-slide";
import {CreateCustomTimerComponent} from "./control-panel/create-timers/create-custom-timer/create-custom-timer.component";
import {MaterialModule} from "../material/material.module";
import {CountdownModule} from "ngx-countdown";
import {AudioService} from "../services/audio.service";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    HomeComponent,
    TimersContainerComponent,
    ProfileSettingsComponent,
    ControlPanelComponent,
    TimerColumnComponent,
    CreateTimerComponent,
    OptionsSlideComponent,
    CreateCustomTimerComponent,

  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MaterialModule,
    CountdownModule,
    ReactiveFormsModule,
  ],
  providers: [AudioService]
})
export class HomeModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { ControlComponent } from './control/control.component';
import { RulesComponent } from './rules/rules.component';
import { ScoreComponent } from './score/score.component';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    ControlComponent,
    RulesComponent,
    ScoreComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

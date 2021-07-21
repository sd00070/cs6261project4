import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ResistorCalculatorComponent } from './resistor-calculator/resistor-calculator.component';
import { DebugPanelComponent } from './debug-panel/debug-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    ResistorCalculatorComponent,
    DebugPanelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

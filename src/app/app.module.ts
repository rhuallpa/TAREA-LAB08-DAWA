import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { DashboardLunaComponent } from './dashboard-luna/dashboard-luna.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardLunaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

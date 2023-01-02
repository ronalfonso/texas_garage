import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PagesComponent } from './modules/pages/pages.component';
import { UIComponent } from './modules/pages/ui/ui.component';
import {UiModule} from "./modules/pages/ui/ui.module";

@NgModule({
  declarations: [
    AppComponent,
    PagesComponent,
    UIComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        UiModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

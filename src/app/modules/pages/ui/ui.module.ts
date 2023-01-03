import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import {RouterLink, RouterLinkActive} from "@angular/router";
import {MenuModule} from "primeng/menu";
import {ButtonModule} from "primeng/button";



@NgModule({
  declarations: [
    FooterComponent,
    NavbarComponent
  ],
    exports: [
        FooterComponent,
        NavbarComponent
    ],
  imports: [
    CommonModule,
    RouterLink,
    RouterLinkActive,
    MenuModule,
    ButtonModule
  ]
})
export class UiModule { }

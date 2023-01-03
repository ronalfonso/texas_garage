import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import {PagesRoutingModule} from "./pages-routing.module";
import {UiModule} from "./ui/ui.module";
import { HeaderComponent } from './home/components/header/header.component';
import {ButtonModule} from "primeng/button";
import {RippleModule} from "primeng/ripple";
import {CarouselModule} from "primeng/carousel";



@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent
  ],
    imports: [
        CommonModule,
        PagesRoutingModule,
        UiModule,
        ButtonModule,
        RippleModule,
        CarouselModule
    ]
})
export class PagesModule { }

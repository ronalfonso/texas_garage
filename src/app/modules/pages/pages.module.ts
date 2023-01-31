import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import {PagesRoutingModule} from "./pages-routing.module";
import {UiModule} from "./ui/ui.module";
import { HeaderComponent } from './home/components/header/header.component';
import {ButtonModule} from "primeng/button";
import {RippleModule} from "primeng/ripple";
import {CarouselModule} from "primeng/carousel";
import { ServicesComponent } from './home/components/services/services.component';
import {TooltipModule} from "primeng/tooltip";
import { BrandsComponent } from './home/components/brands/brands.component';



@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    ServicesComponent,
    BrandsComponent
  ],
    imports: [
        CommonModule,
        PagesRoutingModule,
        UiModule,
        ButtonModule,
        RippleModule,
        CarouselModule,
        TooltipModule
    ]
})
export class PagesModule { }

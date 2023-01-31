import { Component } from '@angular/core';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.scss']
})
export class BrandsComponent {

  brandsList: any[] = [
    {id: 1, url: './assets/img/amarr.jpg'},
    {id: 2, url: './assets/img/chi.jpg'},
    {id: 3, url: './assets/img/clopay.jpg'},
    {id: 4, url: './assets/img/genie.png'},
    {id: 5, url: './assets/img/holmes.jpg'},
    {id: 6, url: './assets/img/liftmaster.jpg'},
    {id: 7, url: './assets/img/linear.jpg'},
    {id: 8, url: './assets/img/overhead.jpg'},
  ]
}

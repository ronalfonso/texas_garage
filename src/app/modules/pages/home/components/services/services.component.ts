import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent {

  services: any[] = [
    {id: 1, img: './assets/img/replacement.png', title: 'Garage Door Services – Repair or Replacement', description: 'You need a functional garage door that works properly on a regular basis. The Texas Garage Doors knows this, and offers the full range of services you may require.'},
    {id: 1, img: './assets/img/Garage-Door-Repair.jpg', title: 'Garage Door Opened Replacement', description: 'Opener troubleshooting is included in the same day service The Texas Garage Doors provides. But that’s not the only branch of opener service offered here.'},
    {id: 1, img: './assets/img/open-close-door.png', title: 'Garage Door Not Opening or Closing', description: 'Not all garage door problems have an immediately clear cause. Some issues require troubleshooting to solve. A garage door not closing scenario is often the result of misaligned garage door sensors.'},
  ]

  moreServices: any[] = [
    {id: 1, name: 'Commercial door'},
    {id: 2, name: 'Garage door'},
    {id: 3, name: 'Dock Bumper'},
    {id: 4, name: 'Sectional door'},
    {id: 5, name: 'Sheet door'},
    {id: 6, name: 'Dock Level'},
    {id: 7, name: 'Slider door'},
    {id: 8, name: 'Windows on the door'},
    {id: 9, name: 'Single Garage'},
    {id: 10, name: 'Rolling steel door'},
    {id: 11, name: 'High Speed door'},
    {id: 12, name: 'Double Garage'},
  ]

  areasServices: any[] = [
    {id: 1, name: 'Austin'},
    {id: 2, name: 'Boerne'},
    {id: 3, name: 'Buda'},
    {id: 4, name: 'Bulverde'},
    {id: 5, name: 'Canyon lake'},
    {id: 6, name: 'Castroville'},
    {id: 7, name: 'Cíbolo'},
    {id: 8, name: 'Comfort'},
    {id: 9, name: 'Devine'},
    {id: 10, name: 'Floresville'},
    {id: 11, name: 'Fredericksburg'},
    {id: 12, name: 'Helotes'},
    {id: 13, name: 'Hunter'},
    {id: 14, name: 'Kyle'},
    {id: 15, name: 'La Vernia'},
    {id: 16, name: 'New Braunfels'},
    {id: 17, name: 'Pleasanton'},
    {id: 18, name: 'Poteet'},
    {id: 19, name: 'San Antonio'},
    {id: 20, name: 'San Marcos'},
    {id: 21, name: 'Seguin'},
    {id: 22, name: 'Spring branch'},
    {id: 23, name: 'Von ormy'},
    {id: 24, name: 'Wimberley'},
  ]

}

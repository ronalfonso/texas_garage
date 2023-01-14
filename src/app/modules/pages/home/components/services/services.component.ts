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

}

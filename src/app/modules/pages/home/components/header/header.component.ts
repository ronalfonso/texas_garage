import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  contacts = [
    {icon: 'pi-megaphone', title: '(210) 777-2112', subtitle: 'info@thetexasgaragedoors.com'},
    {icon: 'pi-send', title: 'direccion', subtitle: 'direccion'},
    {icon: 'pi-clock', title: '0:00 to 11:59', subtitle: 'Sunday to Sunday'},
  ]

  responsiveOptions;

  carousel: any[] = [
    {id: 1, url:'./assets/img/home01.jpeg', title: 'Commercial Garage doors', description: 'Do you need professional commercial garage door service? As you probably have discovered, most garage door service companies do not perform commercial repairs and are limited to residential service.'},
    {id: 2, url:'./assets/img/home02.jpeg', title: 'Reliable Garage Door Experts Near San Antonio', description: 'From San Antonio to Austin or anywhere nearby. The professional technicians at The Texas Garage Doors service all local areas. It’s very important to know who to call for problems like broken opener gears and worn springs.'},
    {id: 3, url:'./assets/img/home03.jpeg', title: 'Why Choose Us?', description: 'The Texas Garage Doors Encompasses more than same day repairs. If you need to replace a garage door and/or an opener, contacting us will ensure you get a great deal. Learn the pros and cons of the latest models and have your opener (or door) installed by nearby professionals.'},
  ]

  constructor() {
    this.responsiveOptions = [
      {
        breakpoint: '1024px',
        numVisible: 1,
        numScroll: 1
      },
      {
        breakpoint: '768px',
        numVisible: 1,
        numScroll: 1
      },
      {
        breakpoint: '560px',
        numVisible: 1,
        numScroll: 1
      }
    ];
  }

}

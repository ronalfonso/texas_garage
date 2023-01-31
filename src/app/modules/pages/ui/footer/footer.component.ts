import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  contacts = [
    {icon: 'pi-megaphone', title: '(210) 777-2112', subtitle: 'info@thetexasgaragedoors.com'},
    {icon: 'pi-send', title: 'direccion', subtitle: 'direccion'},
    {icon: 'pi-clock', title: '0:00 to 11:59', subtitle: 'Sunday to Sunday'},
  ]
}

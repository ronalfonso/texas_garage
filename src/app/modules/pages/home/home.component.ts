import {Component, HostListener, OnInit} from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  currentSection: BehaviorSubject<String> = new BehaviorSubject<String>('menu')
  sections: string[] = ['menu', 'content']

  constructor() {
    document.addEventListener('scroll', () => {
      this.addSticky();
    })
  }

  addSticky() {
      const menu = document.getElementById('menu');
      const content = document.getElementById('content');
      if (menu != null && content != null) {
        const rectContent = content.getBoundingClientRect();
        if (rectContent.top <= -115) {
            menu.classList.add('sticky')
          } else if (rectContent.top > -115 && rectContent.top <= 0) {
            menu.classList.remove('sticky')
          }

      }
  }

}

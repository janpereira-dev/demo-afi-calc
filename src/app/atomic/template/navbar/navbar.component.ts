import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tp-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  @Output() clickLogin = new EventEmitter<boolean>();
  navbarOpen = false;

}

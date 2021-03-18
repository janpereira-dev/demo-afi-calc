import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'AFI calculadora Digital';
  sidebarOpen = false;

  handleLogin(events: any): any {
    this.sidebarOpen = !this.sidebarOpen;
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AFI calculadora Digital';
  sidebarOpen = false;

  handleLogin(events: any): any {
    this.sidebarOpen = !this.sidebarOpen;
  }
}

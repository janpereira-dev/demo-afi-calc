import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tp-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  @Input() open = false;

}

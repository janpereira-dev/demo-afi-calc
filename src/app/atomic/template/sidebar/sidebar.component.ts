import { Component, Input } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-tp-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  @Input() open = false;

  login = this.fb.group({
    emailForm: ['', Validators.required ],
    passForm: ['', Validators.required ]
  });

  constructor(private fb: FormBuilder) { }

  onSubmit(): void {
    console.warn(this.login.value);
  }

  handleSideClose(): void {
    this.open = false;
  }

}

// Core
import { Component, Input } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
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

  constructor(private fb: FormBuilder, private toastr: ToastrService) { }

  onSubmit(): void {
    console.warn(this.login.value);
    this.toastr.success(`Login con correo: ${this.login.value.emailForm}.`, '¡Gracias por el login!');
  }

  handleSideClose(): void {
    this.open = false;
  }

}

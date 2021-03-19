import { Component } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-pa-addition',
  templateUrl: './addition.component.html',
  styleUrls: ['./addition.component.scss']
})
export class AdditionComponent {

  calcForm = this.fb.group({
    nameForm: [''],
    firstField: ['', Validators.required],
    secondField: ['', Validators.required]
  });

  constructor(private fb: FormBuilder) { }

  onSubmit(): void {
    console.warn(this.calcForm.value);
  }

  addition(x: number, y: number): number{
    return x + y;
  }

}

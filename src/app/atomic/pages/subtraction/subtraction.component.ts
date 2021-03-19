import { Component } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-pa-subtraction',
  templateUrl: './subtraction.component.html',
  styleUrls: ['./subtraction.component.scss']
})
export class SubtractionComponent {

  calcForm = this.fb.group({
    nameForm: [''],
    firstField: ['', Validators.required],
    secondField: ['', Validators.required]
  });

  constructor(private fb: FormBuilder) { }

  onSubmit(): void {
    console.warn(this.calcForm.value);
  }

  subtraction(x: number, y: number): number{
    return x - y;
  }

}

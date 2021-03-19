import { Component } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-pa-multiplication',
  templateUrl: './multiplication.component.html',
  styleUrls: ['./multiplication.component.scss']
})
export class MultiplicationComponent {

  calcForm = this.fb.group({
    nameForm: [''],
    firstField: ['', Validators.required],
    secondField: ['', Validators.required]
  });

  constructor(private fb: FormBuilder) { }

  onSubmit(): void {
    console.warn(this.calcForm.value);
  }

  multiplication(x: number, y: number): number{
    return x * y;
  }

}

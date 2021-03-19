import { Component } from '@angular/core';
import { Validators, FormBuilder, FormControl} from '@angular/forms';

@Component({
  selector: 'app-pa-addition',
  templateUrl: './addition.component.html',
  styleUrls: ['./addition.component.scss']
})
export class AdditionComponent {

  calcForm = this.fb.group({
    nameForm: [''],
    firstField: ['', [ Validators.required, Validators.pattern(/^\-?\d+(\.(?=\d))?\d*$/) ] ],
    secondField: ['', [ Validators.required, Validators.pattern(/^\-?\d+(\.(?=\d))?\d*$/) ] ]
  });

  constructor(private fb: FormBuilder) { }

  onSubmit(): void {
    console.warn(this.calcForm.value);
  }

  addition(x: number, y: number): number{
    return Number(x) + Number(y);
  }

  getNumberFC(ctrl: string): FormControl {
    return this.calcForm.get(ctrl) as FormControl;
  }

}

import { Component } from '@angular/core';
import { TYPES_CALC } from 'src/app/constants/constants'
@Component({
  selector: 'app-pa-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent {
  buttons = TYPES_CALC;
}

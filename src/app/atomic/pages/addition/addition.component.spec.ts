import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

import { AdditionComponent } from './addition.component';

describe('AdditionComponent', () => {
  let component: AdditionComponent;
  let fixture: ComponentFixture<AdditionComponent>;
  let form: FormBuilder;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdditionComponent ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
      providers: [FormBuilder]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdditionComponent);
    component = fixture.componentInstance;
    form = new FormBuilder();
    component.calcForm = form.group({
      nameForm: [''],
      firstField: ['', [ Validators.required, Validators.pattern(/^\-?\d+(\.(?=\d))?\d*$/) ] ],
      secondField: ['', [ Validators.required, Validators.pattern(/^\-?\d+(\.(?=\d))?\d*$/) ] ]
    });
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set submitted to true', () => {
    component.onSubmit();
    expect(component.onSubmit).toBeTruthy();
  });

  it('should return form control by field name', () => {
    expect(component.getNumberFC('firstField')).toEqual(component.calcForm.get('firstField') as FormControl);
  });

  it('should return result to multiplication', () => {
    expect(component.addition(5, 2)).toEqual(7);
  });

});

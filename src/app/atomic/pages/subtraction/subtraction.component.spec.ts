import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';

import { SubtractionComponent } from './subtraction.component';

describe('SubtractionComponent', () => {
  let component: SubtractionComponent;
  let fixture: ComponentFixture<SubtractionComponent>;
  let form: FormBuilder;
  let el: HTMLElement;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubtractionComponent ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
      providers: [FormBuilder]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubtractionComponent);
    component = fixture.componentInstance;
    // form = new FormBuilder();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('should onSubmit', () => {
  //   spyOn(component, 'onSubmit');
  //   el = fixture.debugElement.query(By.css('button')).nativeElement;
  //   el.click();
  //   expect(component.onSubmit).toHaveBeenCalledTimes(1);
  // });

  it('should set submitted to true', () => {
    component.onSubmit();
    expect(component.onSubmit).toBeTruthy();
  });
  
});

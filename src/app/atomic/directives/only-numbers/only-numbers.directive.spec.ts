import { Component } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { OnlyNumbersDirective } from './only-numbers.directive';

@Component({ template: '<input appOnlyNumbers>' })
export class MockOnlyNumbersComponent {}

describe('OnlyNumbersDirective', () => {
  let fixture: ComponentFixture<MockOnlyNumbersComponent>;
  let inputEl: HTMLInputElement;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [OnlyNumbersDirective, MockOnlyNumbersComponent],
        imports: [FormsModule]
      });
      fixture = TestBed.createComponent(MockOnlyNumbersComponent);
      inputEl = fixture.nativeElement.querySelector('input');
      fixture.detectChanges();
    })
  );

  it('continue propagation of directive', () => {
    const event = new Event('input', { bubbles: true });
    inputEl.setAttribute('value', '1');
    spyOn(event as any, 'bubbles');
    inputEl.dispatchEvent(event);
    expect(event.bubbles).toEqual(true);
  });
});

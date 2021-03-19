import { Directive, HostListener } from '@angular/core';
@Directive({
  selector: '[appOnlyNumbers]'
})
export class OnlyNumbersDirective {
  @HostListener('input', ['$event']) onKeyDown(ev: KeyboardEvent) {
    const input = ev.target as HTMLInputElement;
    input.value = String(input.value.replace(/[[:alpha:]]|,/g, ''));
  }
}

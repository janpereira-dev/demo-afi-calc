import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestadoraComponent } from './restadora.component';

describe('RestadoraComponent', () => {
  let component: RestadoraComponent;
  let fixture: ComponentFixture<RestadoraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestadoraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RestadoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

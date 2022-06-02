import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValueyourtradeComponent } from './valueyourtrade.component';

describe('ValueyourtradeComponent', () => {
  let component: ValueyourtradeComponent;
  let fixture: ComponentFixture<ValueyourtradeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValueyourtradeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ValueyourtradeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmNumberComponent } from './confirm-number.component';

describe('ConfirmNumberComponent', () => {
  let component: ConfirmNumberComponent;
  let fixture: ComponentFixture<ConfirmNumberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmNumberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

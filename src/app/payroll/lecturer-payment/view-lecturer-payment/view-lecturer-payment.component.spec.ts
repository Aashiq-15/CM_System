import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewLecturerPaymentComponent } from './view-lecturer-payment.component';

describe('ViewLecturerPaymentComponent', () => {
  let component: ViewLecturerPaymentComponent;
  let fixture: ComponentFixture<ViewLecturerPaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewLecturerPaymentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewLecturerPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

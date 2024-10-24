import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewEmployeePaymentComponent } from './view-employee-payment.component';

describe('ViewEmployeePaymentComponent', () => {
  let component: ViewEmployeePaymentComponent;
  let fixture: ComponentFixture<ViewEmployeePaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewEmployeePaymentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewEmployeePaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

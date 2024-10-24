import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditEmployeePaymentComponent } from './add-edit-employee-payment.component';

describe('AddEditEmployeePaymentComponent', () => {
  let component: AddEditEmployeePaymentComponent;
  let fixture: ComponentFixture<AddEditEmployeePaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddEditEmployeePaymentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditEmployeePaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditLecturerPaymentComponent } from './add-edit-lecturer-payment.component';

describe('AddEditLecturerPaymentComponent', () => {
  let component: AddEditLecturerPaymentComponent;
  let fixture: ComponentFixture<AddEditLecturerPaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddEditLecturerPaymentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditLecturerPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

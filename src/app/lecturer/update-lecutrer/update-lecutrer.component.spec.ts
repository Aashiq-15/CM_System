import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateLecutrerComponent } from './update-lecutrer.component';

describe('UpdateLecutrerComponent', () => {
  let component: UpdateLecutrerComponent;
  let fixture: ComponentFixture<UpdateLecutrerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateLecutrerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateLecutrerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

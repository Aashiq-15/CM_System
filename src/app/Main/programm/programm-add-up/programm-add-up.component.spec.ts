import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgrammAddUpComponent } from './programm-add-up.component';

describe('ProgrammAddUpComponent', () => {
  let component: ProgrammAddUpComponent;
  let fixture: ComponentFixture<ProgrammAddUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProgrammAddUpComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProgrammAddUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

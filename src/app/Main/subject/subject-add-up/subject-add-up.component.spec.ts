import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectAddUpComponent } from './subject-add-up.component';

describe('SubjectAddUpComponent', () => {
  let component: SubjectAddUpComponent;
  let fixture: ComponentFixture<SubjectAddUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubjectAddUpComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubjectAddUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewLecturerComponent } from './view-lecturer.component';

describe('ViewLecturerComponent', () => {
  let component: ViewLecturerComponent;
  let fixture: ComponentFixture<ViewLecturerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewLecturerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewLecturerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

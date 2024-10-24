import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttandanceSheetComponent } from './attandance-sheet.component';

describe('AttandanceSheetComponent', () => {
  let component: AttandanceSheetComponent;
  let fixture: ComponentFixture<AttandanceSheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AttandanceSheetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AttandanceSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

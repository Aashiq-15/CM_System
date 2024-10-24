import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TownAddUpdateComponent } from './town-add-update.component';

describe('TownAddUpdateComponent', () => {
  let component: TownAddUpdateComponent;
  let fixture: ComponentFixture<TownAddUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TownAddUpdateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TownAddUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

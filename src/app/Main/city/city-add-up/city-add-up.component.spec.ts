import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CityAddUpComponent } from './city-add-up.component';

describe('CityAddUpComponent', () => {
  let component: CityAddUpComponent;
  let fixture: ComponentFixture<CityAddUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CityAddUpComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CityAddUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

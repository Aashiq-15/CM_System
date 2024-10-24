import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryAddUpComponent } from './country-add-up.component';

describe('CountryAddUpComponent', () => {
  let component: CountryAddUpComponent;
  let fixture: ComponentFixture<CountryAddUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CountryAddUpComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CountryAddUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherViewingComponent } from './weather-viewing.component';

describe('WeatherViewingComponent', () => {
  let component: WeatherViewingComponent;
  let fixture: ComponentFixture<WeatherViewingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherViewingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherViewingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HourlyDailyWeatherForecastComponent } from './hourly-daily-weather-forecast.component';

describe('HourlyDailyWeatherForecastComponent', () => {
  let component: HourlyDailyWeatherForecastComponent;
  let fixture: ComponentFixture<HourlyDailyWeatherForecastComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HourlyDailyWeatherForecastComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HourlyDailyWeatherForecastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

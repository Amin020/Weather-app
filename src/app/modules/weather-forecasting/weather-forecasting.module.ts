import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WeatherForecastingRoutingModule } from './weather-forecasting-routing.module';
import { WeatherViewingComponent } from './pages/weather-viewing/weather-viewing.component';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { HourlyDailyWeatherForecastComponent } from './components/hourly-daily-weather-forecast/hourly-daily-weather-forecast.component';

@NgModule({
  declarations: [
    WeatherViewingComponent,
    HourlyDailyWeatherForecastComponent
  ],
  imports: [
    CommonModule,
    WeatherForecastingRoutingModule,
    AngularSvgIconModule
  ]
})
export class WeatherForecastingModule { }

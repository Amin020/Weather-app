import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WeatherForecastingRoutingModule } from './weather-forecasting-routing.module';
import { WeatherViewingComponent } from './pages/weather-viewing/weather-viewing.component';
import { HourlyDailyWeatherForecastComponent } from './components/hourly-daily-weather-forecast/hourly-daily-weather-forecast.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    WeatherViewingComponent,
    HourlyDailyWeatherForecastComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    WeatherForecastingRoutingModule
  ]
})
export class WeatherForecastingModule { }

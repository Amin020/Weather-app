import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WeatherForecastingRoutingModule } from './weather-forecasting-routing.module';
import { WeatherViewingComponent } from './pages/weather-viewing/weather-viewing.component';

@NgModule({
  declarations: [
    WeatherViewingComponent
  ],
  imports: [
    CommonModule,
    WeatherForecastingRoutingModule
  ]
})
export class WeatherForecastingModule { }

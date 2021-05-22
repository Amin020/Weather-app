import { Component, OnInit } from '@angular/core';
import { TempertureMeasurementOptions } from 'src/app/core/models/Weather-Forecasting.model';

@Component({
  selector: 'app-weather-viewing',
  templateUrl: './weather-viewing.component.html',
  styleUrls: ['./weather-viewing.component.scss']
})
export class WeatherViewingComponent implements OnInit {

  tempertureMeasurementOptions = TempertureMeasurementOptions;
  measurement = TempertureMeasurementOptions.F;
  currentCity = "New Cairo";
  currentDate = new Date();

  constructor() { }

  ngOnInit() {
    this.getWeatherData();
  }

  private getWeatherData(): void {

  }

  changeMeasurement(newMeasurements: TempertureMeasurementOptions): void {
    this.measurement = newMeasurements;
  }

}

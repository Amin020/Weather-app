import { Component, OnInit } from '@angular/core';
import { WeatherController } from 'src/app/core/controllers/weather-controller';
import { TemperatureIcons, TempertureMeasurementOptions, WeatherForecastingModel } from 'src/app/core/models/Weather-Forecasting.model';

@Component({
  selector: 'app-weather-viewing',
  templateUrl: './weather-viewing.component.html',
  styleUrls: ['./weather-viewing.component.scss']
})
export class WeatherViewingComponent implements OnInit {

  weatherObj = new WeatherForecastingModel();
  temperatureIcons = TemperatureIcons;
  tempertureMeasurementOptions = TempertureMeasurementOptions;
  measurement = TempertureMeasurementOptions.F;
  currentLocation = "";
  currentDate = new Date();

  constructor(
    private weatherController: WeatherController
  ) { }

  ngOnInit(): void {
    this.getLatAndLang();
  }

  private getLatAndLang(): void {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.getWeatherData);
      navigator.geolocation.getCurrentPosition(this.getCurrentLocation);
    } else {
    }
  }

  private getWeatherData = (position: any): void => {
    const lat = position.coords.latitude;
    const long = position.coords.longitude;
    this.weatherController.getWeatherData(lat, long, weatherData => {
      this.weatherObj = weatherData;
    }, error => {
    });
  }

  private getCurrentLocation = (position: any): void => {
    const lat = position.coords.latitude;
    const long = position.coords.longitude;
    this.weatherController.getCurrentLocation(lat, long, currentLocation => {
      this.currentLocation = currentLocation.name;
    }, error => {
    });
  }

  public changeMeasurement(newMeasurements: TempertureMeasurementOptions): void {
    if (this.measurement !== newMeasurements) {
      this.convertTemperatureMeasurement(newMeasurements);
    }
  }

  private convertTemperatureMeasurement(newMeasurements: TempertureMeasurementOptions): void {
    this.measurement = newMeasurements;
    if (this.measurement === TempertureMeasurementOptions.F) {
      this.convertCelciusToFehrenheit();
    } else if (this.measurement === TempertureMeasurementOptions.C) {
      this.convertFehrenheitToCelcius();
    }
  }

  private convertCelciusToFehrenheit(): void {
    this.weatherObj.currentTemperature = Math.round((this.weatherObj.currentTemperature * 1.8) + 32);
    this.weatherObj.highTemperature = Math.round((this.weatherObj.highTemperature * 1.8) + 32);
    this.weatherObj.lowTemperature = Math.round((this.weatherObj.lowTemperature * 1.8) + 32);
    this.weatherObj.hourlyTemperatureData.forEach(hourlyTemperatureItem => {
      hourlyTemperatureItem.value = Math.round((hourlyTemperatureItem.value * 1.8) + 32);
    });
    this.weatherObj.dailyTemperatureData.forEach(dailyTemperatureItem => {
      dailyTemperatureItem.value = Math.round((dailyTemperatureItem.value * 1.8) + 32);
    });
  }

  private convertFehrenheitToCelcius(): void {
    this.weatherObj.currentTemperature = Math.round((this.weatherObj.currentTemperature - 32) / 1.8);
    this.weatherObj.highTemperature = Math.round((this.weatherObj.highTemperature - 32) / 1.8);
    this.weatherObj.lowTemperature = Math.round((this.weatherObj.lowTemperature - 32) / 1.8);
    this.weatherObj.hourlyTemperatureData.forEach(hourlyTemperatureItem => {
      hourlyTemperatureItem.value = Math.round((hourlyTemperatureItem.value - 32) / 1.8);
    });
    this.weatherObj.dailyTemperatureData.forEach(dailyTemperatureItem => {
      dailyTemperatureItem.value = Math.round((dailyTemperatureItem.value - 32) / 1.8);
    });
  }

}

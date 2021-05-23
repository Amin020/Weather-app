import { Component, Input, OnInit } from '@angular/core';
import { TemperatureData, TemperatureIcons, TemperatureTabs, WeatherForecastingModel } from 'src/app/core/models/Weather-Forecasting.model';

@Component({
  selector: 'app-hourly-daily-weather-forecast',
  templateUrl: './hourly-daily-weather-forecast.component.html',
  styleUrls: ['./hourly-daily-weather-forecast.component.scss']
})
export class HourlyDailyWeatherForecastComponent implements OnInit {

  @Input() weatherObj: WeatherForecastingModel;
  temperatureIcons = TemperatureIcons;
  activeTab = TemperatureTabs.hourly;
  temperatureTabs = TemperatureTabs;
  activeTemperatureData: Array<TemperatureData>;

  constructor() { }

  ngOnInit() {
    this.activeTemperatureData = this.weatherObj.hourlyTemperatureData;
  }

  public changeActiveTab(newTabValue: TemperatureTabs): void {
    this.activeTab = newTabValue;
    if (this.activeTab === TemperatureTabs.hourly) {
      this.activeTemperatureData = this.weatherObj.hourlyTemperatureData;
    } else { // Daily
      this.activeTemperatureData = this.weatherObj.dailyTemperatureData;
    }
  }

}

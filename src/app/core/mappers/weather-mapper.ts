import { WeatherForecastingModel } from "../models/Weather-Forecasting.model";

export class WeatherMapper {

    constructor() { }

    public mapWeatherData(weatherResponse: any): WeatherForecastingModel {
        const mappedWeatherData = new WeatherForecastingModel();
        mappedWeatherData.shortSummary = weatherResponse.currently.summary;
        mappedWeatherData.currentTemperature = Math.round(weatherResponse.currently.temperature); // In Fahrenheit
        mappedWeatherData.highTemperature = Math.round(weatherResponse.daily.data[0].temperatureHigh);
        mappedWeatherData.lowTemperature = Math.round(weatherResponse.daily.data[0].temperatureLow);
        mappedWeatherData.summaryToday = weatherResponse.daily.data[0].summary;
        mappedWeatherData.currentTemperatureIcon = weatherResponse.currently.icon;
        return mappedWeatherData;
    }

}
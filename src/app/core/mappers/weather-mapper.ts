import { TemperatureData, TemperatureTabs, WeatherForecastingModel } from "../models/Weather-Forecasting.model";

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
        mappedWeatherData.hourlyTemperatureData = this.getMappedTemperatureData(weatherResponse.hourly.data, TemperatureTabs.hourly);
        mappedWeatherData.dailyTemperatureData = this.getMappedTemperatureData(weatherResponse.daily.data, TemperatureTabs.daily);
        return mappedWeatherData;
    }

    private getMappedTemperatureData(temperatureDataListRes: Array<any>, temperatureType: TemperatureTabs): Array<TemperatureData> {
        const mappedTemperatureData = new Array<TemperatureData>();
        if (temperatureDataListRes) {
            for (let i = 0; i < temperatureDataListRes.length; i++) {
                const temperatureDataItem = temperatureDataListRes[i];
                mappedTemperatureData.push({
                    title: new Date(temperatureDataItem.time * 1000),
                    icon: temperatureDataItem.icon,
                    value: this.getTemperatureValue(temperatureDataItem, temperatureType)
                });
            }
        }
        return mappedTemperatureData;
    }

    private getTemperatureValue(temperatureDataItem: any, temperatureType: TemperatureTabs): number {
        if (temperatureType === TemperatureTabs.hourly) {
            return Math.round(temperatureDataItem.temperature);
        }
        if (temperatureType === TemperatureTabs.daily) {
            return Math.round((temperatureDataItem.temperatureHigh + temperatureDataItem.temperatureLow) / 2);
        }
    }

}
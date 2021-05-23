export enum TempertureMeasurementOptions {
    F = "Fahrenheit",
    C = "Celsius"
}

export enum TemperatureIcons {
    cloudy = "clear-night",
    sunny = "clear-day"
}

export class WeatherForecastingModel {

    shortSummary: string;
    currentTemperature: number;
    highTemperature: number;
    lowTemperature: number;
    summaryToday: string;
    currentTemperatureIcon: string;

    constructor() {
        this.shortSummary = "";
        this.summaryToday = "";
    }

}
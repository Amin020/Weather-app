export enum TempertureMeasurementOptions {
    F = "Fahrenheit",
    C = "Celsius"
}

export enum TemperatureIcons {
    cloudy = "clear-night",
    sunny = "clear-day"
}

export enum TemperatureTabs {
    hourly = "Hourly",
    daily = "Daily"
}
export class WeatherForecastingModel {

    shortSummary: string;
    currentTemperature: number;
    highTemperature: number;
    lowTemperature: number;
    summaryToday: string;
    currentTemperatureIcon: string;
    hourlyTemperatureData: Array<TemperatureData>;
    dailyTemperatureData: Array<TemperatureData>;

    constructor() {
        this.shortSummary = "";
        this.summaryToday = "";
    }

}

export interface TemperatureData {
    title: Date;
    icon: string;
    value: number;
}
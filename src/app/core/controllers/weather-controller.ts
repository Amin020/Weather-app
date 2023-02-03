import { HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { WeatherMapper } from "../mappers/weather-mapper";
import { WeatherForecastingModel } from "../models/Weather-Forecasting.model";
import { DataService } from "../services/data-service";
@Injectable({
    providedIn: "root"
})

export class WeatherController {

    private APIKey = "a177f8481c31fa96c3f95ad4f4f84610";
    // private URL = `https://api.darksky.net`;
    private weatherMapper = new WeatherMapper();

    constructor(private dataService: DataService) { }

    public getWeatherData(lat: any, long: any, onSuccess: (weatherData: WeatherForecastingModel) => void, onError: (error: HttpErrorResponse) => void): void {
        const fullURL = `/forecast/${this.APIKey}/${lat}, ${long}`;
        this.dataService.getAll(fullURL).subscribe((weatherDataResponse: any) => {
            const mappedWeatherData = this.weatherMapper.mapWeatherData(weatherDataResponse);
            onSuccess(mappedWeatherData);
        }, error => {
            onError(error);
        });
    }

    public getCurrentLocation(lat: any, long: any, onSuccess: (currentLocation: any) => void, onError: (error: HttpErrorResponse) => void) {
        this.dataService.getAll(`/rgeo?lat=${lat}&lon=${long}`).subscribe(currentLocation => {
            onSuccess(currentLocation);
        }, error => {
            onError(error);
        });
    }
}
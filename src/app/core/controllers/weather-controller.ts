import { HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { WeatherMapper } from "../mappers/weather-mapper";
import { WeatherForecastingModel } from "../models/Weather-Forecasting.model";
import { DataService } from "../services/data-service";

@Injectable({
    providedIn: "root"
})

export class WeatherController {

    private APIKey = "a177f8481c31fa96c3f95ad4f4f84610";
    private URL = `https://api.darksky.net`;
    private httpHeaders = new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    });
    private options = {
        headers: this.httpHeaders
    };
    private weatherMapper = new WeatherMapper();

    constructor(private dataService: DataService) { }

    public getWeatherData(lat: any, long: any, onSuccess: (weatherData: WeatherForecastingModel) => void, onError: (error: HttpErrorResponse) => void): void {
        this.dataService.getAll(`${this.URL}/forecast/${this.APIKey}/${lat}, ${long}`).subscribe((weatherDataResponse: any) => {
            const mappedWeatherData = this.weatherMapper.mapWeatherData(weatherDataResponse);
            onSuccess(mappedWeatherData);
        }, error => {
            onError(error);
        });
    }

    public getCurrentLocation(lat: any, long: any, onSuccess: (currentLocation: any) => void, onError: (error: HttpErrorResponse) => void) {
        this.dataService.getAll(`https://darksky.net/rgeo?lat=${lat}&lon=${long}`).subscribe(currentLocation => {
            onSuccess(currentLocation);
        }, error => {
            onError(error);
        });
    }
}
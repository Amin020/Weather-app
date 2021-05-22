import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WeatherViewingComponent } from './pages/weather-viewing/weather-viewing.component';

const routes: Routes = [
  {
    path: '',
    component: WeatherViewingComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WeatherForecastingRoutingModule { }

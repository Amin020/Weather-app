import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'weather-forecasting',
    pathMatch: 'full'
  },
  {
    path: 'weather-forecasting',
    loadChildren: './modules/weather-forecasting/weather-forecasting.module#WeatherForecastingModule',
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }

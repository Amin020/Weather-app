import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxSpinnerModule } from "ngx-spinner";
import { AngularSvgIconModule } from 'angular-svg-icon';
import { ErrorComponent } from './components/error/error.component';

@NgModule({
  declarations: [
    ErrorComponent
  ],
  imports: [
    CommonModule,
    AngularSvgIconModule,
    NgxSpinnerModule
  ],
  exports: [
    AngularSvgIconModule,
    NgxSpinnerModule,
    ErrorComponent
  ]
})
export class SharedModule { }

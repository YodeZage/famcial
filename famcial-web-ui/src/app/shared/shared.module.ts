import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  NumberCardComponent,
  LineChartComponent,
  PieChartComponent
} from './components';

@NgModule({
  declarations: [
    NumberCardComponent,
    LineChartComponent,
    PieChartComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NumberCardComponent,
    LineChartComponent,
    PieChartComponent
  ]
})
export class SharedModule { }

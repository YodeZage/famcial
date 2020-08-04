import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  NumberCardComponent,
  LineChartComponent,
  PieChartComponent,
  BarChartComponent
} from './components';

@NgModule({
  declarations: [
    NumberCardComponent,
    LineChartComponent,
    PieChartComponent,
    BarChartComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NumberCardComponent,
    LineChartComponent,
    PieChartComponent,
    BarChartComponent
  ]
})
export class SharedModule { }

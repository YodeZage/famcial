import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { RouterModule } from '@angular/router';

import {
  NavComponent,
  FooterComponent,
  NumberCardComponent,
  LineChartComponent,
  PieChartComponent
} from './components';

@NgModule({
  declarations: [
    NavComponent,
    FooterComponent,
    NumberCardComponent,
    LineChartComponent,
    PieChartComponent
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    RouterModule
  ],
  exports: [
    NavComponent,
    FooterComponent,
    NumberCardComponent,
    LineChartComponent,
    PieChartComponent
  ]
})
export class CoreModule { }

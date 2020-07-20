import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Chart } from 'chart.js';
import { MonthName } from '../../../core/constants/calendar-names';

@Component({
  selector: 'famcial-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss']
})
export class LineChartComponent implements OnInit, AfterViewInit {

  @ViewChild('lineChart') lineChart: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.buildLineChart();
  }

  private buildLineChart() {
    const cxt = this.lineChart.nativeElement;
    return new Chart(cxt, {
      type: 'line',
      data: {
          datasets: [{
              fill: false,
              borderColor: '#dc3545',
              borderDash: [10, 10],
              pointBackgroundColor: '#dc3545',
              data: [1023.23, 1512.42, 7424.24, 853.35, 1257.82, 1872.58, 1365.57, 2156.25, 1452.24, 1698.57, 1251.24, 1341.27]
          }],
          labels: MonthName.abbreviation
      },
      options: {
        legend: {
          display: false
        },
        scales: {
          xAxes: [{
            gridLines: {
              display: false
            }
          }]
        }
      }
    });
  }

}

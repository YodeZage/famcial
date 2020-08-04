import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Chart } from 'chart.js';
import { MonthName } from '../../../core/constants/calendar-names';

@Component({
  selector: 'famcial-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss']
})
export class BarChartComponent implements OnInit, AfterViewInit {

  @ViewChild('barChart') lineChart: ElementRef;

  spendData: number[];
  incomeData: number[];
  differenceData: number[];

  constructor() { }

  ngOnInit(): void {
    this.spendData = [1023.23, 1512.42, 7424.24, 853.35, 1257.82, 1872.58, 1365.57, 2156.25, 1452.24, 9012.25, 1251.24, 1341.27];
    this.incomeData = [7568.24, 7568.24, 7568.24, 7568.24, 7568.24, 7568.24, 7568.24, 7568.24, 7568.24, 7568.24, 7568.24, 7568.24];
    this.differenceData = this.getDifferenceData();
  }

  ngAfterViewInit() {
    this.buildBarChart();
  }

  private buildBarChart() {
    const cxt = this.lineChart.nativeElement;
    return new Chart(cxt, {
      type: 'bar',
      data: {
          datasets: [{
            label: 'Difference',
            type: 'line',
            fill: false,
            borderColor: 'rgba(0, 153, 229, 1)',
            pointBackgroundColor: 'rgba(0, 153, 229, 1)',
            data: this.differenceData
          },
          {
            label: 'Spend',
            backgroundColor: 'rgba(255, 76, 76, .6)',
            categoryPercentage: 0.9,
            barPercentage: 1.0,
            data: this.spendData
          },
          {
            label: 'Income',
            backgroundColor: 'rgba(52, 191, 73, .6)',
            categoryPercentage: 0.9,
            barPercentage: 1.0,
            data: this.incomeData
          }],
          labels: MonthName.abbreviation
      },
      options: {
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

  private getDifferenceData(): number[] {
    const diffData: number[] = [];
    if (this.incomeData.length !== this.spendData.length) {
      return undefined;
    } else {
      for(let i = 0; i < this.spendData.length; i++) {
        diffData.push(this.incomeData[i] - this.spendData[i]);
      }
      return diffData;
    }
  }

}

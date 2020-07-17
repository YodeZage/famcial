import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Chart } from '../../../../../node_modules/chart.js';

@Component({
  selector: 'famcial-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss']
})
export class PieChartComponent implements OnInit, AfterViewInit {

  @ViewChild('pieChart') lineChart: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.buildPieChart();
  }

  private buildPieChart() {
    const cxt = this.lineChart.nativeElement;
    return new Chart(cxt, {
      type: 'pie',
      data: {
          datasets: [{
              data: [10, 20, 30]
          }],
          labels: ['Red', 'Yellow', 'Blue']
      },
      options: {
      }
    });
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'famcial-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  currentMonthSpend: number;
  currentMonthEarn: number;

  constructor() { }

  ngOnInit(): void {
    this.currentMonthSpend = 1234.56;
    this.currentMonthEarn = 6543.21;
  }

}

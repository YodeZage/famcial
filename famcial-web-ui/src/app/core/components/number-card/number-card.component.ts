import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'famcial-number-card',
  templateUrl: './number-card.component.html',
  styleUrls: ['./number-card.component.scss']
})
export class NumberCardComponent implements OnInit {

  @Input() Title: string;
  @Input() Data: number;
  @Input() Color: 'Black' | 'Green' | 'Red';

  titleName: string;
  dataNumber: number;
  colorString: 'Black' | 'Green' | 'Red';

  constructor() { }

  ngOnInit(): void {
    this.titleName = this.Title ? this.Title : 'Default title';
    this.dataNumber = this.Data ? this.Data : 0;
    this.colorString = this.Color ? this.Color : 'Black';
  }

}

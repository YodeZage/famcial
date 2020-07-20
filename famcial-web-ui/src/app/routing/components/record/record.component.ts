import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'famcial-record',
  templateUrl: './record.component.html',
  styleUrls: ['./record.component.scss']
})
export class RecordComponent implements OnInit {

  recordData: any;

  constructor() { }

  ngOnInit(): void {
  }

}

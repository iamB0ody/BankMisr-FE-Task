import { ConvertData } from './../../../../shared/interfaces/convert.type';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exchange-home',
  templateUrl: './exchange-home.component.html',
  styleUrls: ['./exchange-home.component.scss'],
})
export class ExchangeHomeComponent implements OnInit {
  convertData!: ConvertData;

  constructor() {}

  ngOnInit(): void {}

  sendData(data: any) {
    this.convertData = data;
  }
}

import { ConvertData } from './../../../../shared/interfaces/convert.type';
import { TimeSeriesRates } from './../../../../shared/interfaces/time-series.type';
import { GeneralService } from 'src/app/shared/services/general.service';
import { ConvertDetails } from 'src/app/shared/interfaces/details.type';
import { Component, Input, OnInit } from '@angular/core';
import { ExchangeService } from '../../services/exchange.service';

import { ChartDataset, ChartOptions } from 'chart.js';

@Component({
  selector: 'app-chart-panel',
  templateUrl: './chart-panel.component.html',
  styleUrls: ['./chart-panel.component.scss'],
})
export class ChartPanelComponent implements OnInit {
  detailsData!: ConvertData;
  lineChartData: ChartDataset[] = [];
  lineChartLabels: string[] = [];
  lineChartOptions: ChartOptions = {
    responsive: true,
  };
  lineChartColors: any[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(255,255,0,0.28)',
    },
  ];

  @Input() set convert(value: ConvertData) {
    if (value) {
      this.detailsData = value;
      this.getChartData(value);
    }
  }

  constructor(
    private exchangeService: ExchangeService,
    private generalService: GeneralService
  ) {}

  ngOnInit(): void {}

  getChartData(data: ConvertData) {
    const start = this.generalService.dateFormate(
      new Date(new Date().setFullYear(new Date().getFullYear() - 1))
    );
    const end = this.generalService.dateFormate(new Date());
    this.exchangeService
      .timeSeries(data.symbol, data.to, start, end)
      .subscribe((response) => {
        this.convertSeriesPerDayToPerMonth(response.rates);
      });
  }

  convertSeriesPerDayToPerMonth(rates: TimeSeriesRates) {
    // Monthly rate is calculated based on rate in last day of that month
    // Get rate value of last day of every month
    const newData: { [key: string]: {} } = {};
    for (const key in rates) {
      if (Object.prototype.hasOwnProperty.call(rates, key)) {
        const element = rates[key];
        const month = `${key.split('-')[0]}-${key.split('-')[1]}`;
        newData[month] = element;
      }
    }
    // convert to chart shape
    this.chartGenerate(newData);
  }

  chartGenerate(data: TimeSeriesRates) {
    this.lineChartData = [
      {
        data: Object.values(data).map((r) => r[this.detailsData.to]),
        label: this.detailsData.to,
      },
    ];
    this.lineChartLabels = Object.keys(data);
  }
}

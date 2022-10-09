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
  lineChartData: ChartDataset[] = [
    { data: [1,2,3,4,5,6], label: 'Crude oil prices' },
  ];
  lineChartLabels: string[] = ['2020-01-01', '2020-02-01', '2020-03-01', '2020-04-01', '2020-05-01', '2020-06-01'];
  lineChartOptions: ChartOptions = {
    responsive: true,
  };
  // lineChartColors: any[] = [
  //   {
  //     borderColor: 'black',
  //     backgroundColor: 'rgba(255,255,0,0.28)',
  //   },
  // ];
  // lineChartLegend = true;
  // lineChartPlugins = [];
  lineChartType = 'line';


  @Input() set data(value: ConvertDetails) {
    this.getChartData(value);
  }

  constructor(
    private exchangeService: ExchangeService,
    private generalService: GeneralService
  ) {}

  ngOnInit(): void {}

  getChartData(data: ConvertDetails) {
    const start = this.generalService.dateFormate(
      new Date(new Date().setFullYear(new Date().getFullYear() - 1))
    );
    const end = this.generalService.dateFormate(new Date());
    this.exchangeService
      .timeSeries(data.from, data.to, start, end)
      .subscribe((response) => {
        this.convertSeriesPerDayToPerMonth(response.rates);
      });
  }

  convertSeriesPerDayToPerMonth(rates: TimeSeriesRates) {
    console.log(rates);
    // Group dates by month
    const newShape: { [key: string]: {} } = {};
    for (const key in rates) {
      if (Object.prototype.hasOwnProperty.call(rates, key)) {
        const element = rates[key];
        const month = `${key.split('-')[0]}-${key.split('-')[1]}`;
        newShape[month] = element;
      }
    }
    console.log(newShape);

    // Get rate by (rate in last day of that month)

    // convert to chart shape
  }
}

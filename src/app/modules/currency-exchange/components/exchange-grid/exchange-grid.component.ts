import { ConvertData } from './../../../../shared/interfaces/convert.type';
import { Component, Input, OnInit } from '@angular/core';
import { MostPopularRate } from 'src/app/shared/interfaces/most-popular.type';
import { GeneralService } from 'src/app/shared/services/general.service';
import { ExchangeService } from '../../services/exchange.service';

@Component({
  selector: 'app-exchange-grid',
  templateUrl: './exchange-grid.component.html',
  styleUrls: ['./exchange-grid.component.scss'],
})
export class ExchangeGridComponent implements OnInit {
  baseSymbol!: string;
  amount!: number;
  @Input() set data(value: ConvertData) {
    if (value) {
      this.baseSymbol = value.symbol;
      this.amount = value.amount;
      this.mostPopularCurrenciesRate(this.baseSymbol);
    }
  }
  mostPopular!: MostPopularRate;

  constructor(
    private exchangeService: ExchangeService,
    private generalService: GeneralService
  ) {}

  ngOnInit(): void {}

  mostPopularCurrenciesRate(symbol: string) {
    this.exchangeService
      .mostCurrencies(this.generalService.dateFormate(new Date()), symbol)
      .subscribe((response) => {
        this.mostPopular = response.rates;
      });
  }
}

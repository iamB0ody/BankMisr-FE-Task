import { ConvertResponse } from './../../../shared/interfaces/convert.type';
import {
  Currencies,
  Symbols,
  SymbolsResponse,
} from './../../../shared/interfaces/symbols.type';
import { ApiService } from './../../../shared/services/api.service';
import { Injectable } from '@angular/core';
import { MostPopularRate, MostPopularResponse } from 'src/app/shared/interfaces/most-popular.type';

@Injectable({
  providedIn: 'root',
})
export class ExchangeService {
  public currenciesList!: Currencies[];
  public mostPopularCurrencies = 'USD,EUR,JPY,GBP,AUD,CAD,CHF,CNY,HKD';

  constructor(private apiService: ApiService) {
    this.getAllAvailableCurrencies();
  }

  private getAllAvailableCurrencies() {
    this.apiService
      .get<SymbolsResponse<Symbols>>('symbols')
      .subscribe((response) => {
        this.currenciesList = Object.keys(response.symbols).map((k) => ({
          symbol: k,
          name: response.symbols[k],
        }));
      });
  }

  public convert(from: string, to: string, amount: number) {
    return this.apiService.get<ConvertResponse>(
      `convert?to=${to}&from=${from}&amount=${amount}`
    );
  }

  public mostCurrencies(date: string, base: string) {
    return this.apiService.get<MostPopularResponse<MostPopularRate>>(
      `${date}?symbols=${this.mostPopularCurrencies}&base=${base}`
    );
  }
}

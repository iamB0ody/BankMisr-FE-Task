import {
  Currencies,
  Symbols,
  SymbolsResponse,
} from './../../../shared/interfaces/symbols.type';
import { ApiService } from './../../../shared/services/api.service';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ExchangeService {
  public currenciesList!: Currencies[];

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

  // dateFormate(date: Date){
  //   const [withoutT] = date.toISOString().split('T');
  //   return withoutT;
  // }
}

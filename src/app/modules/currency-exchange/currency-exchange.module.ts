import { ExchangeGridComponent } from './components/exchange-grid/exchange-grid.component';
import { ConverterPanelComponent } from './components/converter-panel/converter-panel.component';
import { CurrencyExchangeRoutingModule } from './currency-exchange-routing.module';
import { ExchangeHomeComponent } from './components/exchange-home/exchange-home.component';
import { SharedModule } from './../../shared/modules/shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExchangeDetailsComponent } from './components/exchange-details/exchange-details.component';



@NgModule({
  declarations: [ExchangeHomeComponent, ConverterPanelComponent, ExchangeGridComponent, ExchangeDetailsComponent],
  imports: [
    CommonModule,
    CurrencyExchangeRoutingModule,
    SharedModule
  ]
})
export class CurrencyExchangeModule { }

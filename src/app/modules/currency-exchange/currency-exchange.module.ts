import { ExchangeGridComponent } from './components/exchange-grid/exchange-grid.component';
import { ConverterPanelComponent } from './components/converter-panel/converter-panel.component';
import { CurrencyExchangeRoutingModule } from './currency-exchange-routing.module';
import { ExchangeHomeComponent } from './components/exchange-home/exchange-home.component';
import { SharedModule } from './../../shared/modules/shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExchangeDetailsComponent } from './components/exchange-details/exchange-details.component';
import { ChartPanelComponent } from './components/chart-panel/chart-panel.component';
import { NgChartsModule } from 'ng2-charts';



@NgModule({
  declarations: [ExchangeHomeComponent, ConverterPanelComponent, ExchangeGridComponent, ExchangeDetailsComponent, ChartPanelComponent],
  imports: [
    CommonModule,
    CurrencyExchangeRoutingModule,
    SharedModule,
    NgChartsModule
  ]
})
export class CurrencyExchangeModule { }

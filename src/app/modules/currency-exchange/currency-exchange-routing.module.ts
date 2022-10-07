import { ExchangeDetailsComponent } from './components/exchange-details/exchange-details.component';
import { ExchangeHomeComponent } from './components/exchange-home/exchange-home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
  path: '',
  component: ExchangeHomeComponent
},{
  path: 'details',
  component: ExchangeDetailsComponent
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CurrencyExchangeRoutingModule { }

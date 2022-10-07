import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'exchange',
    loadChildren: () =>
      import('./modules/currency-exchange/currency-exchange.module').then(
        (m) => m.CurrencyExchangeModule
      ),
  },
  {
    path: '',
    redirectTo: 'exchange',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'exchange',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

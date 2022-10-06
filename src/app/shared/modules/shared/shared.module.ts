import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ExchangeService } from './../../../modules/currency-exchange/services/exchange.service';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './../../components/header/header.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule, RouterModule, NgbModule],
  exports: [HeaderComponent],
  providers: [ExchangeService],
})
export class SharedModule {}

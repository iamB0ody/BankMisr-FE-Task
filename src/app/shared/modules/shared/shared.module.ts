import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ExchangeService } from './../../../modules/currency-exchange/services/exchange.service';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './../../components/header/header.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule, FormsModule, RouterModule, NgbModule, ReactiveFormsModule],
  exports: [HeaderComponent, FormsModule, ReactiveFormsModule],
  providers: [ExchangeService],
})
export class SharedModule {}

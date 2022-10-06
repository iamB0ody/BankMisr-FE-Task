import { Component, OnInit } from '@angular/core';
import { ExchangeService } from '../../services/exchange.service';

@Component({
  selector: 'app-converter-panel',
  templateUrl: './converter-panel.component.html',
  styleUrls: ['./converter-panel.component.scss'],
})
export class ConverterPanelComponent implements OnInit {
  constructor(public exchangeService: ExchangeService) {}

  ngOnInit(): void {
    this.getCurrencies()
  }

  getCurrencies() {
  }
}

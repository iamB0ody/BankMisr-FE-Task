import { ConvertData } from './../../../../shared/interfaces/convert.type';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ExchangeService } from '../../services/exchange.service';

@Component({
  selector: 'app-converter-panel',
  templateUrl: './converter-panel.component.html',
  styleUrls: ['./converter-panel.component.scss'],
})
export class ConverterPanelComponent implements OnInit {
  convertForm!: FormGroup;
  rate!: number;
  result!: number;
  @Output() convertToMostPopular: EventEmitter<ConvertData> = new EventEmitter();
  constructor(public exchangeService: ExchangeService) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.convertForm = new FormGroup({
      from: new FormControl('', Validators.required),
      to: new FormControl('', Validators.required),
      amount: new FormControl('', Validators.required),
    });
  }

  convert() {
    if (this.convertForm.valid) {
      this.exchangeService
        .convert(
          this.convertForm.value.from,
          this.convertForm.value.to,
          this.convertForm.value.amount
        )
        .subscribe((response) => {
          this.rate = response.info.rate;
          this.result = response.result;
        });
      this.convertToMostPopularCurrencies();
    }
  }

  convertToMostPopularCurrencies() {
    this.convertToMostPopular.emit({
      symbol: this.convertForm.value.from,
      amount: this.convertForm.value.amount
    });
  }
}

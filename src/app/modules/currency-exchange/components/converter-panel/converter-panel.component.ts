import { ConvertData } from './../../../../shared/interfaces/convert.type';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ExchangeService } from '../../services/exchange.service';
import { Router } from '@angular/router';
import { ConvertDetails } from 'src/app/shared/interfaces/details.type';

@Component({
  selector: 'app-converter-panel',
  templateUrl: './converter-panel.component.html',
  styleUrls: ['./converter-panel.component.scss'],
})
export class ConverterPanelComponent implements OnInit {
  convertForm!: FormGroup;
  rate!: number;
  result!: number;
  @Output() converted: EventEmitter<ConvertData> =
    new EventEmitter();
  convertDetails!: ConvertDetails;
  @Input() set details(value: ConvertDetails) {
    if (value) {
      this.convertDetails = value;
      this.convertForm.patchValue(this.convertDetails);
      this.convert();
    }
  }
  constructor(public exchangeService: ExchangeService, private router: Router) {
    this.initForm();
  }

  ngOnInit(): void {}

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
        this.sendData();
    }
  }

  sendData() {
    this.converted.emit({
      symbol: this.convertForm.value.from,
      to: this.convertForm.value.to,
      amount: this.convertForm.value.amount,
    });
  }

  navigateToDetail() {
    this.router.navigate(['/exchange/details'], {
      queryParams: {
        ...this.convertForm.value,
        title: this.exchangeService.currenciesList.find(
          (s) => s.symbol === this.convertForm.value.from
        )?.name,
      },
    });
  }
}

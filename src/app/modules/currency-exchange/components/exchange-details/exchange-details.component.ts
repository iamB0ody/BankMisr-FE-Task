import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConvertDetails } from 'src/app/shared/interfaces/details.type';

@Component({
  selector: 'app-exchange-details',
  templateUrl: './exchange-details.component.html',
  styleUrls: ['./exchange-details.component.scss'],
})
export class ExchangeDetailsComponent implements OnInit {
  data!: ConvertDetails;
  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((params: any) => {
      if(params){
        this.data = params;
      }
    });
  }
}

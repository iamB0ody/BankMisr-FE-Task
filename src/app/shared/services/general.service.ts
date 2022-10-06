import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GeneralService {
  constructor() {}

  dateFormate(date: Date) {
    const [withoutT] = date.toISOString().split('T');
    return withoutT;
  }
}

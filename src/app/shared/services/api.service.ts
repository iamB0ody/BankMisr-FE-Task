import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { delay, mergeMap, retryWhen } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  headers: HttpHeaders;

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json',
      apikey: environment.apiKey,
    });
  }

  get<T extends any>(url: string) {
    return this.http.get<T>(environment.api + url, { headers: this.headers });
  }

  // post<T extends any>(url, resource) {
  //   return this.http.post<T>(environment.api + url, JSON.stringify(resource), {
  //     headers: this.headers,
  //   });
  // }

  // put<T extends any>(url, resource) {
  //   return this.http.put<T>(environment.api + url, JSON.stringify(resource), {
  //     headers: this.headers,
  //   });
  // }
  // patch<T extends any>(url, resource) {
  //   return this.http.patch<T>(environment.api + url, JSON.stringify(resource), {
  //     headers: this.headers,
  //   });
  // }

  // delete<T extends any>(url) {
  //   return this.http.delete<T>(environment.api + url, {
  //     headers: this.headers,
  //   });
  // }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseRequest } from '../interfaces/investiment-list';

const URL = 'https://run.mocky.io/v3/ca4ec77d-b941-4477-8a7f-95d4daf7a653'

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  constructor(protected http: HttpClient) { }

  getInvestmentsList(): Observable<ResponseRequest> {
    return this.http.get<ResponseRequest>(`${URL}`);
  }
}

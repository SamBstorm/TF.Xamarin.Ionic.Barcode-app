import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators'
import { IProduct } from '../models/iproduct';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OpenFoodFactsAPIService {

  constructor(
    private _http : HttpClient
  ) { }

  public getProduct(codebar : string): Observable<IProduct>{
    return this._http.get<any>(`${environment.apiUrl}${codebar}.json`).pipe(
      map(result => result.product)
    )
  }
}

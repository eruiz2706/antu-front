import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  private baseUrl = '';

  constructor(
    private http: HttpClient
  ) {
    this.baseUrl = environment.API_URL;
  }

  /*se obtiene todos el listado de todos los paises */
  public getAll(): Observable<any> {
    const url = `${this.baseUrl}/countries`;
    return this.http.get(url);
  }

  /*se obtiene la informacion detallada de un pais, buscandolo por codigo */
  public getByCode(code): Observable<any> {
    const url = `${this.baseUrl}/countries/${code}/detail`;
    return this.http.get(url);
  }
}

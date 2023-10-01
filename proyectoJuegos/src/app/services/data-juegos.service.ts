import { Injectable } from '@angular/core';
import { HttpClient, HttpParams   } from '@angular/common/http';
import { Observable } from 'rxjs';
import { juego } from '../model/juego';


@Injectable({
  providedIn: 'root'
})
export class DataJuegosService {

  constructor(private http: HttpClient) { }

  public traerJuegos(pagina: number): Observable<juego> {
    const url = 'https://api.rawg.io/api/games';

    const params = new HttpParams()
    .set('key', "0458a2732a354311a253ce454c1691db")
    .set('page_size', 40)
    .set('page', pagina)

    return this.http.get<juego>(url, {'params': params});
  }

  public traerJuegosTop10(): Observable<juego> {
    const url = 'https://api.rawg.io/api/games';

    const params = new HttpParams()
    .set('key', "0458a2732a354311a253ce454c1691db")
    .set('page_size', 10)
    .set('ordering', "-rating")

    return this.http.get<juego>(url, {'params': params});
  }

  public traerJuegosPlataforma(plataforma: string, pagina: number): Observable<juego> {
    const url = 'https://api.rawg.io/api/games';

    const params = new HttpParams()
    .set('key', "0458a2732a354311a253ce454c1691db")
    .set('page_size', 40)
    .set('parent_platforms', plataforma)
    .set('page', pagina)

    return this.http.get<juego>(url, {'params': params});
  }

  public traerDescripcion(id: number): Observable<any> {
    const url = 'https://api.rawg.io/api/games/' + id;

    const params = new HttpParams()
    .set('key', "0458a2732a354311a253ce454c1691db")

    return this.http.get<any>(url, {'params': params});
  }
}

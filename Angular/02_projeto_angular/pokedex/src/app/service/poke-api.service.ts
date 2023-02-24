import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokeApiService {

  private url: string = 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=50'

  constructor(
    private http: HttpClient
  ) {
    this.apiListAllPokemons();
  }

  apiListAllPokemons(): Observable<any>{
    return this.http.get<any>(this.url).pipe(
      tap(res => res),
      tap(res => {
        res.results.map((resPokemons: any) => {

          this.ApiGetPokemons(resPokemons.url).subscribe(
            res => resPokemons.status = res
            );
        })
      })
    )
  }

  getNextPokemons(url:string): Observable<any>{
    return this.http.get<any>(url).pipe(
      tap(res => res),
      tap(res => {
        res.results.map((resPokemons: any) => {

          this.ApiGetPokemons(resPokemons.url).subscribe(
            res => resPokemons.status = res
            );
        })
      })
    )
  }

  ApiGetPokemons(url: string): Observable<any> {
    return this.http.get<any>(url).pipe(
      map(
        res => res
      )
    )
  }

}

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FoodList } from '../modules/food-list';

@Injectable({
  providedIn: 'root'
})
export class FoodListService {

  public emitEvent = new EventEmitter();

  private list: Array<string> = ["X-Bacon", "Feijão", "Ovo"];

  private url: string = "http://localhost:3000/" //list-food

  private httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  }

  constructor(private http: HttpClient) { }

  /*public foodList() {
    return this.list;
  }*/

  public foodList(): Observable<Array<FoodList>> {
    return this.http.get<Array<FoodList>>(`${this.url}list-food`).pipe(res => res, error => error);
  }

  /*foodListAdd(value: string) {
    this.foodListAlert(value);
    return this.list.push();
  }*/

  foodListAdd(value: string): Observable<FoodList> {
    return this.http.post<FoodList>(`${this.url}list-food`, { name: value }).pipe(
      res => res,
      error => error
    );
  }

  foodListEdit(value: string, id: number): Observable<FoodList> {
    return this.http.put<FoodList>(`${this.url}list-food/${id}`, { name: value }).pipe(
      res => res,
      error => error
    );
  }

  foodListDelete(id: number): Observable<FoodList> {
    return this.http.delete<FoodList>(`${this.url}list-food/${id}`).pipe(
      res => res,
      error => error
    )
  }

  public foodListAlert(value: FoodList) {
    return this.emitEvent.emit(value);
  }
}

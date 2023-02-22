import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, map, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url: string = 'http://localhost:3000';

  constructor(
    private httpClient: HttpClient,
    private router: Router
  ) { }

  sign(payload: {email: string, password: string}): Observable<any> {
    return this.httpClient.post(`${this.url}/sign`, payload).pipe(
      map((data: any) => {
        localStorage.removeItem('access_token');
        localStorage.setItem('access_token', JSON.stringify(data.token));
        return this.router.navigate(['admin']);
      }),
      catchError((error) => {
        return throwError(() => {
          if (error.error.message) {
            return error.error.message;
          }

          return "Não foi possível validar seus dados!"
        });
      })
    )
  }

  logout() {
    localStorage.removeItem('access_token');
    this.router.navigate(['']);
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private api = 'https://jsonplaceholder.typicode.com/users';

  constructor(private _http: HttpClient) {}

  getUsers() {
  return this._http.get<any[]>(this.api).pipe(
    map(users => users.map(u => ({
      ...u,
      status: Math.random() > 0.5 ? 'Active' : 'Inactive'
    }))),
    catchError(err => {
      console.error('API Error:', err);
      return of([]); 
    })
  );
}
}

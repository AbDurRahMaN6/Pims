import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserDetails } from '../models/user_details.model';

const baseUrl = 'http://localhost:8080/api/'

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class UsersDetailsService {

  constructor(private http: HttpClient) { }

  createUser(user: UserDetails): Observable<UserDetails> {
    return this.http.post(baseUrl, user);
  }

  getAllUsers(): Observable<UserDetails[]> {
    return this.http.get<UserDetails[]>(baseUrl + `users`);
  }

  getUsersDetails(id: any): Observable<UserDetails> {
    return this.http.get<UserDetails>(`${baseUrl + `/users`}/${id}`);
  }

  updateUsers(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  deleteUsers(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }
}

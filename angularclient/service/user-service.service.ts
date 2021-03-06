import { Injectable } from '@angular/core';
// @ts-ignore
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { User } from '../model/user';
// @ts-ignore
import { Observable } from 'rxjs/Observable';

// @ts-ignore
@Injectable()

export class UserServiceService {
  private usersUrl: string;

  constructor(private http: HttpClient) {
    this.usersUrl = 'http://localhost:8080/users';
  }
  public findAll(): Observable<User[]>{
    return this.http.get<User[]>(this.usersUrl);
  }
  public save(user: User){
    return this.http.post<User>(this.usersUrl, user);
  }
}










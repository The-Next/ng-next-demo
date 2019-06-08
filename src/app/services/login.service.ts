import { Injectable } from '@angular/core';
import {HttpClient , HttpHeaders} from '@angular/common/http';
import { Observable , of } from 'rxjs';
import {MessageService} from './message.service';
import {catchError , map , tap} from 'rxjs/operators';
import {Employ} from '../bean/Employ';
import {State} from '../bean/State';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient , private messageService: MessageService) { }

  private handleError<T>(operation = 'operation', result?: T){
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

  setloglocal(name: string) {
    localStorage.setItem('name', name);
  }

  getloglocal() {
    return localStorage.getItem('name');
  }

  removeloglocal() {
    localStorage.removeItem('name');
  }

  returnlog() {
    let name: string = localStorage.getItem('name');
    if (name === undefined || name === null || name === null) {
      window.location.href = 'login';
    }
  }

  logIn(employ: Employ): Observable<any> {
    return this.http.post<any>('http://47.103.4.115:8080/employ/verify', employ, httpOptions)
      .pipe(
        catchError(this.handleError('login', employ))
      );
  }

  // 用户注册
  logOn(employ: Employ): Observable<any> {
    return this.http.post<any>('http://47.103.4.115:8080/employ/logon', employ, httpOptions)
      .pipe(
        catchError(this.handleError('logon', employ))
      );
  }
}

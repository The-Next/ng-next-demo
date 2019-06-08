import { Injectable } from '@angular/core';
import {MessageService} from './message.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {Owner} from '../bean/Owner';
import {catchError, tap} from 'rxjs/operators';
import {Vets} from '../bean/Vets';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class OwnerService {
  constructor(private http: HttpClient , private messageService: MessageService) { }
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
  getOwnerList(): Observable<Owner[]> {
    return this.http.get<Owner[]>('http://47.103.4.115:8080/owner/getlist').pipe(
      tap(_ => this.handleError<Vets[]>('getownerlist', []))
    );
  }

  getOwnerById(id: number): Observable<Owner> {
    return this.http.get<Owner>(`http://47.103.4.115:8080/owner/getbyid/${id}`).pipe(
      tap(_ => this.handleError<Owner>('searchHeroes')),
    );
  }
  updataOwner(owner: Owner): Observable<any> {
    return this.http.patch(`http://47.103.4.115:8080/owner/updata/`, owner, httpOptions).pipe(
      catchError(this.handleError<any>('updataowner', owner))
    );
  }
  addOwner(owner: Owner): Observable<any> {
    return this.http.post(`http://47.103.4.115:8080/owner/add/`, owner, httpOptions).pipe(
      catchError(this.handleError<any>('addowner', owner))
    );
  }
}

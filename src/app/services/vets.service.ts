import { Injectable } from '@angular/core';
import {HttpClient , HttpHeaders} from '@angular/common/http';
import { Observable , of } from 'rxjs';
import {MessageService} from './message.service';
import {catchError , map , tap} from 'rxjs/operators';
import {State} from '../bean/State';
import {Vets} from '../bean/Vets';
import {SPSet} from '../bean/SPSet';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class VetsService {

  constructor(private http: HttpClient , private messageService: MessageService) {
  }
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

  getVets(): Observable<Vets[]> {
    return this.http.get<Vets[]>('http://47.103.4.115:8080/vetsp/getvetslist').pipe(
      tap(_ => this.handleError<Vets[]>('getvetslist', []))
    );
  }

  addVets(spvet: SPSet): Observable<any> {
    return this.http.post<any>('http://47.103.4.115:8080/vetsp/insert', spvet, httpOptions).pipe(
      catchError(this.handleError('spvet', spvet))
    );
  }
}

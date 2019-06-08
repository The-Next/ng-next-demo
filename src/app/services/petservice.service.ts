import { Injectable } from '@angular/core';
import {MessageService} from './message.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {Pet} from '../bean/Pet';
import {catchError, tap} from 'rxjs/operators';
import {Owner} from '../bean/Owner';
import {Type} from '../bean/Type';
import {Visits} from '../bean/Visits';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class PetserviceService {

  constructor(private http: HttpClient , private messageService: MessageService) { }
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
  getPetListByOwner(id: number): Observable<Pet[]> {
    return this.http.get<Pet[]>(`http://47.103.4.115:8080/pet/getbyowner/${id}`).pipe(
      tap(_ => this.handleError<Pet[]>('getbyowner')),
    );
  }
  getPetById(id: number): Observable<Pet> {
    return this.http.get<Pet>(`http://47.103.4.115:8080/pet/get/${id}`).pipe(
      tap(_ => this.handleError<Pet>('get')),
    );
  }
  getPetlist(): Observable<Pet[]> {
    return this.http.get<Pet[]>(`http://47.103.4.115:8080/pet/getlist/`).pipe(
      tap(_ => this.handleError<Pet[]>('getpetlist')),
    );
  }
  updatapet(pet: Pet): Observable<any> {
    return this.http.patch(`http://47.103.4.115:8080/pet/updata/`, pet, httpOptions).pipe(
      catchError(this.handleError<any>('petupdata', pet)),
    );
  }
  addpet(pet: Pet): Observable<any> {
    return this.http.post<any>(`http://47.103.4.115:8080/pet/add`, pet, httpOptions).pipe(
      catchError(this.handleError('pet', pet))
    );
  }
  getType(): Observable<Type[]> {
    return this.http.get<Type[]>(`http://47.103.4.115:8080/type`).pipe(
      tap(_ => this.handleError<Type[]>('type')),
    );
  }
  getPetByType(id: number): Observable<Pet[]> {
    return this.http.get<Pet[]>(`http://47.103.4.115:8080/pet/getbytype/${id}`).pipe(
      tap(_ => this.handleError<Pet[]>('getpetlist')),
    );
  }
  getPetsVisit(id: number): Observable<Visits[]> {
    return this.http.get<Visits[]>(`http://47.103.4.115:8080/visits/getlistbypet/${id}`).pipe(
      tap(_ => this.handleError<Visits[]>('getlistbypet')),
    );
  }
  addvisites(visites: Visits): Observable<any> {
    return this.http.post<any>(`http://47.103.4.115:8080/visits/add`, visites, httpOptions).pipe(
      catchError(this.handleError('visites', visites))
    );
  }
}

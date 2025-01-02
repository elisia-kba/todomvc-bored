// filepath: /c:/Users/tampr/Documents/M1/WE/angular/src/app/services/bored.service.ts
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Activity } from '../activity.model';

@Injectable({
  providedIn: 'root',
})
export class BoredService {
  private apiUrl = '/api/random'; 

  constructor(private http: HttpClient) {}


  getActivity(): Observable<Activity> {
    return this.http.get<Activity>(this.apiUrl).pipe(
      catchError((error) => {
        console.error('Erreur lors de la récupération de l’activité :', error);
        return throwError(() => new Error('Erreur API'));
      })
    );
  }
}
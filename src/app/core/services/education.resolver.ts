import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { ApiService } from './api.service';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import {Education, EducationResolved} from '../models/Education';

@Injectable()
export class EducationResolver implements Resolve< EducationResolved > {

  constructor(private apiService: ApiService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable< EducationResolved > {
    console.log('Resolve Service Education');

    return this.apiService.getStars()
      .pipe(
        map( product => ({ product, error: null })),
        tap( product => {
          console.log(product);
        }),
        catchError(error => {
          const message = `Retrieval error: ${error}`;
          console.error(message);
          return of({ product: null, error: message });
        })
      );
  }
}

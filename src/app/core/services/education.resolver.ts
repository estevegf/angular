import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { ApiService } from './api.service';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { EducationResolved } from '../models/Education';

@Injectable()
export class EducationResolver implements Resolve< EducationResolved > {

  constructor(private apiService: ApiService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable< EducationResolved > {
    return this.apiService.getEducation()
      .pipe(
        map( product => ({ product, error: null })),
        catchError(error => {
          const message = `Retrieval error: ${error}`;
          return of({ product: null, error: message });
        })
      );
  }
}

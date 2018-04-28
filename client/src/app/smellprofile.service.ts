import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Smellprofile } from './smellprofile';
import { SMELLPROFILES } from './mock-data';

@Injectable()
export class SmellprofileService {

  constructor() { }

  // List all smells
  listSmells(): Observable<Smellprofile[]> {
    // Return observable to get data asynchronously.
    return of(SMELLPROFILES);
  }
}

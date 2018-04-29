import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Smellprofile } from './smellprofile';
import { SMELLPROFILES } from './mock-data';
import { environment } from '../environments/environment';

@Injectable()
export class SmellprofileService {
  private apiurl = environment.apiurl;

  constructor(private http:HttpClient) { }

  // List all smells
  listSmells() {
    return this.http.get(this.apiurl);
  }

  // Get a single smell
  getSmell(id:string) {
    return this.http.get(this.apiurl + id);
  }
}

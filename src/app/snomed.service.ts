import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { of } from 'rxjs';


@Injectable()
export class SnomedService {

  constructor(private http: HttpClient) { }

  search(term: string, ecl: string): any {

    return of('248281009 |oklart sjukdomstillstånd|');
  }

}

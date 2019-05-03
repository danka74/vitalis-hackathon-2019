import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable()
export class SnomedService {

  readonly baseUrl: string = "http://localhost:4200/fhir/ValueSet/$expand?url=http://snomed.info/sct?fhir_vs=ecl/";

  constructor(private http: HttpClient) { }

  search(term: string, ecl: string): any {

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Accept-Language': 'sv'
      })
    };
    console.log(ecl);
    if (term && term.length > 0) {
      return this.http.get(this.baseUrl +
         (ecl !== null ? encodeURIComponent(ecl) : '<<404684003') + // default to Clinical finding
         '&filter=' +
         encodeURIComponent(term));
    } else {
        return [];
    }
  }

}

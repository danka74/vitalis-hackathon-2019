import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable()
export class SnomedService {

  readonly baseUrl: string = "http://localhost:8080/fhir/ValueSet/$expand?url=http://snomed.info/sct?fhir_vs=ecl/";

  constructor(private http: HttpClient) { }

  search(term: string, ecl: string): any {

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Accept': 'en'
      })
    };

    if (term && term.length > 0) {
      return this.http.get(this.baseUrl +
         encodeURIComponent(ecl) +
         '&filter=' +
         encodeURIComponent(term));
    } else {
        return [];
    }
  }

}

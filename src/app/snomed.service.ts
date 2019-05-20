import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable()
export class SnomedService {

  readonly baseUrl: string = "http://localhost:4200/fhir/ValueSet/$expand?url=http://snomed.info/sct/45991000052106?fhir_vs=ecl/";

  constructor(private http: HttpClient) { }

  search(term: string, ecl: string): any {

    console.log(ecl);

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      })
    };
    if (term && term.length > 0) {
      return this.http.get(this.baseUrl +
         ((ecl != null && ecl !== '') ? encodeURIComponent(ecl) : '<<404684003') + // default to Clinical finding
         '&displayLanguage=sv&count=15' +
         '&filter=' +
         encodeURIComponent(term));
    } else {
        return [];
    }
  }

}

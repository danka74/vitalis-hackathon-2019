import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable()
export class SnomedService {

  constructor(private http: HttpClient) { }

  search(term: string, refset?: string): any {

    if (term && term.length > 0) {
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        })
       };
      return this.http.get('http://localhost:8080/MAIN%2FSNOMEDCT-SE/concepts?activeFilter=true&offset=0&limit=50&term='
        + encodeURIComponent(term), httpOptions);
    } else {
        return [];
    }
  }

}

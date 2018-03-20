import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class SnomedService {

  constructor(private http: HttpClient) { }

  search(term: string, refset?: string): any {

    if (term && term.length > 0) {
      return this.http.get('http://127.0.0.1:3000/snomed/se-edition/v20171130/descriptions?query=' + encodeURIComponent(term)
        + '&groupByConcept=1&returnLimit=10' + (refset ? '&refsetFilter=' + refset : ''));
    } else {
        return [];
    }
  }

}

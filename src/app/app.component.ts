import { Component, OnInit } from '@angular/core';
import { SnomedService } from './snomed.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { map, filter, debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { MatAutocompleteSelectedEvent, MatChipInputEvent } from '@angular/material';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  result = [];
  snomedForm: FormGroup = new FormGroup({
    search: new FormControl()
  });
  selected = [];

  constructor(private snomedService: SnomedService) {
  }

  ngOnInit() {
    const typeahead = this.snomedForm.get('search').valueChanges
      .pipe(
        filter(text => text.length > 2),
        debounceTime(10),
        distinctUntilChanged(),
        switchMap(text => this.snomedService.search(text, '46051000052106'))
      );
    typeahead.subscribe(data => {
      // console.log(data);
      this.result = [];
      data['matches'].forEach(element => this.result.push(element['conceptId'] + ' | ' + element['term'] + ' |'));
      });
  }

  select(event: MatAutocompleteSelectedEvent): void {
    const option = event.option;

    if ((option.value || '').trim()) {
      this.selected.push(option.value.trim());
    }

    console.log(this.snomedForm.get('search'));
  }

  remove(concept: any): void {
    const index = this.selected.indexOf(concept);

    if (index >= 0) {
      this.selected.splice(index, 1);
    }
  }

  clear(event: MatChipInputEvent): void {
    console.log(event);
    const input = event.input;
    if (input) {
      input.value = '';
    }
  }
}

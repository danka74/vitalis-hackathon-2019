import { Component, OnInit } from '@angular/core';
import { SnomedService } from '../snomed.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { map, filter, debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { MatAutocompleteSelectedEvent, MatChipInputEvent } from '@angular/material';

@Component({
  selector: 'app-snomed-autocomplete',
  templateUrl: './snomed-autocomplete.component.html',
  styleUrls: ['./snomed-autocomplete.component.css']
})
export class SnomedAutocompleteComponent implements OnInit {
  result = [];
  snomedForm: FormGroup = new FormGroup({
    search: new FormControl(),
    // limitToECL: new FormControl(),
    ecl: new FormControl()
  });
  selected = [];
  typeaheadSubscription: Subscription = null;
  // limitToRefset = false;

  constructor(private snomedService: SnomedService) {

  }

  ngOnInit() {
    const typeahead = this.snomedForm.get('search').valueChanges
      .pipe(
        filter(text => text.length > 2),
        debounceTime(10),
        distinctUntilChanged(),
        switchMap(text => this.snomedService.search(text, this.snomedForm.get('ecl').value))
      );
    this.typeaheadSubscription = typeahead.subscribe(data => {
      // console.log(data);
      this.result = [];
      console.log(data);
      if(data['expansion']['contains']) {
        data['expansion']['contains'].forEach(element => this.result.push(element['code'] + ' | ' + element['display'] + ' |'));
      }
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

  onLimit() {
    console.log('onLimit()');
    if (this.typeaheadSubscription != null) {
      this.typeaheadSubscription.unsubscribe();
      this.ngOnInit();
    }
  }

}

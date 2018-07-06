import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SnomedAutocompleteComponent } from './snomed-autocomplete.component';

describe('SnomedAutocompleteComponent', () => {
  let component: SnomedAutocompleteComponent;
  let fixture: ComponentFixture<SnomedAutocompleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SnomedAutocompleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SnomedAutocompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

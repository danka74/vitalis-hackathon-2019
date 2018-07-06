import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { SnomedService } from './snomed.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule, MatFormFieldModule, MatAutocompleteModule, MatOptionModule, MatCheckboxModule } from '@angular/material';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';

import { AppComponent } from './app.component';
import { SnomedAutocompleteComponent } from './snomed-autocomplete/snomed-autocomplete.component';


@NgModule({
  declarations: [
    AppComponent,
    SnomedAutocompleteComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule, ReactiveFormsModule,
    BrowserAnimationsModule,
    MatInputModule, MatFormFieldModule, MatAutocompleteModule, MatOptionModule, MatChipsModule, MatIconModule, MatCheckboxModule
  ],
  providers: [
    SnomedService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

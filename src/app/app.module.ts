import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { SnomedService } from './snomed.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule, MatFormFieldModule, MatAutocompleteModule, MatOptionModule, MatCheckboxModule,
  MatToolbarModule, MatButtonModule, MatSidenavModule, MatListModule } from '@angular/material';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';

import { AppComponent } from './app.component';
import { SnomedAutocompleteComponent } from './snomed-autocomplete/snomed-autocomplete.component';
import { MyNavComponent } from './my-nav/my-nav.component';
import { LayoutModule } from '@angular/cdk/layout';


@NgModule({
  declarations: [
    AppComponent,
    SnomedAutocompleteComponent,
    MyNavComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule, ReactiveFormsModule,
    BrowserAnimationsModule,
    MatInputModule, MatFormFieldModule, MatAutocompleteModule, MatOptionModule, MatChipsModule, MatIconModule,
    MatCheckboxModule, LayoutModule, MatToolbarModule, MatButtonModule, MatSidenavModule, MatListModule
  ],
  providers: [
    SnomedService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

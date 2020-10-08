import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CountryRoutingModule } from './country-routing.module';
import { CountryComponent } from './pages/country/country.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [CountryComponent],
  imports: [
    CommonModule,
    CountryRoutingModule,
    HttpClientModule
  ]
})
export class CountryModule { }

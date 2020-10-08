import { Component, OnInit } from '@angular/core';
import { CountriesService } from 'src/app/services/countries.service';
declare const $: any;

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss']
})
export class CountryComponent implements OnInit {

  public countries: any = [];
  public country: any = {};

  constructor(
    private countriesService: CountriesService,
  ) { }

  ngOnInit(): void {
    this.getData();
  }

  reload(): void{
    this.getData();
  }

  /*se obtiene la informacion detallada de un pais */
  detail(code): void{
    this.countriesService.getByCode(code)
    .subscribe( (response) => {
      $('#myModal').modal('show');
      this.country = response['data']['country'];
    }, (error) => {
    });
  }

  /*se obtiene la informacion de todos los paises */
  getData(): void {
    this.countriesService.getAll()
    .subscribe( (response) => {
      this.countries = response['data']['countries'];;
    }, (error) => {
    });
  }

}

import { Injectable } from '@angular/core';
import {Location} from './location'

@Injectable({
  providedIn: 'root'
})
/**  This services provides the Cities and their abbreviation. Right now it is
hardcoded*/
export class CitiesService {
  cities:Location[] = [
    {name: 'Arizona', abbrev: 'AZ'},
    {name: 'California', abbrev: 'CA'},
    {name: 'Colorado', abbrev: 'CO'},
    {name: 'New York', abbrev: 'NY'},
    {name: 'Pennsylvania', abbrev: 'PA'},
  ];

  getCities():Location[]{
    return this.cities;
  }

  constructor() { }
}

import { Injectable } from '@angular/core';
import { Weather } from "./weather";
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  constructor(private http: HttpClient) { }
  getWeatherForecastFiveDays(city:string){
    return this.http.get("https://api.openweathermap.org/data/2.5/forecast?q="+ city +",us&units=imperial&mode=json&APPID=321d9ad7fdaab661125bfe1857a06a8b");
  }
}

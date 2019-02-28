import { Component, OnInit } from '@angular/core';
import { Weather } from "../weather";
import { Location } from "../location";
import { WeatherService } from '../weather.service';
import { CitiesService } from '../cities.service';
import {FormControl, FormGroup} from '@angular/forms';
import { Observable, Subject} from 'rxjs';

@Component({
  selector: 'wa-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.css']
})

/**The forecast component is the main component that displays the five day forecast*/
export class ForecastComponent implements OnInit {
  title = "This Week's Weather";
  weather_forecast: Weather [];
  weatherForecastData: Object;
  cities:Location[];
  form:FormGroup;

  constructor(private weatherService: WeatherService,
              private citiesService: CitiesService) {
  }

  getCities():void{
    this.cities = this.citiesService.getCities();
  }

  showWeatherForecastFiveDays() {
    let weatherForescastData:Weather[] = [];
    this.weatherService.getWeatherForecastFiveDays(this.form.value.city.name)
        .subscribe((data:any) =>{
          for(let i = 0, len = data.list.length; i < len; i+=8){
            let dataList:any = data.list[i];
            const weather:Weather = new Weather(
              dataList.weather[0].description,
              dataList.dt_txt,
              dataList.weather[0].icon,
              dataList.main.temp,
              dataList.main.temp_max,
              dataList.main.temp_min,
              dataList.wind.speed,
              dataList.main.humidity
            );
            //console.log(weather);
            weatherForescastData.push(weather);
          }
        });
        this.weather_forecast = weatherForescastData;
  }

  ngOnInit() {
    this.getCities();
    this.form = new FormGroup({
       city: new FormControl(this.cities[3])
    });
    this.showWeatherForecastFiveDays();
  }
}

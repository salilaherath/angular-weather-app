import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WeatherData } from '../models/weather.model';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  getWeatherData(cityName: string): Observable<WeatherData> {
   return this.http.get<WeatherData>("https://api.openweathermap.org/data/2.5/weather?q="+cityName+"&appid=95d0bc606fda4e8834ee02ef54dfedaf&units=metric")
  }
}

export interface WeatherResponse {
  weather: WeatherDetails[];
  base: string;
  main: WeatherConditions;
  visibility: number;
  wind: Wind;
  sys: Sys;
  id: number;
  name: string;
}

export interface WeatherConditions {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
  sea_level: number;
  grnd_level: number;
}

export interface Sys {
  type: number;
  id: number;
  country: string;
  sunrise: number;
  sunset: number;
}

export interface WeatherDetails {
  id: number;
  main: string;
  description: string;
  icon: string;
}

export interface Wind {
  speed: number;
  deg: number;
  gust: number;
}

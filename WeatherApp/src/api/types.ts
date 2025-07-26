export interface Coordiantes {
  lat: number;
  lon: number;
}

export interface WeatherCondition {
  id: number;
  main: string;
  descriptio: string;
  icon: string;
}
export interface WeatherData {
  coord: Coordiantes;
  weather: WeatherCondition[];
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
  };
  wind: {
    speed: number;
    deg: number;
  };
}

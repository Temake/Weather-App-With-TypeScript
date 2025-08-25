import { API_CONFIG } from "./config";
import type {
  Coordiantes,
  ForecastData,
  GeoCodeType,
  WeatherData,
} from "./types";

class WeatherConfig {
  private createUrl(endpoint: string, params : Record<string, string | number>) {
    const searchParams = new URLSearchParams({
      ...params,
      APPID: API_CONFIG.API_KEY,
     
      
    });
    return `${endpoint}?${searchParams.toString()}`;
  }

  private async fetchData<T>(url: string): Promise<T> {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`OPEN_WEATHER_API_ERROR :${response.statusText}`);
    }
    return response.json();
  }

  async get_current_weather({ lat, lon }: Coordiantes): Promise<WeatherData> {
    const url = this.createUrl(`${API_CONFIG.OPEN_WEATHER_URL}/weather`, {
      lat: lat.toString(),
      lon: lon.toString(),
      units: API_CONFIG.DEFAULT_PARAMS.units,
    });
    return this.fetchData<WeatherData>(url);
  }
  async get_forecast({ lat, lon }: Coordiantes): Promise<ForecastData> {
    const url = this.createUrl(`${API_CONFIG.OPEN_WEATHER_URL}/forecast`, {
      lat: lat.toString(),
      lon: lon.toString(),
      units: API_CONFIG.DEFAULT_PARAMS.units,
    });
    return this.fetchData<ForecastData>(url);
  }
  async reverseGeoCode({ lat, lon }: Coordiantes): Promise<GeoCodeType[]> {
    const url = this.createUrl(`${API_CONFIG.GEOCODE_URL}/reverse`, {
      lat: lat.toString(),
      lon: lon.toString(),
    });
    return this.fetchData<GeoCodeType[]>(url);
  }


    async searchLocation( query: string): Promise<GeoCodeType[]> {
    const url = this.createUrl(`${API_CONFIG.GEOCODE_URL}/direct`, {
      q: query,
      limit:"5",
    });
    return this.fetchData<GeoCodeType[]>(url);
  }


  
}


export const weatherAPI = new WeatherConfig();



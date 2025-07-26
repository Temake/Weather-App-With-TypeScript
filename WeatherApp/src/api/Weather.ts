import { API_CONFIG } from "./config";
import type { Coordiantes } from './types';

class WeatherConfig {
  private createUrl(endpoint: string, params: Record<string, string | number>) {
    const searchParams = new URLSearchParams({
      apppid: API_CONFIG.API_KEY,
      ...params,
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

  get_current_weather({lat,lon}:Coordiantes) {
    const url = this.createUrl(`${API_CONFIG.OPEN_WEATHER_URL}/weather`,{
        lat:lat.toString(),
        lon:lon.toString(),
        units:API_CONFIG.DEFAULT_PARAMS.units,
    })
    return this.fetchData
  }
  get_forecast() {}
  async reverse_geocode() {}
}

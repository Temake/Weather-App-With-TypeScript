

export const API_CONFIG = {
    OPEN_WEATHER_URL:"https://api.openweathermap.org/data/2.5",
    GEOCODE_URL:"https://api.openweathermap.org/geo/1.0",
    API_KEY: import.meta.env.VITE_WEATHER_API_KEY,
    DEFAULT_PARAMS : {
        APPID:import.meta.env.VITE_WEATHER_API_KEY,
        units:"meterics"
    }
}

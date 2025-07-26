

export const API_CONFIG = {
    OPEN_WEATHER_URL:"",
    GEOCODE_URL:"",
    API_KEY: import.meta.env.VITE_WEATHER_API_KEY,
    DEFAULT_PARAMS : {
        appid:import.meta.env.VITE_WEATHER_API_KEY,
        units:"Meterics"
    }
}
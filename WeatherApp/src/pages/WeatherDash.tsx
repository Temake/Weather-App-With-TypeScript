import { Button } from "@/components/ui/button";
import { useGeolocation } from "@/hook/useGeoLocation";
import { AlertTriangle, MapPin, RefreshCcw } from "lucide-react";
import WeatherSkeleton from "../components/loadingskeleton"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import {  useForecastQuery, useReverseGeocodeQuery, useWeatherQuery } from '@/hook/use-weather';

const WeatherDashboard = () => {
  const { coordinates, error, isLoading, getLocation } = useGeolocation();

 const locationQuery =useReverseGeocodeQuery(coordinates)
 const weatherQuery= useWeatherQuery(coordinates)
 const forecastQuery=useForecastQuery(coordinates)

 
  const handleRefresh= () => {
    getLocation()
    if (coordinates){
     locationQuery.refetch()
     weatherQuery.refetch()
     forecastQuery.refetch()
    }}
if (isLoading){
  return <WeatherSkeleton/>
}
if (error){
  return(
  <Alert variant={"destructive"}>
    <AlertTriangle className="h-4 w-4"/>
    <AlertTitle>Location Error</AlertTitle>
    <AlertDescription>
      <p>{error}</p>
      <Button onClick={handleRefresh} variant={"outline"}  className="w-fit">
        <MapPin className="mr-2 h-4 w-4"/>
        Enable Location
      </Button>
    </AlertDescription>
  </Alert>)
}
const locationName= locationQuery.data?.[0]
if (locationQuery.error || forecastQuery.error){
  return(
    <Alert variant={"destructive"}>
    <AlertTriangle className="h-4 w-4"/>
    <AlertTitle>Failed to fetch Weather Forecast.Please Try Again</AlertTitle>
    <AlertDescription>
      <p>{error}</p>
      <Button onClick={handleRefresh} variant={"outline"}  className="w-fit">
        <MapPin className="mr-2 h-4 w-4"/>
        Retry
      </Button>
    </AlertDescription>
  </Alert>

  )
}

if (!coordinates){
  return(
     
  <Alert variant={"destructive"}>
    <AlertTriangle className="h-4 w-4"/>
    <AlertTitle>Location Required </AlertTitle>
    <AlertDescription>
      <p>Please Enable Location access to see your local weather</p>
      <Button onClick={getLocation} variant={"outline"}  className="w-fit">
        <MapPin className="mr-2 h-4 w-4"/>
        Enable Location
      </Button>
    </AlertDescription>
  </Alert>
  )
}
  


  return (
    <div className="flex items-center justify-between">
      <h1 className="text-xl font-bold tracking-tight">My Location</h1>
      <Button onClick={handleRefresh} variant={"outline"} size={"icon"}>
        <RefreshCcw className="h-4 w-4" />
        
      </Button>
    </div>
  );
};

export default WeatherDashboard;

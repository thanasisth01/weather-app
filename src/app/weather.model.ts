interface OpenWeatherMapLocation {
  name: string;
  local_names: {
    [key: string]: string;
  };
  lat: string;
  lon: string;
  country: string;
  state: string;
}

export type OpenWeatherMapResult = OpenWeatherMapLocation[];
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

export interface OpenWeatherMapLocationResponse {
  lat: number;
  lon: number;
  timezone: string;
  timezone_offset: number;
  current: Current;
  minutely: Minutely;
  hourly: Hourly;
  daily: Daily[];
  alerts: Alerts;
}

export type Current = {
  dt: number;
  sunrise: number;
  sunset: number;
  temp: number;
  feels_like: number;
  pressure: number;
  humidity: number;
  dew_point: number;
  clouds: number;
  uvi: number;
  visibility: number;
  wind_speed: number;
  wind_gust: number;
  wind_deg: number;
  rain: {
    "1h": number;
  }
  snow: {
    "1h": number;
  }
  weather: {
    id: number;
    main: string;
    description: string;
    icon: string;
  }[]; 
}

type Minutely = {
  dt: number;
  precipitation: number;
}

type Hourly = {
  dt: number;
  temp: number;
  feels_like: number;
  pressure: number;
  humidity: number;
  dew_point: number;
  uvi: number;
  clouds: number;
  visibility: number;
  wind_speed: number;
  wind_gust: number;
  wind_deg: number;
  pop: number;
  rain: {
    "1h": number;
  }
  snow: {
    "1h": number;
  }
  weather: {
    id: number;
    main: string;
    description: string;
    icon: string;
  } 
}

export type Daily = {
  dt: number;
  sunrise: number;
  sunset: number;
  moonrise: number;
  moonset: number;
  moon_phase: number;
  summary: string;
  temp: {
    morn: number;
    day: number;
    eve: number;
    night: number;
    min: number;
    max: number;
  }
  feels_like: {
    morn: number;
    day: number;
    eve: number;
    night: number;
  }
  pressure: number;
  humidity: number;
  dew_point: number;
  wind_speed: number;
  wind_gust: number;
  wind_deg: number;
  clouds: number;
  uvi: number;
  pop: number;
  rain: number;
  snow: number;
  weather: {
    id: number;
    main: string;
    description: string;
    icon: string;
  }[]
}

type Alerts = {
  event: string;
  start: number;
  end: number;
  description: string;
  tags: any[];
}

const emptyCurrent = {
  dt: 0,
  sunrise: 0,
  sunset: 0,
  temp: 0,
  feels_like: 0,
  pressure: 0,
  humidity: 0,
  dew_point: 0,
  clouds: 0,
  uvi: 0,
  visibility: 0,
  wind_speed: 0,
  wind_gust: 0,
  wind_deg: 0,
  rain: {
    "1h": 0,
  },
  snow: {
    "1h": 0,
  },
  weather: [{
    id: 0,
    main: "",
    description: "",
    icon: "",
  }]
}

const emptyMinutely = {
  dt: 0,
  precipitation: 0
}

const emptyHourly = {
  dt: 0,
  temp: 0,
  feels_like: 0,
  pressure: 0,
  humidity: 0,
  dew_point: 0,
  uvi: 0,
  clouds: 0,
  visibility: 0,
  wind_speed: 0,
  wind_gust: 0,
  wind_deg: 0,
  pop: 0,
  rain: {
    "1h": 0,
  },
  snow: {
    "1h": 0,
  },
  weather: {
    id: 0,
    main: "",
    description: "",
    icon: "",
  } 
}

const emptyDaily = {
  dt: 0,
  sunrise: 0,
  sunset: 0,
  moonrise: 0,
  moonset: 0,
  moon_phase: 0,
  summary: "",
  temp: {
    morn: 0,
    day: 0,
    eve: 0,
    night: 0,
    min: 0,
    max: 0,
  },
  feels_like: {
    morn: 0,
    day: 0,
    eve: 0,
    night: 0,
  },
  pressure: 0,
  humidity: 0,
  dew_point: 0,
  wind_speed: 0,
  wind_gust: 0,
  wind_deg: 0,
  clouds: 0,
  uvi: 0,
  pop: 0,
  rain: 0,
  snow: 0,
  weather: [{
    id: 0,
    main: "",
    description: "",
    icon: "",
  }]
}

const emptyAlerts = {
  event: "",
  start: 0,
  end: 0,
  description: "",
  tags: []
}

export const emptyResp: OpenWeatherMapLocationResponse = {
  lat: 0,
  lon: 0,
  timezone: "",
  timezone_offset: 0,
  current: emptyCurrent,
  minutely: emptyMinutely,
  hourly: emptyHourly,
  daily: [emptyDaily],
  alerts: emptyAlerts,
}
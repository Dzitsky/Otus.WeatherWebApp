export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The multiplier path scalar represents a valid GraphQL multiplier path string. */
  MultiplierPath: any;
  /** The `DateTime` scalar represents an ISO-8601 compliant date time type. */
  DateTime: any;
};


export type WeatherQueries = {
  __typename?: 'WeatherQueries';
  weatherForecasts: Array<WeatherForecast>;
};

export type WeatherForecast = {
  __typename?: 'WeatherForecast';
  date: Scalars['DateTime'];
  summary: Scalars['String'];
  temperatureC: Scalars['Int'];
  temperatureF: Scalars['Int'];
};


export type GetWeatherForecastsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetWeatherForecastsQuery = (
  { __typename?: 'WeatherQueries' }
  & { weatherForecasts: Array<(
    { __typename?: 'WeatherForecast' }
    & Pick<WeatherForecast, 'date' | 'summary' | 'temperatureC' | 'temperatureF'>
  )> }
);

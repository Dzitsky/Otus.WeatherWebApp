import { gql, useQuery } from "@apollo/client";
import React from "react";
import { GetWeatherForecastsQuery } from "../generated/graphql";

const WEATHER_FORECASTS = gql`
  query GetWeatherForecasts {
    weatherForecasts {
      date
      summary
      temperatureC
      temperatureF
    }
  }
`;

export const FetchData = () => {
  const { loading, error, data } = useQuery<GetWeatherForecastsQuery>(WEATHER_FORECASTS);

  if (loading) {
    return <p><em>Loading...</em></p>;
  }

  if (error || !data) {
    return <p><em>Error :(</em></p>;
  }

  return (
    <div>
      <h1 id="tabelLabel">Weather forecast</h1>
      <p>This component demonstrates fetching data from the server.</p>

      <table className='table table-striped' aria-labelledby="tabelLabel">
        <thead>
        <tr>
          <th>Date</th>
          <th>Temp. (C)</th>
          <th>Temp. (F)</th>
          <th>Summary</th>
        </tr>
        </thead>
        <tbody>
        {data.weatherForecasts.map(forecast =>
          <tr key={forecast.date}>
            <td>{forecast.date}</td>
            <td>{forecast.temperatureC}</td>
            <td>{forecast.temperatureF}</td>
            <td>{forecast.summary}</td>
          </tr>,
        )}
        </tbody>
      </table>
    </div>
  );
};


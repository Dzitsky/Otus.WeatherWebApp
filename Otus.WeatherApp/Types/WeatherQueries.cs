using System.Collections.Generic;
using HotChocolate;
using Otus.WeatherApp.Domain;

namespace Otus.WeatherApp.Types
{
  public class WeatherQueries
  {
    public IEnumerable<WeatherForecast> GetWeatherForecasts([Service] IWeatherService weatherService)
    {
      return weatherService.GetWeather();
    }
  }
}
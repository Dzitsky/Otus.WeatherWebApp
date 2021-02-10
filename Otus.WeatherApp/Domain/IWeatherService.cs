using System.Collections.Generic;

namespace Otus.WeatherApp.Domain
{
  public interface IWeatherService
  {
    IEnumerable<WeatherForecast> GetWeatherForecast();
  }
}
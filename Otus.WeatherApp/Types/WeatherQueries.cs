using System.Linq;
using HotChocolate;
using HotChocolate.Resolvers;
using HotChocolate.Types;
using HotChocolate.Types.Relay;
using Otus.WeatherApp.Domain;

namespace Otus.WeatherApp.Types
{
  public class WeatherQueries
  {
    [UsePaging]
    [UseFiltering]
    [UseSorting]
    public IQueryable<WeatherForecast> GetWeatherForecast([Service] IWeatherService weatherService,
      IResolverContext context)
    {
      return weatherService.GetWeatherForecast().AsQueryable();
    }
  }
}
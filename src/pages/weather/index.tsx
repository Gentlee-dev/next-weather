import { Weather, WeatherAdapter } from "@/api/weather";
import { WeatherMain } from "@/domains/weather";
import { mergeForecastWithShortTermForecast } from "@/domains/weather/utils";
import { GetStaticProps } from "next";
import { ComponentProps, FC } from "react";

interface Props extends ComponentProps<typeof WeatherMain> {}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const weatherInstance = new Weather(60, 126);
  const weather = new WeatherAdapter(weatherInstance);
  const promises = [
    weather.live(),
    weather.forecast(),
    weather.todayTemperature(),
    weather.shortTermForecast(),
  ] as const;
  const [live, forecast, todayTemperature, shortTermForecast] =
    await Promise.all(promises);

  const mergedForecast = mergeForecastWithShortTermForecast(
    forecast,
    shortTermForecast
  );

  return {
    props: {
      live,
      todayTemperature,
      mergedForecast,
    },
  };
};

const WeatherPage: FC<Props> = (props) => {
  return <WeatherMain {...props} />;
};

export default WeatherPage;

import { WeatherAdapterInterface } from "@/api/weather/types";
import { FC } from "react";
import { mergeForecastWithShortTermForecast } from "./utils";

interface Props {
  live: Awaited<ReturnType<WeatherAdapterInterface["live"]>>;
  todayTemperature: Awaited<
    ReturnType<WeatherAdapterInterface["todayTemperature"]>
  >;
  mergedForecast: ReturnType<typeof mergeForecastWithShortTermForecast>;
}

const WeatherMain: FC<Props> = (props) => {
  const { live, todayTemperature, mergedForecast } = props;

  console.log(live);
  console.log(todayTemperature);
  console.log(mergedForecast);
  return (
    <main>
      <h1>Weather</h1>
    </main>
  );
};

export { WeatherMain };

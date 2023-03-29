import { defineStore } from "pinia";
import { get5DaysForecast } from "~~/helpers/api-helper";

export const useForecastStore = defineStore("forecast", () => {
  const weeklyForecast = ref([]);

  const fetchWeeklyForecast = async (lat, lon) => {
    const resp = await get5DaysForecast(lat, lon);

    const list = resp.data.list;

    const dailyForecasts = [];

    list.forEach((item) => {
      let necessaryData = {
        date: item.dt_txt,
        temp: item.main.temp,
        temp_max: item.main.temp_max,
        temp_min: item.main.temp_min,
        humidity: item.main.humidity,
        feels_like: item.main.feels_like,
        pressure: item.main.pressure,
        description: item.weather[0].description,
        icon: item.weather[0].icon,
        main: item.weather[0].main,
        wind_deg: item.wind.deg,
        wind_speed: item.wind.speed,
      };

      if (dailyForecasts.some((df) => df.date == item.dt_txt.split(" ")[0])) {
        let current = dailyForecasts.find(
          (df) => df.date == item.dt_txt.split(" ")[0]
        );
        current.list.push(necessaryData);
        current.temp_max =
          current.temp_max >= necessaryData.temp_max
            ? current.temp_max
            : necessaryData.temp_max;
        current.temp_min =
          current.temp_min <= necessaryData.temp_min
            ? current.temp_min
            : necessaryData.temp_min;
      } else {
        let obj = {
          date: item.dt_txt.split(" ")[0],
          list: [necessaryData],
          temp_max: necessaryData.temp_max,
          temp_min: necessaryData.temp_min,
          icon: necessaryData.icon.slice(0, -1),
        };
        dailyForecasts.push(obj);
      }
    });

    weeklyForecast.value = dailyForecasts
  }

  return { weeklyForecast, fetchWeeklyForecast };
});

import {defineStore} from 'pinia'
import { get5DaysForecast } from '~~/helpers/api-helper'

export const useForecastStore = defineStore('forecast', () => {
    const weeklyForecast = reactive(null)

    const fetchWeeklyForecast = async (lat,lon) => {
        const resp = await get5DaysForecast(lat,lon)
        console.log(resp)
    }
    return {weeklyForecast, fetchWeeklyForecast}
})
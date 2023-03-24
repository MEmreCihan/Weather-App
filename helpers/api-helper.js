import axios from 'axios'

const apiKey = "ea137e6efba5133c3b55ef0f9f04b4a2"

const instance = axios.create({
    baseURL: 'https://api.openweathermap.org',
})

export const get5DaysForecast = (lat, lon) => {
    let url = `/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}`
    return instance.get(url)
}

export const getCurrentForecast = (lat, lon) => {
    let url = `/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`
    return instance.get(url)
}
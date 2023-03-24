const images = [
    "/weather/cloudy.gif",
    "/weather/foggy.gif",
    "/weather/night-snowy2.gif",
    "/weather/rainy.gif",
    "/weather/sunny.gif",
    "/weather/windy.gif",
    "/weather/clear.gif"
]

export const getWeatherBg = (forecast) => {
    switch (forecast.toLowerCase()) {
        case "clear": return images[6]
        default: return images[0]
    }
} 
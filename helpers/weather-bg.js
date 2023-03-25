const images = [
    "/weather/cloudy.gif",
    "/weather/foggy.gif",
    "/weather/night-snowy2.gif",
    "/weather/rainy.gif",
    "/weather/sunny.gif",
    "/weather/windy.gif",
    "/weather/clear.gif",
    "/weather/partly-sunny.gif",
    "/weather/snowy.gif",
]

export const getWeatherBg = (forecast) => {
    switch (forecast.toLowerCase()) {
        case "cloudy": return images[0]
        case "foggy": return images[1]
        case "night-snowy2": return images[2]
        case "rainy": return images[3]
        case "sunny": return images[4]
        case "windy": return images[5]
        case "clear": return images[6]
        case "snowy": return images[8]
        default: return images[7]
    }
} 
const images = [
    "/weather/cloudy.gif",
    "/weather/foggy.gif",
    "/weather/rainy.gif",
    "/weather/sunny.gif",
    "/weather/windy.gif",
    "/weather/clear.gif",
    "/weather/partly-sunny.gif",
    "/weather/snowy.gif",
]

export const getWeatherBg = (forecast) => {
    switch (forecast.toLowerCase()) {
        case "clouds": return images[0]
        case "foggy": return images[1]
        case "rain": return images[2]
        case "sunny": return images[3]
        case "windy": return images[4]
        case "clear": return images[5]
        case "snow": return images[7]
        default: return images[6]
    }
} 
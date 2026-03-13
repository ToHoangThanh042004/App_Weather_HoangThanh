import axios from 'axios';

const API_KEY = "9103d3cc19a7eb76d186699c2e2693d7";

export const getWeather = async (city) => {
    const res = await axios.get("https://api.openweathermap.org/data/2.5/weather",
        {
            params:{
                q : city,
                appid : API_KEY,
                units : "metric"
            }
        }
    );
    return res.data;
}
export const getForecast  = async (city) => {
    const res = await axios.get("https://api.openweathermap.org/data/2.5/forecast",
        {
            params:{
                q : city,
                appid : API_KEY,
                units : "metric"
            }
        }
    );
    return res.data;
}
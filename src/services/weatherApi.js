import axios from 'axios';

const API_KEY = "123";

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
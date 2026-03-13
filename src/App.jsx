import { useState } from "react"
import { getWeather , getForecast } from "./services/weatherApi";
import "./App.css";
function App(){

  const [city , setCity] = useState("");
  const [weather ,setWeather] = useState(null);
  const [forecast , setForescast] = useState(null)

  const handleSearch = async () => {
    const data = await getWeather(city);
    const forecastData = await getForecast(city);
    setWeather(data)
    setForescast(forecastData)
  }

  return (
    <div className="app-shell">
      <div className="bg-orb orb-a" aria-hidden="true" />
      <div className="bg-orb orb-b" aria-hidden="true" />
      <main className="weather-panel">
        <h1 className="app-title">Weather App</h1>
        <p className="app-subtitle">Tra cuu nhanh thoi tiet hien tai va du bao 5 moc gan nhat</p>

        <div className="search-row">
          <input
            className="city-input"
            placeholder="Nhap thanh pho"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <button className="search-button" onClick={handleSearch}>Tim kiem</button>
        </div>

        {weather && (
          <section className="current-weather">
            <img
              src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
              alt="weather icon"
            />
            <h2>{weather.name}</h2>
            <p>Temperature: {weather.main.temp} do C</p>
            <p>Humidity: {weather.main.humidity}%</p>
            <p className="description">{weather.weather[0].description}</p>
          </section>
        )}

        {forecast && (
          <section className="forecast-grid">
            {forecast.list
              .filter((item) => item.dt_txt.includes("12:00:00"))
              .slice(0,5)
              .map((item,index) => (
              <article key={index} className="forecast-item">
                <p className="text-sm">
                  {new Date(item.dt_txt).toLocaleDateString()}
                </p>
                <p>{item.main.temp} do C</p>
                <img
                  src={`https://openweathermap.org/img/wn/${item.weather[0].icon}.png`}
                  alt="forecast icon"
                />
              </article>
            ))}
          </section>
        )}
      </main>
    </div>
    
  )
}
export default App
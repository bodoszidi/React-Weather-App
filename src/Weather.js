import "./Weather.css";
import WeatherIcon from "./WeatherIcon";

export default function Weather(props) {
    let weatherData = {
        city: "New York",
        temperature: 19,
        date: "Friday 10:00",
        description: "Cloudy",
        imgUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
        humidity: 80,
        wind: 10,
    };

    return (
        <div className="Weather">
            <form className="mb-3">
                <div className="row">
                    <div className="col-9 py-4">
                        <input
                            type="search"
                            placeholder="Type a city.."
                            className="form-control"
                            autoComplete="off"
                        />
                    </div>
                    <div className="col-3 py-4">
                        <input
                            type="submit"
                            value="Search"
                            className="btn w-100"
                        />
                    </div>
                </div>
            </form>
            <div className="row">
                <div className="col-9 overview">
                    <h1 className="py-4">{weatherData.city}</h1>
                    <ul className="mx-2 py-2">
                        <li className="py-2">
                            Last updated: {weatherData.date}
                        </li>
                        <li>{weatherData.description}</li>
                        <li>Humidity: {weatherData.humidity}%</li>
                        <li>Wind: {weatherData.wind} km/h</li>
                    </ul>
                </div>
                <div className="col-3">
                    <div className="clearfix weather-temperature py-4">
                        <WeatherIcon icon="CLEAR_DAY" size={40} color="orange" />
                        <div className="float-left">
                            <strong>{weatherData.temperature}</strong>
                            <span className="units">
                                <a href="/">°C</a> | <a href="/">°F</a>
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row text-center mt-4">
                <div className="col-3">
                  <p>Monday</p>
                    <WeatherIcon icon="CLOUDY" size={40} color="gray" />
                    <p>14°5°</p>
                </div>
                <div className="col-3">
                    <p>Tuesday</p>
                    <WeatherIcon icon="RAIN" size={40} color="blue" />
                    <p>14°5°</p>
                </div>
                <div className="col-3">
                    <p>Wednesday</p>
                    <WeatherIcon icon="SNOW" size={40} color="lightblue" />
                    <p>14°5°</p>
                </div>
                <div className="col-3">
                    <p>Thursday</p>
                    <WeatherIcon icon="CLEAR_DAY" size={40} color="orange" />
                    <p>14°5°</p>
                </div>
            </div>
        </div>
    );
}

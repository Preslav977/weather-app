const userForm = document.querySelector(".user-form");
const searchingLocation = document.getElementById("search-location");

async function fetchUserLocation() {
  try {
    const response = await fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=e5de975d30ff49eeb9a70436231107&q=${searchingLocation.value}&days=7`,
      { mode: "cors" }
    );
    return await response.json();
  } catch (error) {
    console.log(error);
  }
}

let currentWeatherObj = {};

function processCurrentWeatherJSON(weatherData) {
  currentWeatherObj = {
    condition: weatherData.current.condition.text,
    city: weatherData.location.name,
    time: weatherData.location.localtime,
    degreesCelsius: weatherData.current.temp_c,
    degreesFahrenheit: weatherData.current.temp_f,
    todayWeatherIcon: weatherData.current.condition.icon,
    feelsLikeC: weatherData.current.feelslike_c,
    feelsLikeF: weatherData.current.feelslike_f,
    humidity: weatherData.current.humidity,
    chanceOfRain: weatherData.forecast.forecastday[0].day.daily_chance_of_rain,
    windSpeed: weatherData.current.wind_kph,
    windSpeedMph: weatherData.current.wind_mph,
  };
  console.log(currentWeatherObj);
  return currentWeatherObj;
}

userForm.addEventListener("submit", async (e) => {
  const weatherData = await fetchUserLocation();
  console.log(weatherData);
  e.preventDefault();
  fetchUserLocation();
  processCurrentWeatherJSON(weatherData);
  userForm.reset();
});

const weatherForm = document.querySelector(".weather-form");
const searchingLocation = document.getElementById("searching-location");
const toggleFromCtoF = document.getElementById("toggle-fahrenheit-celsius");
// current weather variables
const weatherCondition = document.querySelector(".weather-condition");
const cityName = document.querySelector(".city-name");
const localTime = document.querySelector(".local-time");
const currentDayDegrees = document.querySelector(".today-degrees");
const todayWeatherIcon = document.querySelector(".today-weather-icon");
const feelsLikeDegrees = document.querySelector(".degrees");
const humidityPercent = document.querySelector(".humidity-percent");
const chanceOfRain = document.querySelector(".chance-of-rain-percent");
const windSpeed = document.querySelector(".wind-speed-kilometers");
// forecast weather variables
// monday
const mondayMorningTemp = document.querySelector(".monday-min-temp");
const mondayAfternoonTemp = document.querySelector(".monday-max-temp");
const mondayWeatherIcon = document.querySelector(".monday-weather");
// tuesday
const tuesdayMorningTemp = document.querySelector(".tuesday-min-temp");
const tuesdayAfternoonTemp = document.querySelector(".tuesday-max-temp");
const tuesdayWeatherIcon = document.querySelector(".tuesday-weather");
// wednesday
const wednesdayMorningTemp = document.querySelector(".wednesday-min-temp");
const wednesdayAfternoonTemp = document.querySelector(".wednesday-max-temp");
const wednesdayWeatherIcon = document.querySelector(".wednesday-weather");
// thursday
const thursdayMorningTemp = document.querySelector(".thursday-min-temp");
const thursdayAfternoonTemp = document.querySelector(".thursday-max-temp");
const thursdayWeatherIcon = document.querySelector(".thursday-weather");
// friday
const fridayMorningTemp = document.querySelector(".friday-min-temp");
const fridayAfternoonTemp = document.querySelector(".friday-max-temp");
const fridayWeatherIcon = document.querySelector(".friday-weather");
// saturday
const saturdayMorningTemp = document.querySelector(".saturday-min-temp");
const saturdayAfternoonTemp = document.querySelector(".saturday-max-temp");
const saturdayWeatherIcon = document.querySelector(".saturday-weather");
// sunday
const sundayMorningTemp = document.querySelector(".sunday-min-temp");
const sundayAfternoonTemp = document.querySelector(".sunday-max-temp");
const sundayWeatherIcon = document.querySelector(".sunday-weather");

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

weatherForm.addEventListener("submit", async (e) => {
  const weatherData = await fetchUserLocation();
  console.log(weatherData);
  e.preventDefault();
  fetchUserLocation();
  processCurrentWeatherJSON(weatherData);
  weatherForm.reset();
});

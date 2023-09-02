import "./style.css";

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
// const thursdayMorningTemp = document.querySelector(".thursday-min-temp");
// const thursdayAfternoonTemp = document.querySelector(".thursday-max-temp");
// const thursdayWeatherIcon = document.querySelector(".thursday-weather");
// friday
// const fridayMorningTemp = document.querySelector(".friday-min-temp");
// const fridayAfternoonTemp = document.querySelector(".friday-max-temp");
// const fridayWeatherIcon = document.querySelector(".friday-weather");
// saturday
// const saturdayMorningTemp = document.querySelector(".saturday-min-temp");
// const saturdayAfternoonTemp = document.querySelector(".saturday-max-temp");
// const saturdayWeatherIcon = document.querySelector(".saturday-weather");
// sunday
// const sundayMorningTemp = document.querySelector(".sunday-min-temp");
// const sundayAfternoonTemp = document.querySelector(".sunday-max-temp");
// const sundayWeatherIcon = document.querySelector(".sunday-weather");

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

function fetchUserLocationIP() {
  return fetch(
    `https://api.weatherapi.com/v1/ip.json?key=e5de975d30ff49eeb9a70436231107&q=auto:ip`,
    { mode: "cors" }
  ).then((response) => response.json());
}

function retrieveWeatherLocationCity(searchingLocation) {
  return fetch(
    `https://api.weatherapi.com/v1/forecast.json?key=e5de975d30ff49eeb9a70436231107&q=${searchingLocation}&days=7`,
    { mode: "cors" }
  ).then((response) => response.json());
}

let currentWeatherObj = {};

// TODO: separate this function, in two functions
// the first one would process the data
// the second would display the current weather

async function displayCurrentWeatherLocation() {
  const getIpData = await fetchUserLocationIP();
  const weatherData = await retrieveWeatherLocationCity(getIpData.city);
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

  weatherCondition.textContent = `${currentWeatherObj.condition}`;
  cityName.textContent = `${currentWeatherObj.city}`;
  localTime.textContent = `${currentWeatherObj.time}`;
  currentDayDegrees.textContent = `${currentWeatherObj.degreesCelsius} C`;
  todayWeatherIcon.src = `${currentWeatherObj.todayWeatherIcon}`;
  feelsLikeDegrees.textContent = `${currentWeatherObj.feelsLikeC} C`;
  humidityPercent.textContent = `${currentWeatherObj.humidity} %`;
  chanceOfRain.textContent = `${currentWeatherObj.chanceOfRain} %`;
  windSpeed.textContent = `${currentWeatherObj.windSpeed} km/h`;
}

displayCurrentWeatherLocation();

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
  return currentWeatherObj;
}

let forecastWeatherObj = {};

function processFullWeekWeather(weatherData) {
  forecastWeatherObj = {
    mondayMorningTempC: weatherData.forecast.forecastday[0].day.mintemp_c,
    mondayAfternoonTempC: weatherData.forecast.forecastday[0].day.maxtemp_c,
    mondayMorningTempF: weatherData.forecast.forecastday[0].day.mintemp_f,
    mondayAfternoonTempF: weatherData.forecast.forecastday[0].day.maxtemp_f,
    mondayWeatherCondition:
      weatherData.forecast.forecastday[0].day.condition.text,
    mondayWeatherIcon: weatherData.forecast.forecastday[0].day.condition.icon,

    tuesdayMorningTempC: weatherData.forecast.forecastday[1].day.mintemp_c,
    tuesdayAfternoonTempC: weatherData.forecast.forecastday[1].day.maxtemp_c,
    tuesdayMorningTempF: weatherData.forecast.forecastday[1].day.mintemp_f,
    tuesdayAfternoonTempF: weatherData.forecast.forecastday[1].day.maxtemp_f,
    tuesdayWeatherCondition:
      weatherData.forecast.forecastday[1].day.condition.text,
    tuesdayWeatherIcon: weatherData.forecast.forecastday[1].day.condition.icon,

    wednesdayMorningTempC: weatherData.forecast.forecastday[2].day.mintemp_c,
    wednesdayAfternoonTempC: weatherData.forecast.forecastday[2].day.maxtemp_c,
    wednesdayMorningTempF: weatherData.forecast.forecastday[2].day.mintemp_f,
    wednesdayAfternoonTempF: weatherData.forecast.forecastday[2].day.maxtemp_f,
    wednesdayWeatherCondition:
      weatherData.forecast.forecastday[2].day.condition.text,
    wednesdayWeatherIcon:
      weatherData.forecast.forecastday[2].day.condition.icon,

    // thursdayMorningTempC: weatherData.forecast.forecastday[3].day.mintemp_c,
    // thursdayAfternoonTempC: weatherData.forecast.forecastday[3].day.maxtemp_c,
    // thursdayMorningTempF: weatherData.forecast.forecastday[3].day.mintemp_f,
    // thursdayAfternoonTempF: weatherData.forecast.forecastday[3].day.maxtemp_f,
    // thursdayWeatherCondition:
    //   weatherData.forecast.forecastday[3].day.condition.text,
    // thursdayWeatherIcon: weatherData.forecast.forecastday[3].day.condition.icon,

    // fridayMorningTempC: weatherData.forecast.forecastday[4].day.mintemp_c,
    // fridayAfternoonTempC: weatherData.forecast.forecastday[4].day.maxtemp_c,
    // fridayMorningTempF: weatherData.forecast.forecastday[4].day.mintemp_f,
    // fridayAfternoonTempF: weatherData.forecast.forecastday[4].day.maxtemp_f,
    // fridayWeatherCondition:
    //   weatherData.forecast.forecastday[4].day.condition.text,
    // fridayWeatherIcon: weatherData.forecast.forecastday[4].day.condition.icon,

    // saturdayMorningTempC: weatherData.forecast.forecastday[5].day.mintemp_c,
    // saturdayAfternoonTempC: weatherData.forecast.forecastday[5].day.maxtemp_c,
    // saturdayMorningTempF: weatherData.forecast.forecastday[5].day.mintemp_f,
    // saturdayAfternoonTempF: weatherData.forecast.forecastday[5].day.maxtemp_f,
    // saturdayWeatherCondition:
    //   weatherData.forecast.forecastday[5].day.condition.text,
    // saturdayWeatherIcon: weatherData.forecast.forecastday[5].day.condition.icon,

    // sundayMorningTempC: weatherData.forecast.forecastday[6].day.mintemp_c,
    // sundayAfternoonTempC: weatherData.forecast.forecastday[6].day.maxtemp_c,
    // sundayMorningTempF: weatherData.forecast.forecastday[6].day.mintemp_f,
    // sundayAfternoonTempF: weatherData.forecast.forecastday[6].day.maxtemp_f,
    // sundayWeatherCondition:
    //   weatherData.forecast.forecastday[6].day.condition.text,
    // sundayWeatherIcon: weatherData.forecast.forecastday[6].day.condition.icon,
  };
  return forecastWeatherObj;
}

function displayCurrentWeather() {
  weatherCondition.textContent = `${currentWeatherObj.condition}`;
  todayWeatherIcon.src = `${currentWeatherObj.todayWeatherIcon}`;
  cityName.textContent = `${currentWeatherObj.city}`;
  localTime.textContent = `${currentWeatherObj.time}`;
  (currentDayDegrees.textContent = `${currentWeatherObj.degreesCelsius} C`),
    (feelsLikeDegrees.textContent = `${currentWeatherObj.feelsLikeC} C`);
  humidityPercent.textContent = `${currentWeatherObj.humidity} %`;
  chanceOfRain.textContent = `${currentWeatherObj.chanceOfRain} %`;
  windSpeed.textContent = `${currentWeatherObj.windSpeed} km/h`;
}

function displayForecastWeather() {
  mondayMorningTemp.textContent = `${forecastWeatherObj.mondayMorningTempC} C`;
  mondayAfternoonTemp.textContent = `${forecastWeatherObj.mondayAfternoonTempC} C`;
  mondayWeatherIcon.src = `${forecastWeatherObj.mondayWeatherIcon}`;

  tuesdayMorningTemp.textContent = `${forecastWeatherObj.tuesdayMorningTempC} C`;
  tuesdayAfternoonTemp.textContent = `${forecastWeatherObj.tuesdayAfternoonTempC} C`;
  tuesdayWeatherIcon.src = `${forecastWeatherObj.tuesdayWeatherIcon}`;

  wednesdayMorningTemp.textContent = `${forecastWeatherObj.wednesdayMorningTempC} C`;
  wednesdayAfternoonTemp.textContent = `${forecastWeatherObj.wednesdayAfternoonTempC} C`;
  wednesdayWeatherIcon.src = `${forecastWeatherObj.wednesdayWeatherIcon}`;

  //   thursdayMorningTemp.textContent = `${forecastWeatherObj.thursdayMorningTempC} C`;
  // thursdayAfternoonTemp.textContent = `${forecastWeatherObj.thursdayAfternoonTempC} C`;
  //   thursdayWeatherIcon.src = `${forecastWeatherObj.thursdayWeatherIcon}`;

  //   fridayMorningTemp.textContent = `${forecastWeatherObj.fridayMorningTempC} C`;
  //   fridayAfternoonTemp.textContent = `${forecastWeatherObj.fridayAfternoonTempC} C`;
  //   fridayWeatherIcon.src = `${forecastWeatherObj.fridayWeatherIcon}`;

  //   saturdayMorningTemp.textContent = `${forecastWeatherObj.saturdayMorningTempC} C`;
  // saturdayAfternoonTemp.textContent = `${forecastWeatherObj.saturdayAfternoonTempC} C`;
  //   saturdayWeatherIcon.src = `${forecastWeatherObj.saturdayWeatherIcon}`;

  //   sundayMorningTemp.textContent = `${forecastWeatherObj.sundayMorningTempC} C`;
  //   sundayAfternoonTemp.textContent = `${forecastWeatherObj.sundayAfternoonTempC} C`;
  //   sundayWeatherIcon.src = `${forecastWeatherObj.sundayWeatherIcon}`;
}

// TODO: separate this function, in two functions
// the first one would process the data
// the second would display the current weather

async function displayForecastWeatherLocation() {
  const getIpData = await fetchUserLocationIP();
  const weatherData = await retrieveWeatherLocationCity(getIpData.city);
  forecastWeatherObj = {
    mondayMorningTempC: weatherData.forecast.forecastday[0].day.mintemp_c,
    mondayAfternoonTempC: weatherData.forecast.forecastday[0].day.maxtemp_c,
    mondayMorningTempF: weatherData.forecast.forecastday[0].day.mintemp_f,
    mondayAfternoonTempF: weatherData.forecast.forecastday[0].day.maxtemp_f,
    mondayWeatherIcon: weatherData.forecast.forecastday[0].day.condition.icon,

    tuesdayMorningTempC: weatherData.forecast.forecastday[1].day.mintemp_c,
    tuesdayAfternoonTempC: weatherData.forecast.forecastday[1].day.maxtemp_c,
    tuesdayMorningTempF: weatherData.forecast.forecastday[1].day.mintemp_f,
    tuesdayAfternoonTempF: weatherData.forecast.forecastday[1].day.maxtemp_f,
    tuesdayWeatherIcon: weatherData.forecast.forecastday[1].day.condition.icon,

    wednesdayMorningTempC: weatherData.forecast.forecastday[2].day.mintemp_c,
    wednesdayAfternoonTempC: weatherData.forecast.forecastday[2].day.maxtemp_c,
    wednesdayMorningTempF: weatherData.forecast.forecastday[2].day.mintemp_f,
    wednesdayAfternoonTempF: weatherData.forecast.forecastday[2].day.maxtemp_f,
    wednesdayWeatherIcon:
      weatherData.forecast.forecastday[2].day.condition.icon,

    // thursdayMorningTempC: weatherData.forecast.forecastday[3].day.mintemp_c,
    // thursdayAfternoonTempC: weatherData.forecast.forecastday[3].day.maxtemp_c,
    // thursdayMorningTempF: weatherData.forecast.forecastday[3].day.mintemp_f,
    // thursdayAfternoonTempF: weatherData.forecast.forecastday[3].day.maxtemp_f,
    // thursdayWeatherIcon: weatherData.forecast.forecastday[3].day.condition.icon,

    // fridayMorningTempC: weatherData.forecast.forecastday[4].day.mintemp_c,
    // fridayAfternoonTempC: weatherData.forecast.forecastday[4].day.maxtemp_c,
    // fridayMorningTempF: weatherData.forecast.forecastday[4].day.mintemp_f,
    // fridayAfternoonTempF: weatherData.forecast.forecastday[4].day.maxtemp_f,
    // fridayWeatherIcon: weatherData.forecast.forecastday[4].day.condition.icon,

    // saturdayMorningTempC: weatherData.forecast.forecastday[5].day.mintemp_c,
    // saturdayAfternoonTempC: weatherData.forecast.forecastday[5].day.maxtemp_c,
    // saturdayMorningTempF: weatherData.forecast.forecastday[5].day.mintemp_f,
    // saturdayAfternoonTempF: weatherData.forecast.forecastday[5].day.maxtemp_f,
    // saturdayWeatherIcon: weatherData.forecast.forecastday[5].day.condition.icon,

    // sundayMorningTempC: weatherData.forecast.forecastday[6].day.mintemp_c,
    // sundayAfternoonTempC: weatherData.forecast.forecastday[6].day.maxtemp_c,
    // sundayMorningTempF: weatherData.forecast.forecastday[6].day.mintemp_f,
    // sundayAfternoonTempF: weatherData.forecast.forecastday[6].day.maxtemp_f,
    // sundayWeatherIcon: weatherData.forecast.forecastday[6].day.condition.icon,
  };

  mondayMorningTemp.textContent = `${forecastWeatherObj.mondayMorningTempC} C`;
  mondayAfternoonTemp.textContent = `${forecastWeatherObj.mondayAfternoonTempC} C`;
  mondayWeatherIcon.src = `${forecastWeatherObj.mondayWeatherIcon}`;

  tuesdayMorningTemp.textContent = `${forecastWeatherObj.tuesdayMorningTempC} C`;
  tuesdayAfternoonTemp.textContent = `${forecastWeatherObj.tuesdayAfternoonTempC} C`;
  tuesdayWeatherIcon.src = `${forecastWeatherObj.tuesdayWeatherIcon}`;

  wednesdayMorningTemp.textContent = `${forecastWeatherObj.wednesdayMorningTempC} C`;
  wednesdayAfternoonTemp.textContent = `${forecastWeatherObj.wednesdayAfternoonTempC} C`;
  wednesdayWeatherIcon.src = `${forecastWeatherObj.wednesdayWeatherIcon}`;

  //   thursdayMorningTemp.textContent = `${forecastWeatherObj.thursdayMorningTempC} C`;
  // thursdayAfternoonTemp.textContent = `${forecastWeatherObj.thursdayAfternoonTempC} C`;
  //   thursdayWeatherIcon.src = `${forecastWeatherObj.thursdayWeatherIcon}`;

  //   fridayMorningTemp.textContent = `${forecastWeatherObj.fridayMorningTempC} C`;
  //   fridayAfternoonTemp.textContent = `${forecastWeatherObj.fridayAfternoonTempC} C`;
  //   fridayWeatherIcon.src = `${forecastWeatherObj.fridayWeatherIcon}`;

  //   saturdayMorningTemp.textContent = `${forecastWeatherObj.saturdayMorningTempC} C`;
  // saturdayAfternoonTemp.textContent = `${forecastWeatherObj.saturdayAfternoonTempC} C`;
  //   saturdayWeatherIcon.src = `${forecastWeatherObj.saturdayWeatherIcon}`;

  //   sundayMorningTemp.textContent = `${forecastWeatherObj.sundayMorningTempC} C`;
  //   sundayAfternoonTemp.textContent = `${forecastWeatherObj.sundayAfternoonTempC} C`;
  //   sundayWeatherIcon.src = `${forecastWeatherObj.sundayWeatherIcon}`;
}

displayForecastWeatherLocation();

function toggleCtoF() {
  if (
    currentDayDegrees.textContent === `${currentWeatherObj.degreesCelsius} C` &&
    feelsLikeDegrees.textContent === `${currentWeatherObj.feelsLikeC} C` &&
    windSpeed.textContent === `${currentWeatherObj.windSpeed} km/h` &&
    mondayMorningTemp.textContent ===
      `${forecastWeatherObj.mondayMorningTempC} C` &&
    mondayAfternoonTemp.textContent ===
      `${forecastWeatherObj.mondayAfternoonTempC} C` &&
    tuesdayMorningTemp.textContent ===
      `${forecastWeatherObj.tuesdayMorningTempC} C` &&
    tuesdayAfternoonTemp.textContent ===
      `${forecastWeatherObj.tuesdayAfternoonTempC} C` &&
    wednesdayMorningTemp.textContent ===
      `${forecastWeatherObj.wednesdayMorningTempC} C` &&
    wednesdayAfternoonTemp.textContent ===
      `${forecastWeatherObj.wednesdayAfternoonTempC} C`
    // thursdayMorningTemp.textContent ===
    //   `${forecastWeatherObj.thursdayMorningTempC} C` &&
    // thursdayAfternoonTemp.textContent ===
    //   `${forecastWeatherObj.thursdayAfternoonTempC} C` &&
    // fridayMorningTemp.textContent ===
    //   `${forecastWeatherObj.fridayMorningTempC} C` &&
    // fridayAfternoonTemp.textContent ===
    //   `${forecastWeatherObj.fridayAfternoonTempC} C` &&
    // saturdayMorningTemp.textContent ===
    //   `${forecastWeatherObj.saturdayMorningTempC} C` &&
    // saturdayAfternoonTemp.textContent ===
    //   `${forecastWeatherObj.saturdayAfternoonTempC} C` &&
    // sundayMorningTemp.textContent ===
    //   `${forecastWeatherObj.sundayMorningTempC} C` &&
    // sundayAfternoonTemp.textContent ===
    //   `${forecastWeatherObj.sundayAfternoonTempC} C`
  ) {
    currentDayDegrees.textContent = `${currentWeatherObj.degreesFahrenheit} F`;
    feelsLikeDegrees.textContent = `${currentWeatherObj.feelsLikeF} F`;
    windSpeed.textContent = `${currentWeatherObj.windSpeedMph} mph`;
    mondayMorningTemp.textContent = `${forecastWeatherObj.mondayMorningTempF} F`;
    mondayAfternoonTemp.textContent = `${forecastWeatherObj.mondayAfternoonTempF} F`;
    tuesdayMorningTemp.textContent = `${forecastWeatherObj.tuesdayMorningTempF} F`;
    tuesdayAfternoonTemp.textContent = `${forecastWeatherObj.tuesdayAfternoonTempF} F`;
    wednesdayMorningTemp.textContent = `${forecastWeatherObj.wednesdayMorningTempF} F`;
    // wednesdayAfternoonTemp.textContent
    //= `${forecastWeatherObj.wednesdayAfternoonTempF} F`;
    // thursdayMorningTemp.textContent = `${forecastWeatherObj.thursdayMorningTempF} F`;
    // thursdayAfternoonTemp.textContent
    //= `${forecastWeatherObj.thursdayAfternoonTempF} F`;
    // fridayMorningTemp.textContent = `${forecastWeatherObj.fridayMorningTempF} F`;
    // fridayAfternoonTemp.textContent = `${forecastWeatherObj.fridayAfternoonTempF} F`;
    // saturdayMorningTemp.textContent = `${forecastWeatherObj.saturdayMorningTempF} F`;
    // saturdayAfternoonTemp.textContent
    //= `${forecastWeatherObj.saturdayAfternoonTempF} F`;
    // sundayMorningTemp.textContent = `${forecastWeatherObj.sundayMorningTempF} F`;
    // sundayAfternoonTemp.textContent = `${forecastWeatherObj.sundayAfternoonTempF} F`;
  } else {
    currentDayDegrees.textContent = `${currentWeatherObj.degreesCelsius} C`;
    feelsLikeDegrees.textContent = `${currentWeatherObj.feelsLikeC} C`;
    windSpeed.textContent = `${currentWeatherObj.windSpeed} km/h`;
    mondayMorningTemp.textContent = `${forecastWeatherObj.mondayMorningTempC} C`;
    mondayAfternoonTemp.textContent = `${forecastWeatherObj.mondayAfternoonTempC} C`;
    tuesdayMorningTemp.textContent = `${forecastWeatherObj.tuesdayMorningTempC} C`;
    tuesdayAfternoonTemp.textContent = `${forecastWeatherObj.tuesdayAfternoonTempC} C`;
    wednesdayMorningTemp.textContent = `${forecastWeatherObj.wednesdayMorningTempC} C`;
    // wednesdayAfternoonTemp.textContent
    //= `${forecastWeatherObj.wednesdayAfternoonTempC} C`;
    // thursdayMorningTemp.textContent = `${forecastWeatherObj.thursdayMorningTempC} C`;
    // thursdayAfternoonTemp.textContent
    // = `${forecastWeatherObj.thursdayAfternoonTempC} C`;
    // fridayMorningTemp.textContent = `${forecastWeatherObj.fridayMorningTempC} C`;
    // fridayAfternoonTemp.textContent = `${forecastWeatherObj.fridayAfternoonTempC} C`;
    // saturdayMorningTemp.textContent = `${forecastWeatherObj.saturdayMorningTempC} C`;
    // saturdayAfternoonTemp.textContent
    //= `${forecastWeatherObj.saturdayAfternoonTempC} C`;
    // sundayMorningTemp.textContent = `${forecastWeatherObj.sundayMorningTempC} C`;
    // sundayAfternoonTemp.textContent = `${forecastWeatherObj.sundayAfternoonTempC} C`;
  }
}

toggleFromCtoF.addEventListener("click", toggleCtoF);

weatherForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const weatherData = await fetchUserLocation();
  processCurrentWeatherJSON(weatherData);
  processFullWeekWeather(weatherData);
  displayCurrentWeather();
  displayForecastWeather();
  weatherForm.reset();
});

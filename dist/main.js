/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
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
    const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=e5de975d30ff49eeb9a70436231107&q=${searchingLocation.value}&days=7`, {
      mode: "cors"
    });
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
    windSpeedMph: weatherData.current.wind_mph
  };
  console.log(currentWeatherObj);
  return currentWeatherObj;
}
weatherForm.addEventListener("submit", async e => {
  const weatherData = await fetchUserLocation();
  console.log(weatherData);
  e.preventDefault();
  fetchUserLocation();
  processCurrentWeatherJSON(weatherData);
  weatherForm.reset();
});
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVcsQ0FBQ0UsT0FBTyxDQUFDYSxXQUFXO0lBQzNDQyxVQUFVLEVBQUVoQixXQUFXLENBQUNFLE9BQU8sQ0FBQ2UsV0FBVztJQUMzQ0MsUUFBUSxFQUFFbEIsV0FBVyxDQUFDRSxPQUFPLENBQUNnQixRQUFRO0lBQ3RDcEQsWUFBWSxFQUFFa0MsV0FBVyxDQUFDbUIsUUFBUSxDQUFDQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUNDLEdBQUcsQ0FBQ0Msb0JBQW9CO0lBQzFFdkQsU0FBUyxFQUFFaUMsV0FBVyxDQUFDRSxPQUFPLENBQUNxQixRQUFRO0lBQ3ZDQyxZQUFZLEVBQUV4QixXQUFXLENBQUNFLE9BQU8sQ0FBQ3VCO0VBQ3BDLENBQUM7RUFDRDdCLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDQyxpQkFBaUIsQ0FBQztFQUM5QixPQUFPQSxpQkFBaUI7QUFDMUI7QUFFQTdDLFdBQVcsQ0FBQ3lFLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxNQUFPQyxDQUFDLElBQUs7RUFDbEQsTUFBTTNCLFdBQVcsR0FBRyxNQUFNWCxpQkFBaUIsQ0FBQyxDQUFDO0VBQzdDTyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0csV0FBVyxDQUFDO0VBQ3hCMkIsQ0FBQyxDQUFDQyxjQUFjLENBQUMsQ0FBQztFQUNsQnZDLGlCQUFpQixDQUFDLENBQUM7RUFDbkJVLHlCQUF5QixDQUFDQyxXQUFXLENBQUM7RUFDdEMvQyxXQUFXLENBQUM0RSxLQUFLLENBQUMsQ0FBQztBQUNyQixDQUFDLENBQUMsQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RlbXBsYXRlLXJlcG9zaXRvcnkvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qgd2VhdGhlckZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLndlYXRoZXItZm9ybVwiKTtcbmNvbnN0IHNlYXJjaGluZ0xvY2F0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZWFyY2hpbmctbG9jYXRpb25cIik7XG5jb25zdCB0b2dnbGVGcm9tQ3RvRiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG9nZ2xlLWZhaHJlbmhlaXQtY2Vsc2l1c1wiKTtcbi8vIGN1cnJlbnQgd2VhdGhlciB2YXJpYWJsZXNcbmNvbnN0IHdlYXRoZXJDb25kaXRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLndlYXRoZXItY29uZGl0aW9uXCIpO1xuY29uc3QgY2l0eU5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNpdHktbmFtZVwiKTtcbmNvbnN0IGxvY2FsVGltZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubG9jYWwtdGltZVwiKTtcbmNvbnN0IGN1cnJlbnREYXlEZWdyZWVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50b2RheS1kZWdyZWVzXCIpO1xuY29uc3QgdG9kYXlXZWF0aGVySWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudG9kYXktd2VhdGhlci1pY29uXCIpO1xuY29uc3QgZmVlbHNMaWtlRGVncmVlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZGVncmVlc1wiKTtcbmNvbnN0IGh1bWlkaXR5UGVyY2VudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaHVtaWRpdHktcGVyY2VudFwiKTtcbmNvbnN0IGNoYW5jZU9mUmFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2hhbmNlLW9mLXJhaW4tcGVyY2VudFwiKTtcbmNvbnN0IHdpbmRTcGVlZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIud2luZC1zcGVlZC1raWxvbWV0ZXJzXCIpO1xuLy8gZm9yZWNhc3Qgd2VhdGhlciB2YXJpYWJsZXNcbi8vIG1vbmRheVxuY29uc3QgbW9uZGF5TW9ybmluZ1RlbXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vbmRheS1taW4tdGVtcFwiKTtcbmNvbnN0IG1vbmRheUFmdGVybm9vblRlbXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vbmRheS1tYXgtdGVtcFwiKTtcbmNvbnN0IG1vbmRheVdlYXRoZXJJY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb25kYXktd2VhdGhlclwiKTtcbi8vIHR1ZXNkYXlcbmNvbnN0IHR1ZXNkYXlNb3JuaW5nVGVtcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudHVlc2RheS1taW4tdGVtcFwiKTtcbmNvbnN0IHR1ZXNkYXlBZnRlcm5vb25UZW1wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50dWVzZGF5LW1heC10ZW1wXCIpO1xuY29uc3QgdHVlc2RheVdlYXRoZXJJY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50dWVzZGF5LXdlYXRoZXJcIik7XG4vLyB3ZWRuZXNkYXlcbmNvbnN0IHdlZG5lc2RheU1vcm5pbmdUZW1wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi53ZWRuZXNkYXktbWluLXRlbXBcIik7XG5jb25zdCB3ZWRuZXNkYXlBZnRlcm5vb25UZW1wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi53ZWRuZXNkYXktbWF4LXRlbXBcIik7XG5jb25zdCB3ZWRuZXNkYXlXZWF0aGVySWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIud2VkbmVzZGF5LXdlYXRoZXJcIik7XG4vLyB0aHVyc2RheVxuY29uc3QgdGh1cnNkYXlNb3JuaW5nVGVtcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGh1cnNkYXktbWluLXRlbXBcIik7XG5jb25zdCB0aHVyc2RheUFmdGVybm9vblRlbXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRodXJzZGF5LW1heC10ZW1wXCIpO1xuY29uc3QgdGh1cnNkYXlXZWF0aGVySWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGh1cnNkYXktd2VhdGhlclwiKTtcbi8vIGZyaWRheVxuY29uc3QgZnJpZGF5TW9ybmluZ1RlbXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZyaWRheS1taW4tdGVtcFwiKTtcbmNvbnN0IGZyaWRheUFmdGVybm9vblRlbXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZyaWRheS1tYXgtdGVtcFwiKTtcbmNvbnN0IGZyaWRheVdlYXRoZXJJY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mcmlkYXktd2VhdGhlclwiKTtcbi8vIHNhdHVyZGF5XG5jb25zdCBzYXR1cmRheU1vcm5pbmdUZW1wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zYXR1cmRheS1taW4tdGVtcFwiKTtcbmNvbnN0IHNhdHVyZGF5QWZ0ZXJub29uVGVtcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2F0dXJkYXktbWF4LXRlbXBcIik7XG5jb25zdCBzYXR1cmRheVdlYXRoZXJJY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zYXR1cmRheS13ZWF0aGVyXCIpO1xuLy8gc3VuZGF5XG5jb25zdCBzdW5kYXlNb3JuaW5nVGVtcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc3VuZGF5LW1pbi10ZW1wXCIpO1xuY29uc3Qgc3VuZGF5QWZ0ZXJub29uVGVtcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc3VuZGF5LW1heC10ZW1wXCIpO1xuY29uc3Qgc3VuZGF5V2VhdGhlckljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnN1bmRheS13ZWF0aGVyXCIpO1xuXG5hc3luYyBmdW5jdGlvbiBmZXRjaFVzZXJMb2NhdGlvbigpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxuICAgICAgYGh0dHBzOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxL2ZvcmVjYXN0Lmpzb24/a2V5PWU1ZGU5NzVkMzBmZjQ5ZWViOWE3MDQzNjIzMTEwNyZxPSR7c2VhcmNoaW5nTG9jYXRpb24udmFsdWV9JmRheXM9N2AsXG4gICAgICB7IG1vZGU6IFwiY29yc1wiIH1cbiAgICApO1xuICAgIHJldHVybiBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5sb2coZXJyb3IpO1xuICB9XG59XG5cbmxldCBjdXJyZW50V2VhdGhlck9iaiA9IHt9O1xuXG5mdW5jdGlvbiBwcm9jZXNzQ3VycmVudFdlYXRoZXJKU09OKHdlYXRoZXJEYXRhKSB7XG4gIGN1cnJlbnRXZWF0aGVyT2JqID0ge1xuICAgIGNvbmRpdGlvbjogd2VhdGhlckRhdGEuY3VycmVudC5jb25kaXRpb24udGV4dCxcbiAgICBjaXR5OiB3ZWF0aGVyRGF0YS5sb2NhdGlvbi5uYW1lLFxuICAgIHRpbWU6IHdlYXRoZXJEYXRhLmxvY2F0aW9uLmxvY2FsdGltZSxcbiAgICBkZWdyZWVzQ2Vsc2l1czogd2VhdGhlckRhdGEuY3VycmVudC50ZW1wX2MsXG4gICAgZGVncmVlc0ZhaHJlbmhlaXQ6IHdlYXRoZXJEYXRhLmN1cnJlbnQudGVtcF9mLFxuICAgIHRvZGF5V2VhdGhlckljb246IHdlYXRoZXJEYXRhLmN1cnJlbnQuY29uZGl0aW9uLmljb24sXG4gICAgZmVlbHNMaWtlQzogd2VhdGhlckRhdGEuY3VycmVudC5mZWVsc2xpa2VfYyxcbiAgICBmZWVsc0xpa2VGOiB3ZWF0aGVyRGF0YS5jdXJyZW50LmZlZWxzbGlrZV9mLFxuICAgIGh1bWlkaXR5OiB3ZWF0aGVyRGF0YS5jdXJyZW50Lmh1bWlkaXR5LFxuICAgIGNoYW5jZU9mUmFpbjogd2VhdGhlckRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMF0uZGF5LmRhaWx5X2NoYW5jZV9vZl9yYWluLFxuICAgIHdpbmRTcGVlZDogd2VhdGhlckRhdGEuY3VycmVudC53aW5kX2twaCxcbiAgICB3aW5kU3BlZWRNcGg6IHdlYXRoZXJEYXRhLmN1cnJlbnQud2luZF9tcGgsXG4gIH07XG4gIGNvbnNvbGUubG9nKGN1cnJlbnRXZWF0aGVyT2JqKTtcbiAgcmV0dXJuIGN1cnJlbnRXZWF0aGVyT2JqO1xufVxuXG53ZWF0aGVyRm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIGFzeW5jIChlKSA9PiB7XG4gIGNvbnN0IHdlYXRoZXJEYXRhID0gYXdhaXQgZmV0Y2hVc2VyTG9jYXRpb24oKTtcbiAgY29uc29sZS5sb2cod2VhdGhlckRhdGEpO1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIGZldGNoVXNlckxvY2F0aW9uKCk7XG4gIHByb2Nlc3NDdXJyZW50V2VhdGhlckpTT04od2VhdGhlckRhdGEpO1xuICB3ZWF0aGVyRm9ybS5yZXNldCgpO1xufSk7XG4iXSwibmFtZXMiOlsid2VhdGhlckZvcm0iLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJzZWFyY2hpbmdMb2NhdGlvbiIsImdldEVsZW1lbnRCeUlkIiwidG9nZ2xlRnJvbUN0b0YiLCJ3ZWF0aGVyQ29uZGl0aW9uIiwiY2l0eU5hbWUiLCJsb2NhbFRpbWUiLCJjdXJyZW50RGF5RGVncmVlcyIsInRvZGF5V2VhdGhlckljb24iLCJmZWVsc0xpa2VEZWdyZWVzIiwiaHVtaWRpdHlQZXJjZW50IiwiY2hhbmNlT2ZSYWluIiwid2luZFNwZWVkIiwibW9uZGF5TW9ybmluZ1RlbXAiLCJtb25kYXlBZnRlcm5vb25UZW1wIiwibW9uZGF5V2VhdGhlckljb24iLCJ0dWVzZGF5TW9ybmluZ1RlbXAiLCJ0dWVzZGF5QWZ0ZXJub29uVGVtcCIsInR1ZXNkYXlXZWF0aGVySWNvbiIsIndlZG5lc2RheU1vcm5pbmdUZW1wIiwid2VkbmVzZGF5QWZ0ZXJub29uVGVtcCIsIndlZG5lc2RheVdlYXRoZXJJY29uIiwidGh1cnNkYXlNb3JuaW5nVGVtcCIsInRodXJzZGF5QWZ0ZXJub29uVGVtcCIsInRodXJzZGF5V2VhdGhlckljb24iLCJmcmlkYXlNb3JuaW5nVGVtcCIsImZyaWRheUFmdGVybm9vblRlbXAiLCJmcmlkYXlXZWF0aGVySWNvbiIsInNhdHVyZGF5TW9ybmluZ1RlbXAiLCJzYXR1cmRheUFmdGVybm9vblRlbXAiLCJzYXR1cmRheVdlYXRoZXJJY29uIiwic3VuZGF5TW9ybmluZ1RlbXAiLCJzdW5kYXlBZnRlcm5vb25UZW1wIiwic3VuZGF5V2VhdGhlckljb24iLCJmZXRjaFVzZXJMb2NhdGlvbiIsInJlc3BvbnNlIiwiZmV0Y2giLCJ2YWx1ZSIsIm1vZGUiLCJqc29uIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwiY3VycmVudFdlYXRoZXJPYmoiLCJwcm9jZXNzQ3VycmVudFdlYXRoZXJKU09OIiwid2VhdGhlckRhdGEiLCJjb25kaXRpb24iLCJjdXJyZW50IiwidGV4dCIsImNpdHkiLCJsb2NhdGlvbiIsIm5hbWUiLCJ0aW1lIiwibG9jYWx0aW1lIiwiZGVncmVlc0NlbHNpdXMiLCJ0ZW1wX2MiLCJkZWdyZWVzRmFocmVuaGVpdCIsInRlbXBfZiIsImljb24iLCJmZWVsc0xpa2VDIiwiZmVlbHNsaWtlX2MiLCJmZWVsc0xpa2VGIiwiZmVlbHNsaWtlX2YiLCJodW1pZGl0eSIsImZvcmVjYXN0IiwiZm9yZWNhc3RkYXkiLCJkYXkiLCJkYWlseV9jaGFuY2Vfb2ZfcmFpbiIsIndpbmRfa3BoIiwid2luZFNwZWVkTXBoIiwid2luZF9tcGgiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsInByZXZlbnREZWZhdWx0IiwicmVzZXQiXSwic291cmNlUm9vdCI6IiJ9
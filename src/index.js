function getLocationAPI() {
  fetch(
    "https://api.weatherapi.com/v1/current.json?key=e5de975d30ff49eeb9a70436231107&q=pleven",
    { mode: "cors" }
  )
    .then((response) => response.json())
    .then(processLocationAPI);
}

getLocationAPI();

function processLocationAPI(weatherData) {
  const weatherLocationData = weatherData.location;
  console.log(weatherLocationData);
  const currentWeatherLocationData = weatherData.current;
  console.log(currentWeatherLocationData);
}

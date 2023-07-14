function getLocationAPI() {
  fetch(
    "https://api.weatherapi.com/v1/current.json?key=e5de975d30ff49eeb9a70436231107&q=trastenik",
    { mode: "cors" }
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response.location);
    });
}

getLocationAPI();

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
userForm.addEventListener("submit", async (e) => {
  const weatherData = await fetchUserLocation();
  console.log(weatherData);
  e.preventDefault();
  fetchUserLocation();
  userForm.reset();
});

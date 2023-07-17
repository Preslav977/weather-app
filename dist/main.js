/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
const userForm = document.querySelector(".user-form");
const searchingLocation = document.getElementById("search-location");
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
userForm.addEventListener("submit", async e => {
  const weatherData = await fetchUserLocation();
  console.log(weatherData);
  e.preventDefault();
  fetchUserLocation();
  userForm.reset();
});
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBLE1BQU1BLFFBQVEsR0FBR0MsUUFBUSxDQUFDQyxhQUFhLENBQUMsWUFBWSxDQUFDO0FBQ3JELE1BQU1DLGlCQUFpQixHQUFHRixRQUFRLENBQUNHLGNBQWMsQ0FBQyxpQkFBaUIsQ0FBQztBQUVwRSxlQUFlQyxpQkFBaUJBLENBQUEsRUFBRztFQUNqQyxJQUFJO0lBQ0YsTUFBTUMsUUFBUSxHQUFHLE1BQU1DLEtBQUssQ0FDekIsb0ZBQW1GSixpQkFBaUIsQ0FBQ0ssS0FBTSxTQUFRLEVBQ3BIO01BQUVDLElBQUksRUFBRTtJQUFPLENBQ2pCLENBQUM7SUFDRCxPQUFPLE1BQU1ILFFBQVEsQ0FBQ0ksSUFBSSxDQUFDLENBQUM7RUFDOUIsQ0FBQyxDQUFDLE9BQU9DLEtBQUssRUFBRTtJQUNkQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsS0FBSyxDQUFDO0VBQ3BCO0FBQ0Y7QUFDQVgsUUFBUSxDQUFDYyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsTUFBT0MsQ0FBQyxJQUFLO0VBQy9DLE1BQU1DLFdBQVcsR0FBRyxNQUFNWCxpQkFBaUIsQ0FBQyxDQUFDO0VBQzdDTyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0csV0FBVyxDQUFDO0VBQ3hCRCxDQUFDLENBQUNFLGNBQWMsQ0FBQyxDQUFDO0VBQ2xCWixpQkFBaUIsQ0FBQyxDQUFDO0VBQ25CTCxRQUFRLENBQUNrQixLQUFLLENBQUMsQ0FBQztBQUNsQixDQUFDLENBQUMsQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RlbXBsYXRlLXJlcG9zaXRvcnkvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgdXNlckZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnVzZXItZm9ybVwiKTtcbmNvbnN0IHNlYXJjaGluZ0xvY2F0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZWFyY2gtbG9jYXRpb25cIik7XG5cbmFzeW5jIGZ1bmN0aW9uIGZldGNoVXNlckxvY2F0aW9uKCkge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG4gICAgICBgaHR0cHM6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvZm9yZWNhc3QuanNvbj9rZXk9ZTVkZTk3NWQzMGZmNDllZWI5YTcwNDM2MjMxMTA3JnE9JHtzZWFyY2hpbmdMb2NhdGlvbi52YWx1ZX0mZGF5cz03YCxcbiAgICAgIHsgbW9kZTogXCJjb3JzXCIgfVxuICAgICk7XG4gICAgcmV0dXJuIGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gIH1cbn1cbnVzZXJGb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgYXN5bmMgKGUpID0+IHtcbiAgY29uc3Qgd2VhdGhlckRhdGEgPSBhd2FpdCBmZXRjaFVzZXJMb2NhdGlvbigpO1xuICBjb25zb2xlLmxvZyh3ZWF0aGVyRGF0YSk7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbiAgZmV0Y2hVc2VyTG9jYXRpb24oKTtcbiAgdXNlckZvcm0ucmVzZXQoKTtcbn0pO1xuIl0sIm5hbWVzIjpbInVzZXJGb3JtIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwic2VhcmNoaW5nTG9jYXRpb24iLCJnZXRFbGVtZW50QnlJZCIsImZldGNoVXNlckxvY2F0aW9uIiwicmVzcG9uc2UiLCJmZXRjaCIsInZhbHVlIiwibW9kZSIsImpzb24iLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsIndlYXRoZXJEYXRhIiwicHJldmVudERlZmF1bHQiLCJyZXNldCJdLCJzb3VyY2VSb290IjoiIn0=
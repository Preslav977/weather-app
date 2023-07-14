/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
function getLocationAPI() {
  fetch("https://api.weatherapi.com/v1/current.json?key=e5de975d30ff49eeb9a70436231107&q=trastenik", {
    mode: "cors"
  }).then(response => response.json()).then(response => {
    console.log(response.location);
  });
}
getLocationAPI();
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBLFNBQVNBLGNBQWNBLENBQUEsRUFBRztFQUN4QkMsS0FBSyxDQUNILDJGQUEyRixFQUMzRjtJQUFFQyxJQUFJLEVBQUU7RUFBTyxDQUNqQixDQUFDLENBQ0VDLElBQUksQ0FBRUMsUUFBUSxJQUFLQSxRQUFRLENBQUNDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FDbkNGLElBQUksQ0FBRUMsUUFBUSxJQUFLO0lBQ2xCRSxPQUFPLENBQUNDLEdBQUcsQ0FBQ0gsUUFBUSxDQUFDSSxRQUFRLENBQUM7RUFDaEMsQ0FBQyxDQUFDO0FBQ047QUFFQVIsY0FBYyxDQUFDLENBQUMsQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RlbXBsYXRlLXJlcG9zaXRvcnkvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gZ2V0TG9jYXRpb25BUEkoKSB7XG4gIGZldGNoKFxuICAgIFwiaHR0cHM6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvY3VycmVudC5qc29uP2tleT1lNWRlOTc1ZDMwZmY0OWVlYjlhNzA0MzYyMzExMDcmcT10cmFzdGVuaWtcIixcbiAgICB7IG1vZGU6IFwiY29yc1wiIH1cbiAgKVxuICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UubG9jYXRpb24pO1xuICAgIH0pO1xufVxuXG5nZXRMb2NhdGlvbkFQSSgpO1xuIl0sIm5hbWVzIjpbImdldExvY2F0aW9uQVBJIiwiZmV0Y2giLCJtb2RlIiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsImNvbnNvbGUiLCJsb2ciLCJsb2NhdGlvbiJdLCJzb3VyY2VSb290IjoiIn0=
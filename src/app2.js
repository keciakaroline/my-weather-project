function search(city) {
  let apiKey = "ce9e9a1384d8ee7b166d7542086e2fdc";
  let units = `metric`;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;

  axios.get(apiUrl).then(showWeather);
}

function searchCity(event) {
  event.preventDefault();
  let city = document.querySelector("#city").value;
  search(city);
}

search("Bochum");

function showWeather(response) {
  document.querySelector(
    "h1"
  ).innerHTML = `${response.data.name}, ${response.data.sys.country}`;
  document.querySelector("#temperature").innerHTML = Math.round(
    response.data.main.temp
  );
  document.querySelector(
    "#humidity-link"
  ).innerHTML = `${response.data.main.humidity}`;
  document.querySelector("#wind-link").innerHTML = `${Math.round(
    response.data.wind.speed
  )}`;
  document.querySelector(
    "#weather-link"
  ).innerHTML = `${response.data.weather[0].main}`;
}

function searchLocation(position) {
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;
  let apiKey = "ce9e9a1384d8ee7b166d7542086e2fdc";
  let units = `metric`;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${units}`;

  axios.get(apiUrl).then(showWeather);
}

function getLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(searchLocation);
}

function makeCelsius(event) {
  event.preventDefault();
  if (celsius.className !== "selected-unit") {
    temperature.innerHTML = fahrenheitToCelsius(temperature.innerHTML);
    celsius.classList.add("selected-unit");
    fahrenheit.classList.remove("selected-unit");
  }
}
function makeFahrenheit(event) {
  event.preventDefault();
  if (fahrenheit.className !== "selected-unit") {
    temperature.innerHTML = celsiusToFahrenheit(temperature.innerHTML);
    celsius.classList.remove("selected-unit");
    fahrenheit.classList.add("selected-unit");
  }
}
function celsiusToFahrenheit(temperature) {
  let convertedTemp = Math.round((temperature * 9) / 5 + 32);
  return convertedTemp;
}
function fahrenheitToCelsius(temperature) {
  let convertedTemp = Math.round(((temperature - 32) * 5) / 9);
  return convertedTemp;
}

let now = new Date();

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let currentDate = now.getDate();
let currentDay = days[now.getDay()];
let currentHour = now.getHours();
if (currentHour < 10) {
  currentHour = `0${currentHour}`;
}
let currentMinutes = now.getMinutes();
if (currentMinutes < 10) {
  currentMinutes = `0${currentMinutes}`;
}

let today = document.querySelector("#today");
today.innerHTML = `${currentDay} ${currentHour}:${currentMinutes}`;

let form = document.querySelector("form");
form.addEventListener("submit", searchCity);

let celsius = document.querySelector("#celsius-link");
celsius.addEventListener("click", makeCelsius);

let fahrenheit = document.querySelector("#fahrenheit-link");
fahrenheit.addEventListener("click", makeFahrenheit);

let locationButton = document.querySelector("#location");
locationButton.addEventListener("click", getLocation);

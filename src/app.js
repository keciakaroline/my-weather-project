let weather = {
  paris: {
    name: "Paris",
    temp: Math.round(19.7),
    humidity: 80,
  },
  tokyo: {
    name: "Tokyo",
    temp: Math.round(17.3),
    humidity: 50,
  },
  lisbon: {
    name: "Lisbon",
    temp: Math.round(30.2),
    humidity: 20,
  },
  "san francisco": {
    name: "San Francisco",
    temp: Math.round(20.9),
    humidity: 100,
  },
  moscow: {
    name: "Moscow",
    temp: Math.round(-5),
    humidity: 20,
  },
};

let city = prompt("Enter a city");
city = city.trim().toLowerCase();

if (weather[city] !== undefined) {
  let celsius = weather[city].temp;
  let fahrenheit = weather[city].temp * (9 / 5) + 32;
  let humidity = weather[city].humidity;
  alert(
    `It is currently ${celsius}°C (${fahrenheit}°F) in ${city} with a humidity of ${humidity}`
  );
} else {
  alert(
    `Sorry, we don't know the weather for this city, try going to https://www.google.com/search?q=weather+${city}`
  );
}

let city = "Lisbon";
let apiKey = "2e84a4ecaf1708e1643c02326f19599e";
let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

function showTemp(response) {
  let temperature = document.querySelector("#temperature");
  temperature.innerHTML = `${Math.round(response.data.main.temp)}`;
}

axios.get(apiUrl).then(showTemp);

function showHumidity(response) {
  let humidity = document.querySelector("#humidity");
  humidity.innerHTML = `Humidity: ${response.data.main.humidity}%`;
}
axios.get(apiUrl).then(showHumidity);

function showWind(response) {
  let windSpeed = document.querySelector("#windSpeed");
  windSpeed.innerHTML = `Wind Speed: ${response.data.wind.speed}hm/h`;
}

axios.get(apiUrl).then(showWind);

let city = "Lisbon";
let apiKey = "2e84a4ecaf1708e1643c02326f19599e";
let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

function showTemp(response) {
  let temperature = document.querySelector("#temperature");
  temperature.innerHTML = `${Math.round(response.data.main.temp)}`;

  let place = document.querySelector("#place");
  place.innerHTML = response.data.name;
}

axios.get(apiUrl).then(showTemp);

function weatherDetails(response) {
  let humidity = document.querySelector("#humidity");
  humidity.innerHTML = `Humidity: ${response.data.main.humidity}%`;

  let windSpeed = document.querySelector("#windSpeed");
  windSpeed.innerHTML = `Wind Speed: ${response.data.wind.speed}hm/h`;

  let description = document.querySelector("#description");
  description.innerHTML = `Sky: ${response.data.weather[0].description}`;
}
axios.get(apiUrl).then(weatherDetails);

let now = new Date();
let month = now.getMonth();
let day = now.getDate();

let time = document.querySelector("#time");
time.innerHTML = now;

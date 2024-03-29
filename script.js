function showDate(date) {
  let day = date.getDay();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];

  let daysName = days[day];

  let month = date.getMonth();
  let months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Nov",
    "Dec"
  ];

  let monthsName = months[month];

  let dayNumber = date.getDate();
  let hour = date.getHours();

  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  return `${daysName} ${monthsName} ${dayNumber}, ${hour}:${minutes}`;
}

function checkCity(event) {
  event.preventDefault();
  let keyword = document.querySelector("#keyword");
  search(keyword.value);
}

function search(city, country) {
  let apiKey = "2e84a4ecaf1708e1643c02326f19599e";
  let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayWeather);
}

function displayWeather(response) {
  let temperature = document.querySelector("#temperature");
  temperature.innerHTML = `${Math.round(response.data.main.temp)}`;

  let place = document.querySelector("#place");
  place.innerHTML = response.data.name;

  let description = document.querySelector("#description");
  description.innerHTML = `Sky: ${response.data.weather[0].description}`;

  let humidity = document.querySelector("#humidity");
  humidity.innerHTML = `Humidity: ${response.data.main.humidity}%`;

  let windSpeed = document.querySelector("#windSpeed");
  windSpeed.innerHTML = `Wind Speed: ${Math.round(
    response.data.wind.speed
  )} km/h`;

  let date = document.querySelector("#date");
  date.innerHTML = showDate(new Date(response.data.dt * 1000));

  let icon = document.querySelector("#icon");
  icon.setAttribute(
    "src",
    `http://openweathermap.org/img/w/${response.data.weather[0].icon}.png`
  );
}

let form = document.querySelector("form");
form.addEventListener("submit", checkCity);
search("Lisbon, pt");

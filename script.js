let city = "Lisbon";
let apiKey = "2e84a4ecaf1708e1643c02326f19599e";
let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

function showTemp(response) {
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
  console.log(response.data);
}
axios.get(apiUrl).then(showTemp);

function showDate(date) {
  let hour = date.getHours();
  let dayNumber = date.getDate();

  let dayName = date.getDay();
  let daysName = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];

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

  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  return `${daysName(dayName)} ${months(
    month
  )} ${dayNumber}, ${hour}:${minute}`;
}

function displayDate(date) {
  let minutes = date.getMinutes();
  let hours = date.getHours();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[date.getDay()];

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  return `${day} ${hours}:${minutes}`;
}

function displaytemp(response) {

  let humidity = response.data.temperature.humidity;
  let showHumidity = document.querySelector(".percentage");
  showHumidity.innerHTML = `${humidity}%`;

  let windSpeed = Math.round(response.data.wind.speed);
  let showWind = document.querySelector("#speed");
  showWind.innerHTML = `${windSpeed}km/h`;

  let city = response.data.city;
  let showCity = document.querySelector("#city");
  showCity.innerHTML = city;

  let timeElement = document.querySelector("#time");
  let date = new Date(response.data.time * 1000);
  timeElement.innerHTML = displayDate(date);

  let temp = Math.round(response.data.temperature.current);
  let showTemp = document.querySelector(".temperature");
  showTemp.innerHTML = `${temp}℃`;

  let condition = response.data.condition.description;
  let showCondition = document.querySelector(".condition");
  showCondition.innerHTML = condition;

  let showIcon = document.querySelector("#iconPicture");
  showIcon.innerHTML = `<img src="${response.data.condition.icon_url}" class="main-icon"/>`;

  forecastCity(response.data.city);
  console.log(response.data);
}


function enterCity(city) {

  let apiurl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=3adfat7038a3b8f55f4do5846b4c6a7d&units=metric`;
  axios.get(apiurl).then(displaytemp);

}


function inputForm(event) {
  event.preventDefault();
  let searchInput = document.querySelector(".input");

  enterCity(searchInput.value);

}

let form = document.querySelector(".form");
form.addEventListener("submit", inputForm);



function getDate(timestamp) {

  let date = new Date(timestamp * 1000);
  let weekDays = [
    "Sun",
    "Mon",
    "Tue",
    "Wed",
    "Thu",
    "Fri",
    "Sat",
  ];

  return weekDays[date.getDay()];
}


function forecastCity(city) {

   let apiKey = "b2a5adcct04b33178913oc335f405433";
  let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=metric`;
  axios(apiUrl).then(showForecast);

}


function showForecast(response) {

 
 let forecastHTML = "";


  response.data.daily.forEach(function (day,index) {
    if (index < 4) {
      forecastHTML =
        forecastHTML +
        `
   <div class="temp">
      <ul class="first-day" style="background:#222833;">
        <li><img src="${day.condition.icon_url}" class="icon"/></li>
       <li class="day"> ${getDate(day.time)} </li>
        <li class="degree">${Math.round(day.temperature.maximum)}º</li>
     </ul>
    </div>
    `;
  }
 });

 let forecast = document.querySelector("#forecast");
 forecast.innerHTML = forecastHTML;

}

enterCity("paris");
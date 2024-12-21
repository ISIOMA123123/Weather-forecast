function updateWeather(response) {
    console.log(response.data);

     temperatureElement = document.querySelector("#temperatureValuenow");
    temperature = response.data.temperature.current;
   temperatureElement.innerHTML = Math.round(temperature);

   cityElementHone = document.querySelector("#cityElement");
    cityElementHone.innerHTML = response.data.city;
    
   descriptionInformation = response.data.condition.description;
    descriptionElement = document.querySelector("#weatherDescription");
    descriptionElement.innerHTML = descriptionInformation;

    humidityElementInformation = response.data.temperature.humidity;
    humidityElement = document.querySelector("#humidityResult");
    humidityElement.innerHTML = `${humidityElementInformation}%`

    windInformation = response.data.wind.speed;
    windElement = document.querySelector("#windDescription");
    windElement.innerHTML = `${windInformation}km/hr`
   
    date = new Date(response.data.time * 1000);
    timeElement = document.querySelector("#weatherTimeNow");
    timeElement.innerHTML = formatDate(date);

    
    iconElement = document.querySelector("#iconTemperature");
    iconElement.innerHTML = `<img src="${response.data.condition.icon_url}" alt="" class="icon">`;

}

function formatDate(date) {
   
   hours = date.getHours();
   minutes = date.getMinutes();

   days = ["Sunday", "Tuesday", "Wednessday", "Thursday", "Friday", "Saturday"];
day = days[date.getDay()];

if (minutes < 10) {
  minutes = `0${minutes}`;
}
return `${day} ${hours}:${minutes}`;
}


function searchCity(city) {
  let apikey =   "7d3fo7t42ac4a88b5f1b6383fbbe2b0b";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apikey}&units=metric`;
  console.log(apiUrl);

  axios.get(apiUrl).then(updateWeather);

}



function handleSearchSubmit(event) {
    event.preventDefault();

    seachFormInput = document.querySelector("#searchFormInputes");
    console.log(seachFormInput.value);

    
    
    searchCity(seachFormInput.value);
}


searchFormElement = document.querySelector("#seachForm-identity");
console.log(searchFormElement);
searchFormElement.addEventListener("submit", handleSearchSubmit);

searchCity("Lisbon");
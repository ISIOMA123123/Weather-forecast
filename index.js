searchFormIdentity = document.querySelector("#seachForm-identity");
console.log(searchFormIdentity);

searchFormIdentity.addEventListener("submit", function seachListener(event) {

    event.preventDefault();
   
    searchFormInputResult = document.querySelector("#searchFormInputes");
    console.log(searchFormInputResult.value);

    cityElementResult = document.querySelector("#cityElement");
    cityElementResult.innerHTML = searchFormInputResult.value;



let city = searchFormInputResult.value;
console.log(city);
let apiKey = "7d3fo7t42ac4a88b5f1b6383fbbe2b0b";
let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;


axios.get(apiUrl).then(function searchingCity(response) {
 console.log(response); 
 
 temperatureNow = Math.round(response.data.temperature.current);
 console.log(temperatureNow);
 descriptionNow = response.data.condition.description;
 console.log(descriptionNow);

 humidityNow = response.data.temperature.humidity;
console.log(humidityNow);

windNow = response.data.wind.speed;
console.log(windNow);

timeNow = new Date(response.data.time * 1000);
console.log(timeNow);

 presentTemperature = document.querySelector("#temperatureValuenow");
 console.log(presentTemperature);

 presentTemperature.innerHTML = `${temperatureNow}`;

 weatherDescriptionNow = document.querySelector("#weatherDescription");
 console.log(weatherDescriptionNow);

 weatherDescriptionNow.innerHTML = descriptionNow;

 humidityResultnow = document.querySelector("#humidityResult");
 console.log(humidityResultnow);
 humidityResultnow.innerHTML = humidityNow;

 windDescriptionNow = document.querySelector("#windDescription");
 windDescriptionNow.innerHTML =  `${windNow}km/hr`

 timeDescriptionNow = document.querySelector("#weatherTimeNow");
 timeDescriptionNow.innerHTML = timeNow;
});


}
);
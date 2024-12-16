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

 presentTemperature = document.querySelector("#temperatureValuenow");
 console.log(presentTemperature);

 presentTemperature.innerHTML = `${temperatureNow}`;
});


}
);
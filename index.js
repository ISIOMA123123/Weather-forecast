searchFormIdentity = document.querySelector("#seachForm-identity");
console.log(searchFormIdentity);

searchFormIdentity.addEventListener("submit", function seachListener(event) {

    event.preventDefault();
   
    searchFormInputResult = document.querySelector("#searchFormInputes");
    console.log(searchFormInputResult.value);

    cityElementResult = document.querySelector("#cityElement");
    cityElementResult.innerHTML = searchFormInputResult.value;
}
);
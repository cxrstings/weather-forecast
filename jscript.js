// calling elements from document to use in my script.
const currentCity = document.getElementById('cityName');
const userSearch = document.getElementById('userSearch');
const searchButton = document.getElementById('searchButton');
const cityHistory = document.getElementById('cityHistory');
const currentTemp = document.getElementById('cityTemp');
const currentWind = document.getElementById('cityWind');
const currentHum = document.getElementById('cityHumidity');
const cityDate = document.getElementById('cityDate');
const oneDate = document.getElementById('dayOneDate');
const oneTemp = document.getElementById('dayOneTemp');
const oneWind = document.getElementById('dayOneWind');
const oneHum = document.getElementById('dayOneHum')
const twoDate = document.getElementById('dayTwoDate');
const twoTemp = document.getElementById('dayTwoTemp');
const twoWind = document.getElementById('dayTwoWind');
const twoHum = document.getElementById('dayTwoHum');
const threeDate = document.getElementById('dayThreeDate');
const threeTemp = document.getElementById('dayThreeTemp');
const threeWind = document.getElementById('dayThreeWind');
const threeHum = document.getElementById('dayThreeHum');
const fourDate = document.getElementById('dayFourDate');
const fourTemp = document.getElementById('dayFourTemp');
const fourWind = document.getElementById('dayFourWind');
const fourHum = document.getElementById('dayFourHum');
const cityIcon = document.getElementById('cityIcon');
const oneIcon = document.getElementById('dayOneIcon');
const twoIcon = document.getElementById('dayTwoIcon');
const threeIcon = document.getElementById('dayThreeIcon');
const fourIcon = document.getElementById('dayFourIcon');
const cityDisplay = document.querySelector('.cityDisplay');
const dayDisplay = document.querySelector('.dayDisplays');
//add event listener to search button citySearch function after search button is clicked.
searchButton.addEventListener("click", citySearch)

//function to search for city
function citySearch(event){
    event.preventDefault();
    //searches for a city using the value of userSearch with the openweathermap URL.
    let targetSearch = userSearch.value;
    let requestURL = "https://api.openweathermap.org/data/2.5/forecast?q="+targetSearch+"&units=imperial&appid=a005b66c9daeb33ec1e93b0091094249"
    fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then (function (data) {
        //grabs the icon codes for the city the user is searching
        let iconCode = data.list[0].weather[0].icon;
        let oneCode = data.list[8].weather[0].icon;
        let twoCode = data.list[16].weather[0].icon;
        let threeCode = data.list[24].weather[0].icon;
        let fourCode = data.list[32].weather[0].icon;
        //displays the weather sections
        cityDisplay.style.opacity = "100";
        dayDisplay.style.opacity = "100";
        //populating elements with data we got from the requestURL
        cityIcon.src = "https://openweathermap.org/img/w/"+iconCode+".png";
        currentCity.innerText = data.city.name;
        cityDate.innerText = data.list[0].dt_txt;
        currentTemp.innerText = data.list[0].main.temp+' °F';
        currentWind.innerText = "Wind: "+data.list[0].wind.speed+'mph';
        currentHum.innerText = "Humidity: "+data.list[0].main.humidity+"%";
        oneDate.innerText = data.list[8].dt_txt;
        oneIcon.src = "https://openweathermap.org/img/w/"+oneCode+".png";
        oneTemp.innerText = data.list[8].main.temp+' °F';
        oneWind.innerText = "Wind: "+data.list[8].wind.speed+'mph';
        oneHum.innerText = "Humidity: "+data.list[8].main.humidity+"%";
        twoDate.innerText = data.list[16].dt_txt;
        twoIcon.src = "https://openweathermap.org/img/w/"+twoCode+".png";
        twoTemp.innerText = data.list[16].main.temp+' °F';
        twoWind.innerText = "Wind: "+data.list[16].wind.speed+'mph';
        twoHum.innerText = "Humidity: "+data.list[16].main.humidity+"%";
        threeDate.innerText = data.list[24].dt_txt;
        threeIcon.src = "https://openweathermap.org/img/w/"+threeCode+".png";
        threeTemp.innerText = data.list[24].main.temp+' °F';
        threeWind.innerText = "Wind: "+data.list[24].wind.speed+'mph';
        threeHum.innerText = "Humidity: "+data.list[24].main.humidity+"%";
        fourDate.innerText = data.list[32].dt_txt;
        fourIcon.src = "https://openweathermap.org/img/w/"+fourCode+".png";
        fourTemp.innerText = data.list[32].main.temp+' °F';
        fourWind.innerText = "Wind: "+data.list[32].wind.speed+'mph';
        fourHum.innerText = "Humidity: "+data.list[32].main.humidity+"%";
        //creates newList button when city is searched
        let newList = document.createElement("button");
        newList.innerText = data.city.name;
        // add event listener to newList button to run fetchHistory when button is clicked.
        newList.addEventListener("click", fetchHistory);
        newList.classList.add("historybtn");
        //make newList the child of the cityHistory <ul>
        cityHistory.appendChild(newList);
    });
}

function fetchHistory(event) {
    //finds the inner text of the event target and uses that to search for a city.
    let targetCity = event.target.innerText;
    let requestURL = "https://api.openweathermap.org/data/2.5/forecast?q="+targetCity+"&units=imperial&appid=a005b66c9daeb33ec1e93b0091094249";
    fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then (function (data) {
        //same code as before, except this time we don't add the newList button.
        let iconCode = data.list[0].weather[0].icon;
        let oneCode = data.list[8].weather[0].icon;
        let twoCode = data.list[16].weather[0].icon;
        let threeCode = data.list[24].weather[0].icon;
        let fourCode = data.list[32].weather[0].icon;
        currentCity.innerText = data.city.name;
        cityDate.innerText = data.list[0].dt_txt;
        cityIcon.src = "https://openweathermap.org/img/w/"+iconCode+".png";
        currentTemp.innerText = data.list[0].main.temp+' °F';
        currentWind.innerText ="Wind: "+data.list[0].wind.speed+'mph';
        currentHum.innerText = "Humidity: "+data.list[0].main.humidity+"%";
        oneDate.innerText = data.list[8].dt_txt;
        oneIcon.src = "https://openweathermap.org/img/w/"+oneCode+".png";
        oneTemp.innerText = data.list[8].main.temp+' °F';
        oneWind.innerText = "Wind: "+data.list[8].wind.speed+'mph';
        oneHum.innerText = "Humidity: "+data.list[8].main.humidity+"%";
        twoDate.innerText = data.list[16].dt_txt;
        twoIcon.src = "https://openweathermap.org/img/w/"+twoCode+".png";
        twoTemp.innerText = data.list[16].main.temp+' °F';
        twoWind.innerText = "Wind: "+data.list[16].wind.speed+'mph';
        twoHum.innerText = "Humidity: "+data.list[16].main.humidity+"%";
        threeDate.innerText = data.list[24].dt_txt;
        threeIcon.src = "https://openweathermap.org/img/w/"+threeCode+".png";
        threeTemp.innerText = data.list[24].main.temp+' °F';
        threeWind.innerText = "Wind: "+data.list[24].wind.speed+'mph';
        threeHum.innerText = "Humidity: "+data.list[24].main.humidity+"%";
        fourDate.innerText = data.list[32].dt_txt;
        fourIcon.src = "https://openweathermap.org/img/w/"+fourCode+".png";
        fourTemp.innerText = data.list[32].main.temp+' °F';
        fourWind.innerText = "Wind: "+data.list[32].wind.speed+'mph';
        fourHum.innerText = "Humidity: "+data.list[32].main.humidity+"%";
});
}
    
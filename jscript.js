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

searchButton.addEventListener("click", citySearch)

function citySearch(event){
    event.preventDefault();
    let targetSearch = userSearch.value;
    let requestURL = "https://api.openweathermap.org/data/2.5/forecast?q="+targetSearch+"&units=imperial&appid=a005b66c9daeb33ec1e93b0091094249"
    console.log(requestURL);
    fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then (function (data) {
        let iconCode = data.list[0].weather[0].icon;
        let oneCode = data.list[8].weather[0].icon;
        let twoCode = data.list[16].weather[0].icon;
        let threeCode = data.list[24].weather[0].icon;
        let fourCode = data.list[32].weather[0].icon;
        cityDisplay.style.opacity = "100";
        dayDisplay.style.opacity = "100";
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
        let newList = document.createElement("button");
        newList.innerText = data.city.name;
        newList.addEventListener("click", fetchHistory);
        newList.classList.add("historybtn");
        cityHistory.appendChild(newList);
    });
}

function fetchHistory(event) {
    let targetCity = event.target.innerText;
    let requestURL = "https://api.openweathermap.org/data/2.5/forecast?q="+targetCity+"&units=imperial&appid=a005b66c9daeb33ec1e93b0091094249";
    fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then (function (data) {
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
    
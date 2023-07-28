var apiKey="59058ebd7030510abec5b6feff5ed764"
var titleEl=document.getElementById("title")
var tempEl=document.getElementById("temp")
var windEl=document.getElementById("wind")
var humidityEl=document.getElementById("humidity")
var searchBtn=document.getElementById("search-btn")
var cityInput=document.getElementById("city-input")

function searchCity(){
    var cityName=cityInput.value

    displayWeather(cityName)
}

function displayWeather(cityName){
    var url="https://api.openweathermap.org/data/2.5/weather?q="+cityName+"&appid="+apiKey+"&units=imperial"

    fetch(url)
    .then(function(response){
        return response.json()
    })
    .then(function(currentData){
        console.log(currentData)
    })

    var forecastUrl="https://api.openweathermap.org/data/2.5/forecast?q="+cityName+"&appid="+apiKey+"&units=imperial"

    fetch(forecastUrl)
    .then(function(response){
        return response.json()
    })
    .then(function(forecastData){
        console.log(forecastData)
        var forecastArr=forecastData.list
       for (let i = 3; i < forecastArr.length; i=i+8){
        console.log(forecastArr[i])
       }
    })
}


searchBtn.addEventListener("click", searchCity)


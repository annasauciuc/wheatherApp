'use strict';

searchButton.addEventListener('click', searchWeather);

function searchWeather() {
    loadingText.style.display = 'block';
    weatherBox.style.display = 'none';
    let cityName = searchCity.value;
    if (cityName.trim().length === 0) {
        return alert('Please enter a City Name');
    }

    let apiKey = config.API_KEY;
    let url = 'http://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&units=metric&appid=' + apiKey;


    fetch(url, {
        method: 'GET',
    })
        .then(response => response.json())
        .then((data) => {
            let country = data.sys.country;
            let description = data.weather[0].description.toUpperCase();
            let weatherData = new Weather(cityName, description, country);
            weatherData.temperature = data.main.temp;
            weatherData.clouds = data.weather[0].main;
            updateWeather(weatherData);
        })
        .catch(error => console.error('Error:', error));


}

function updateWeather(weatherData) {
    weatherCity.textContent = weatherData.cityName;
    weatherDescription.textContent = weatherData.description;
    weatherCountry.textContent = weatherData.country;
    weatherTemperature.textContent = weatherData.temperature;
    weatherClouds.textContent = weatherData.clouds;

    loadingText.style.display = 'none';
    weatherBox.style.display = 'block';
}

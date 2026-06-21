const API_KEY = "28f496f0e73304efd4c311a2bd112914";

async function getWeather() {

    const city = document.getElementById("cityInput").value;

    const weatherResult =
        document.getElementById("weatherResult");

    if(city === ""){
        weatherResult.innerHTML =
        "<p>Please enter a city name.</p>";
        return;
    }

    try{

        const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
        );

        const data = await response.json();

        if(data.cod !== 200){
            weatherResult.innerHTML =
            "<p>City not found.</p>";
            return;
        }

        weatherResult.innerHTML = `
            <h2>${data.name}</h2>

            <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png">

            <h3>${data.main.temp}°C</h3>

            <p>${data.weather[0].description}</p>

            <p>Humidity: ${data.main.humidity}%</p>
        `;

    } catch(error){
        weatherResult.innerHTML =
        "<p>Error fetching weather data.</p>";
    }
}
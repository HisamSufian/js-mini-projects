/**
 * Weather App Logic
 * ------------------
 * - Take city name from user
 * - Fetch weather data from OpenWeather API
 * - Display temperature and description
 */

// 🔑 Replace with your own API key
const API_KEY = "78d03a681087bc2de828c4219e6e60eb";

// Select DOM elements
const cityInput = document.getElementById("cityInput");
const getWeatherBtn = document.getElementById("getWeatherBtn");
const cityName = document.getElementById("cityName");
const temperature = document.getElementById("temperature");
const description = document.getElementById("description");

// Button click event
getWeatherBtn.addEventListener("click", () => {
    const city = cityInput.value.trim();

    // Validate input
    if (city === "") {
        alert("Please enter a city name!");
        return;
    }

    fetchWeather(city);
});

// Fetch weather from API
function fetchWeather(city) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&units=metric&appid=${API_KEY}`;


    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error("City not found");
            }
            return response.json();
        })
        .then(data => {
            // Update UI
            cityName.textContent = `📍 ${data.name}`;
            temperature.textContent = `🌡 Temperature: ${data.main.temp} °C`;
            description.textContent = `🌥 Weather: ${data.weather[0].description}`;
        })
        .catch(error => {
            cityName.textContent = "";
            temperature.textContent = "";
            description.textContent = "❌ Unable to fetch weather. Check city or API key.";
            console.error(error);
        });

}

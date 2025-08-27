let city = document.getElementById("city");
let searchBtn = document.getElementById("search-button");

let currentConditions = document.getElementById("current-conditions");

let aqi = document.getElementById("aqi");

let temp = document.getElementById("temp");
let weatherDetails = document.getElementById("weather-details");

const API_KEY = "c0533613aa33720b516b1ed157a094c8";
let tempChartInstance = null;
let humidityWindChartInstance = null;

const facts = async () => {
    try {
        let cityName = city.value;
        if (!cityName) {
            alert("Please enter a city name");
            return;
        }
        const URL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`;
        console.log("Getting data...");
        let response = await fetch(URL);
        let data = await response.json();
        console.log(data);
        if (data.cod != "200") {
            alert("City not found. Please enter a valid city name.");
            return;
        }
        currentConditions.innerHTML = `
            <h3>Current Conditions in ${data.name}</h3>
            <p>Feels Like: ${data.main.feels_like}°C</p>
            <p>Visibility: ${data.visibility / 1000} km</p>
            <p>Humidity: ${data.main.humidity} %</p>
            <p>Pressure: ${data.main.pressure} hPa</p>
            <p>Sunrise: ${new Date(data.sys.sunrise * 1000).toLocaleTimeString()} (IST)</p>
            <p>Sunset: ${new Date(data.sys.sunset * 1000).toLocaleTimeString()} (IST)</p>
        `;

        let lat = data.coord.lat;
        let lon = data.coord.lon;

        const aqiURL = `http://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${API_KEY}`
        let aqiResponse = await fetch(aqiURL);
        let aqiData = await aqiResponse.json();

        // AQI value from API (1 to 5)
        let aqi_data = aqiData.list[0].main.aqi;
        let aqiText = ["Good", "Fair", "Moderate", "Poor", "Very Poor"][aqi_data - 1];

        aqi.innerHTML = `
        <h2>${aqiText}</h2>`;

        temp.innerHTML = `
            <h3>${data.main.temp}°C</h3>
        `;
        weatherDetails.innerHTML = `
            <p>Humidity: ${data.main.humidity}<p>
            <p>Wind Speed: ${data.wind.speed} m/s</p>
        `;
        const iconCode = data.weather[0].icon;
        const iconUrl = `http://openweathermap.org/img/wn/${iconCode}@2x.png`;
        document.getElementById("icon").src = iconUrl;

        const forecastURL = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${API_KEY}&units=metric`;
        let forecastRes = await fetch(forecastURL);
        let forecastData = await forecastRes.json();

        let forecastContainer = document.querySelectorAll(".forecast");
        let dailyData = forecastData.list.filter(item => item.dt_txt.includes("12:00:00"));

        forecastContainer.forEach((card, i) => {
            if (dailyData[i]) {
                let date = new Date(dailyData[i].dt_txt).toLocaleDateString("en-US", { weekday: "long" });
                let tempDay = dailyData[i].main.temp.toFixed(1);
                let icon = dailyData[i].weather[0].icon;
                card.innerHTML = `
                    <span>${date}</span>
                    <span class="icon"><img src="http://openweathermap.org/img/wn/${icon}.png"></span>
                    <span>${tempDay}°C</span>
                `;
            }
        });
        if (tempChartInstance) tempChartInstance.destroy();
        if (humidityWindChartInstance) humidityWindChartInstance.destroy();
        let hours = forecastData.list.slice(0, 8).map(item => new Date(item.dt_txt).getHours() + ":00");
        let temps = forecastData.list.slice(0, 8).map(item => item.main.temp);
        let humidity = forecastData.list.slice(0, 8).map(item => item.main.humidity);
        let wind = forecastData.list.slice(0, 8).map(item => item.wind.speed);
        tempChartInstance = new Chart(document.getElementById('tempChart'), {
            type: 'line',
            data: {
                labels: hours,
                datasets: [{
                    label: 'Temperature (°C)',
                    data: temps,
                    borderColor: 'orange',
                    fill: false,
                    tension: 0.3
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        labels: { color: 'white' }
                    }
                },
                scales: {
                    x: {
                        ticks: { color: 'white' },
                        grid: { color: 'rgba(255,255,255,0.1)' }
                    },
                    y: {
                        ticks: { color: 'white' },
                        grid: { color: 'rgba(255,255,255,0.1)' }
                    }
                }
            }
        });
        humidityWindChartInstance = new Chart(document.getElementById('humidityWindChart'), {
            type: 'line',
            data: {
                labels: hours,
                datasets: [
                    {
                        label: 'Humidity (%)',
                        data: humidity,
                        borderColor: 'yellow',
                        fill: false,
                        tension: 0.3
                    },
                    {
                        label: 'Wind Speed (m/s)',
                        data: wind,
                        borderColor: 'lightgreen',
                        fill: false,
                        tension: 0.3
                    }
                ]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        labels: { color: 'white' }
                    }
                },
                scales: {
                    x: {
                        ticks: { color: 'white' },
                        grid: { color: 'rgba(255,255,255,0.1)' }
                    },
                    y: {
                        ticks: { color: 'white' },
                        grid: { color: 'rgba(255,255,255,0.1)' }
                    }
                }
            }
        });

    } catch (error) {
        console.error(error);
    }


};



searchBtn.addEventListener("click", facts);
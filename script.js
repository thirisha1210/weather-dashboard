const apiKey = '9f10efcad2ea02111f8c914786bd53a3';

async function fetchWeather() {
  const city = document.getElementById('city').value;
  if (!city) {
    alert('Please enter a city name');
    return;
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.cod === 200) {
      displayWeather(data);
    } else {
      document.getElementById('weather-details').innerHTML = `<p>${data.message}</p>`;
    }
  } catch (error) {
    document.getElementById('weather-details').innerHTML = '<p>Failed to fetch data. Please try again.</p>';
  }
}

function displayWeather(data) {
  const weatherDetails = `
    <h2>${data.name}, ${data.sys.country}</h2>
    <p>Temperature: ${data.main.temp} °C</p>
    <p>Humidity: ${data.main.humidity} %</p>
    <p>Weather: ${data.weather[0].description}</p>
    <img src="http://openweathermap.org/img/wn/${data.weather[0].icon}.png" alt="Weather Icon">
  `;
  document.getElementById('weather-details').innerHTML = weatherDetails;
}

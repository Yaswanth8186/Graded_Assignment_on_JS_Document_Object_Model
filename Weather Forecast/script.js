document.addEventListener('DOMContentLoaded', function () {
  const apiKey = 'f177dd597621be83449db97e3b6c503f'
  const city = 'Hyderabad,IN'
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
  const weatherInfo = document.querySelector('.weather-data')
  function fetchWeatherData() {
    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok')
        }
        return response.json()
      })
      .then((data) => {
        const temperature = (data.main.temp - 273).toFixed(2)
        const description = data.weather[0].description
        const cityName = data.name
        weatherInfo.innerHTML = `
                    <h2>${cityName} Weather</h2>
                    <p>Temperature: ${temperature}C°</p>
                    <p>Description: ${description}</p>
                `
      })
      .catch((error) => {
        console.error('Error:', error)
        weatherInfo.innerHTML = 'Error fetching weather data'
      })
  }
  fetchWeatherData()
})

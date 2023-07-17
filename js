function getWeatherData() {
  fetch('https://api.weatherapi.com/v1/current.json?key=YOUR_API_KEY&q=LOCATION')
    .then(response => response.json())
    .then(data => {
      // Process and display weather data
    })
    .catch(error => {
      console.error('Error fetching weather data:', error);
    });
}


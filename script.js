function getWeather() {
  const apiKey = "5eadb2393f622772ac3aa23c9fbfda44"; // Replace with a new key if needed
  const city = document.getElementById("cityInput").value;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      if (data.cod === 200) {
        const temp = data.main.temp;
        const desc = data.weather[0].description;
        const icon = data.weather[0].icon;
        const name = data.name;
        const iconUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`;

        document.getElementById("weatherResult").innerHTML = `
          <h2>${name}</h2>
          <img src="${iconUrl}" alt="Weather icon">
          <p><strong>${temp}°C</strong> - ${desc}</p>
        `;
      } else {
        document.getElementById("weatherResult").innerHTML = `<p style="color:red;">City not found!</p>`;
      }
    })
    .catch(() => {
      document.getElementById("weatherResult").innerHTML = `<p style="color:red;">Error fetching weather data.</p>`;
    });
}

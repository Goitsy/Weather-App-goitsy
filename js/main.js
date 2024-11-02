// function fetchAndDisplayWeather() {}
// const city = document.getElementById("city").value;
// const cityWeather = document.getElementById("cityWeather");
// cityWeather.innerHTML = "";

// if (city) {
//   fetch(
//     `http://api.weatherapi.com/v1?key={edf9f4428bdb45a7a18190419242608}&q=city`
//   )
//     .then((response) => response.json())
//     .then((data) => {
//       if (data.message === "NOT FOUND") {
//         cityWeather.innerHTML = `<p> User not found </p>`;
//       } else {
//         data.forEach((repo) => {
//           const weatherItem = document.createElement("div");
//           weatherItem.innerHTML = `<h4>${city.name}</h4>`;

//           cityWeather.append(weatherItem);
//         });
//       }
//     });
// }

// const searchButton = document.getElementById("searchButton");
// searchButton.addEventListener("click", fetchAndDisplayWeather);
// Function to fetch and display weather information
// Function to fetch and display weather information
async function fetchAndDisplayWeather() {
  const city = document.getElementById("city").value;
  const cityWeather = document.getElementById("cityWeather");
  cityWeather.innerHTML = "";

  if (city) {
    try {
      const response = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=b362e266b43f417ab5b151700240211&q=${city}`
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();

      if (data.error) {
        cityWeather.innerHTML = `<p>${data.error.message}</p>`;
      } else {
        const weatherItem = document.createElement("div");
        weatherItem.className = "weather-item";
        weatherItem.innerHTML = `
            <h4>${data.location.name}, ${data.location.region}</h4>
            <p>Temperature: ${data.current.temp_c}°C</p>
            <p>Condition: ${data.current.condition.text}</p>
            <img src="${data.current.condition.icon}" alt="${data.current.condition.text}">
          `;

        cityWeather.appendChild(weatherItem);
      }
    } catch (error) {
      console.error("Error fetching the weather data:", error);
      cityWeather.innerHTML = `<p>Failed to fetch weather data. Please try again.</p>`;
    }
  } else {
    cityWeather.innerHTML = `<p>Please enter a city name.</p>`;
  }
}

const searchButton = document.getElementById("searchButton");
searchButton.addEventListener("click", fetchAndDisplayWeather);

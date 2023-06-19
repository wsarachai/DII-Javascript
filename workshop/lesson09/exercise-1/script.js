'use strict';

const btn = document.querySelector('.btn-weather');
const weatherContainer = document.querySelector('.weathers');

///////////////////////////////////////
const weatherHost = 'http://api.openweathermap.org/data/2.5/weather';
const APPID = '0819004d5d111c6827274ee2ef9efa22';

const renderWeather = function (data) {
  const html = `<article class="weather">
  <div class="weather__data">
    <img
      class="weather__img"
      src="http://openweathermap.org/img/w/${data.weather[0].icon}.png"
    />
    <div>
      <h3 class="weather__name">${data.name}</h3>
      <h4 class="weather__clouds">${data.weather[0].description}</h4>
      <p class="weather__row">
        <span>🌡 อุณหภูมิ</span>${data.main.temp}&#176;C
      </p>
      <p class="weather__row">
        <span>💦 ความชื้น</span>${data.main.humidity}&#37;
      </p>
      <p class="weather__row">
        <span>🌎 ความกด</span>${data.main.pressure} hPa
      </p>
      <p class="weather__row">
        <span>💨 ความเร็วลม</span>${data.wind.speed} km/h
      </p>
      <p class="weather__row">
        <span>🧭 ทิศทางลม</span>${data.wind.deg}&#176;
      </p>
    </div>
  </div>
</article>`;

  weatherContainer.insertAdjacentHTML('beforeend', html);
  // weatherContainer.style.opacity = 1;
};

const renderError = function (msg) {
  weatherContainer.insertAdjacentText('beforeend', msg);
  // weatherContainer.style.opacity = 1;
};

const getWeatherData = function (city) {
  fetch(
    `https://geocode.xyz/Chiang+Mai?json=1&auth=487327233257414499510x10195`
  )
    .then(response => response.json())
    .then(data => {
      const { latt, longt } = data;
      return fetch(
        `${weatherHost}?lat=${latt}&lon=${longt}&APPID=${APPID}&units=Metric&lang=th`
      );
    })
    .then(response => response.json())
    .then(data => renderWeather(data))
    .catch(err => {
      console.error(`${err} 💥💥💥`);
      renderError(`Something went wrong 💥💥 ${err.message}. Try again!`);
    })
    .finally(() => {
      weatherContainer.style.opacity = 1;
    });
};

btn.addEventListener('click', () => {
  getWeatherData('Chiang+Mai');
});

// 1. 1. The "https://api.openweathermap.org/geo/1.0/direct" API uses the name of the country to get the information including the location that we use to get the weather data. However,  we will use another Web API. Modify the weather code by replacing the 'https://api.openweathermap.org/geo/1.0/direct' with the new Geoparsing API (API Doc: https://geocode.xyz/api) to get the location instesd, For example, the AJAX call will be called to the URL with this format: 'https://geocode.xyz/Chiang+Mai?json=1'. Use the fetch API and promises to get the data.

// 2. The response data from Geoparsing API include the information that succeeded or failed with that API call using the following code to check the error and throw an exception:

// ```
//   if (!response.ok)
//     throw new Error(`Something went wrong (${response.status})`);
// ```

// you can use `console.log(response)` to see the details.

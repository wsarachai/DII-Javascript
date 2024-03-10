'use strict';

const btn = document.querySelector('.btn-weather');
const weatherContainer = document.querySelector('.weathers');

///////////////////////////////////////
const weatherHost = 'http://api.openweathermap.org/data/2.5/weather';
const APPID = '0819004d5d111c6827274ee2ef9efa22';
const city = 'Chiang Mai';

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
  weatherContainer.style.opacity = 1;
};

const getPosition = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

const renderError = function (err) {
  const html = `<article class="weather">💥💥💥 ${err}</article>`;
  weatherContainer.insertAdjacentHTML('beforeend', html);
  weatherContainer.style.opacity = 1;
};

const getWeatherData = async function () {
  try {
    const pos = await getPosition();
    const { latitude: lat, longitude: lon } = pos.coords;
    const response = await fetch(
      `${weatherHost}?lat=${lat}&lon=${lon}&APPID=${APPID}&units=Metric&lang=th`
    );
    const data = await response.json();
    renderWeather(data);
  } catch (err) {
    console.log(err.message);
    renderError(err.message);
  }
};

// btn.addEventListener('click', getWeatherData);

btn.addEventListener('click', () => {
  Promise.race([getWeatherData(), getWeatherData()]);
});

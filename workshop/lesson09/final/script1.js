'use strict';

const weatherContainer = document.querySelector('.weathers');

///////////////////////////////////////
const host = 'http://api.openweathermap.org/data/2.5/weather';
const APPID = '0819004d5d111c6827274ee2ef9efa22';

const getWeatherData = function (lat, lon) {

  //https://geocode.xyz/Chiang+Mai?json=1&auth=487327233257414499510x10195

  const request = new XMLHttpRequest();
  const url = `${host}?lat=${lat}&lon=${lon}&APPID=${APPID}&units=Metric&lang=th`;

  request.open('GET', `${url}`);
  request.send();

  request.addEventListener('load', function () {
    const data = JSON.parse(request.responseText);
    console.log(data);
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
  });
};

document.querySelector('.btn-weather').addEventListener('click', function () {
  getWeatherData(18.89927, 99.012103);
  //getWeatherData(53.43097000735902, -2.9608300018337403);
  //getWeatherData(18.800889885253508, 98.9503662691891);
});

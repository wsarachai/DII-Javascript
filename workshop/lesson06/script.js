'use strict';

const btn = document.querySelector('.btn-weather');
const weatherContainer = document.querySelector('.weathers');

const weatherHost = 'http://api.openweathermap.org/data/2.5/weather';
const APPID = '8d3d35a90ed56ca9bbbd9114d29314ad';

///////////////////////////////////////
const getWeatherData = (lat, lon) => {
  const request = new XMLHttpRequest();

  const url = `${weatherHost}?lat=${lat}&lon=${lon}&APPID=${APPID}&units=Metric&lang=th`;
  request.open('GET', `${url}`);
  request.send();

  request.addEventListener('load', function () {
    const data = JSON.parse(request.responseText);
    const html = `<article class="weather">
  <div class="weather__data">
    <img class="country__img"
         src="http://openweathermap.org/img/w/${data.weather[0].icon}.png"/>
    <div>
      <h3 class="weather__name">${data.name}</h3>
      <h4 class="weather__clouds">${data.weather[0].description}</h4>
      <p class="weather__row"><span>🌡 อุณหภูมิ</span>${data.main.temp}&#176;C</p>
      <p class="weather__row"><span>💦 ความชื้น</span>${data.main.pressure}&#37;</p>
      <p class="weather__row"><span>🌎 ความกด</span>${data.main.humidity} hPa</p>
      <p class="weather__row"><span>💨 ความเร็วลม</span>${data.wind.speed} km/h</p>
      <p class="weather__row"><span>🧭 ทิศทางลม</span>${data.wind.deg}&#176;</p>
    </div>
  </div>
</article>`;
    weatherContainer.insertAdjacentHTML('beforeend', html);
    weatherContainer.style.opacity = 1;
  });
};

btn.addEventListener('click', () => {
  getWeatherData(18.89927, 99.012103);
  getWeatherData(53.432031109710564, -2.9608300022781577);
});

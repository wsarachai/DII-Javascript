'use strict';

const btn = document.querySelector('.btn-weather');
const weatherContainer = document.querySelector('.weathers');

///////////////////////////////////////
const weatherHost = 'http://api.openweathermap.org/data/2.5/weather';
const APPID = '8d3d35a90ed56ca9bbbd9114d29314ad';

const positions = [
  { lat: 18.89927, lon: 99.012103 },
  { lat: 53.43097000735902, lon: -2.9608300018337403 },
  { lat: 18.800889885253508, lon: 98.9503662691891 },
];

const getJSON = function (url, errorMsg = 'Something went wrong') {
  return fetch(url).then((response) => {
    if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);
    return response.json();
  });
};

const timeout = function (sec) {
  return new Promise(function (_, reject) {
    setTimeout(() => reject(new Error('Request take too long!')), sec);
  });
};

const getWeathers = async function () {
  const { lat: lat1, lon: lon1 } = positions[0];
  const { lat: lat2, lon: lon2 } = positions[1];
  const { lat: lat3, lon: lon3 } = positions[2];

  let data = await Promise.race([
    getJSON(
      `${weatherHost}?lat=${lat1}&lon=${lon1}&APPID=${APPID}&units=Metric&lang=th`
    ),
    getJSON(
      `${weatherHost}?lat=${lat2}&lon=${lon2}&APPID=${APPID}&units=Metric&lang=th`
    ),
    getJSON(
      `${weatherHost}?lat=${lat3}&lon=${lon3}&APPID=${APPID}&units=Metric&lang=th`
    ),
    timeout(1000),
  ]);
  console.log(data.name);
};

// getWeathers();

// const weather1 = await getJSON(
//   `${weatherHost}?lat=${lat1}&lon=${lon1}&APPID=${APPID}&units=Metric&lang=th`
// );
// const weather2 = await getJSON(
//   `${weatherHost}?lat=${lat2}&lon=${lon2}&APPID=${APPID}&units=Metric&lang=th`
// );
// const weather3 = await getJSON(
//   `${weatherHost}?lat=${lat3}&lon=${lon3}&APPID=${APPID}&units=Metric&lang=th`
// );
// const stations = [weather1.name, weather2.name, weather3.name];
// console.log(stations);

Promise.allSettled([
  Promise.resolve('Success'),
  Promise.reject('ERROR'),
  Promise.resolve('Another success'),
])
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

Promise.any([
  Promise.resolve('Success'),
  Promise.reject('ERROR'),
  Promise.resolve('Another success'),
])
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

Promise.any([
  Promise.reject('ERROR1'),
  Promise.reject('ERROR2'),
  Promise.resolve('Another success'),
])
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

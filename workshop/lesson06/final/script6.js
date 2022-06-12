'use strict';

const imgContrainer = document.querySelector('.images');

const wait = function (second) {
  return new Promise(function (reslove) {
    setTimeout(reslove, second * 1000);
  });
};

////////////////////////////////////////
const createImage = function (imgPath) {
  return new Promise(function (resolve, reject) {
    const img = document.createElement('img');
    img.src = imgPath;

    img.addEventListener('load', function () {
      imgContrainer.append(img);
      resolve(img);
    });

    img.addEventListener('error', function () {
      reject(new Error('Image not found!'));
    });
  });
};

let currentImg;

createImage('img/img-1.jpg')
  .then((img) => {
    currentImg = img;
    console.log('Image 1 is loaded.');
    return wait(2);
  })
  .then(() => {
    currentImg.style.display = 'none';
    return createImage('img/img-2.jpg');
  })
  .then((img) => {
    currentImg = img;
    console.log('Image 2 is loaded.');
    return wait(2);
  })
  .then(() => {
    currentImg.style.display = 'none';
  })
  .catch((err) => {
    console.log(err);
  });

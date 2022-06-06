'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////
const renderError = function (msg) {
    countriesContainer.insertAdjacentText('beforeend', msg)
    countriesContainer.style.opacity = 1;
}
const renderCountry = function (data, className = '') {
    const html = `
    <article class="country  ${className}">
    <img class="country__img" src="${data.flag}" />
    <div class="country__data">
      <h3 class="country__name">${data.name}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(1)}</p >
      <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
      <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
    </div >
  </article >
    `;
    countriesContainer.insertAdjacentHTML('beforeend', html)
    countriesContainer.style.opacity = 1;
}
// //AJAX call country 1 // // AJAX CALL: XMLHttpRequest
// const getCountryDataAndNeighbor = function (country) {
//     const request = new XMLHttpRequest();
//     request.open('GET', `https://restcountries.com/v2/name/${country}`);
//     request.send();
//     console.log(request.responseText);
//     request.addEventListener('load', function () {
//         const [data] = JSON.parse(this.responseText);
//         console.log(data);
//         //Render country 1
//         renderCountry(data)
//         //Get neighbor country (2)
//         const [neighbour] = data.borders;

//         if (!neighbour) return;
//         const request2 = new XMLHttpRequest();
//         request2.open('GET', `https://restcountries.com/v2/alpha/${neighbour}`);
//         request2.send();

//         request2.addEventListener('load', function () {
//             const data2 = JSON.parse(this.responseText);
//             console.log(data2);
//             renderCountry(data2, 'neighbour')
//         })
//     })
// }
// // getCountryDataAndNeighbor('portugal')
// getCountryDataAndNeighbor('usa')
// // callback hell
// setTimeout(() => {
//     console.log('1 second passed');
//     setTimeout(() => {
//         console.log('2 second passed');
//         setTimeout(() => {
//             console.log('3 second passed');
//             setTimeout(() => {
//                 console.log('4 second passed');
//             }, 1000);
//         }, 1000);
//     }, 1000);
// }, 1000);

// Promise: An object that is used as a placeholder for the future result of an asynchronous operation

// Promise: A container of an asynchronously delivered value-- less formal => A container for a future value
const request = fetch(`https://restcountries.com/v2/name/portugal`)
console.log(request)

//before the                Asynchronous
// value is                 task
// available                has finished
// Pending ===ASYNC==TASK=> Settled => 1. fulfileld or 2. rejected   
/// Consume Promuse => When we already have a promise e.g. promise returned from Fetch Api

// const getCountryData = function (country) {
//     fetch(`https://restcountries.com/v2/name/${country}`)
//         .then(function (
//             response) {
//             console.log(response)
//             return response.json()
//         })
//         .then(function (data) {
//             console.log(data);
// renderCountry(data[0])
//         })
// }
const getJSON = function (url, errorMsg = 'Something went wrong') {
    return fetch(url).then(response => {
        if (!response.ok) {
            throw new Error(`${errorMsg} ${response.status}`)
        }
        return response.json()
    })
}
const getCountryData = function (country) {
    getJSON(`https://restcountries.com/v2/name/${country}`)
        .then(response => {

        })
        .then(data => {
            renderCountry(data[0])
            const neighbour = data[0].borders[1];
            console.log(data)
            if (!neighbour) {
                return;
            }
            return (fetch(`https://restcountries.com/v2/alpha/${neighbour}`))
        })
        .then(response => response.json())
        .then(data => {
            renderCountry(data, 'neighbour')
            const neighbour = data.borders[2];
            console.log(data)
            return (fetch(`https://restcountries.com/v2/alpha/${neighbour}`))
        })
        .then(response => response.json())
        .then(data => {
            renderCountry(data, 'neighbour')
            const neighbour = data.borders[0];
            return (fetch(`https://restcountries.com/v2/alpha/${neighbour}`))
        })
        .then(response => response.json())
        .then(data => renderCountry(data, 'neighbour'))
        .catch(err => {
            console.error(`${err}`);
            renderError(`Something went wrong ${err.message}`)
        })
        .finally(() => {
            countriesContainer.style.opacity = 1;
        })
}
btn.addEventListener('click', function () {
    getCountryData('Bulgaria')
})

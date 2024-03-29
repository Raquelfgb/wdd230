
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('.weathericon');
const captionDesc = document.querySelector('figcaption');
const windSpeed = document.querySelector("#speed");

const url = "https://api.openweathermap.org/data/2.5/forecast?q=Carlsbad&appid=37fd08a06ee97b04543c99aacac46d0d&units=imperial";

async function apiFetch() {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      console.log(data);
      displayResults(data);
    } else {
        throw Error(await response.text());
    }
  } catch (error) {
      console.log(error);
  }

}

apiFetch();

function  displayResults(weatherData) {
    currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}</strong>`;
    windSpeed.innerHTML = `<strong>${weatherData.wind.speed.toFixed(0)}</strong>`;
    const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const desc = weatherData.weather[0].description;
  
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = desc;
  }

apiFetch();
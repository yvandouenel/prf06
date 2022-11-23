import config from "./config.js";
import createMarkup from "./utils.js";

const form = document.querySelector('form');
form.onsubmit = async function (e) {
  e.preventDefault();
  const cityName = document.getElementById("cityName").value;
  console.log(cityName);
  const coordinates = await getCityCoordinate(cityName);
  const weather = await getWeather(coordinates);
  render(weather);
}

const getCityCoordinate = async name => {
  try {
    const response = await fetch(`${config.baseUrl}/geo/1.0/direct?q=${name}&limit=1&appid=${config.apiKey}`);
    if (response.ok) {
      const data = await response.json();
      console.log(data);
      return { longitude: data[0].lon, latitude: data[0].lat };
    } else {
      throw new Error('Erreur survenue, statut : ' + response.status);
    }
  } catch (error) {
    console.error(error);
  }
}

const getWeather = async coordinates => {
  try {
    const response = await fetch(`${config.baseUrl}/data/2.5/weather?lat=${coordinates.latitude}&lon=${coordinates.longitude}&appid=${config.apiKey}&units=metric&lang=fr`);
    if (response.ok) {
      return await response.json();
    } else {
      throw new Error('Erreur survenue, statut : ' + response.status)
    }
  } catch (error) {
    console.error(error);
  }
}

const render = weather => {
  console.log(weather);
  // http://openweathermap.org/img/wn/10d@2x.png
  createMarkup('p', weather.name, document.body);
  createMarkup('p', 'Température actuelle : ' + weather.main.temp, document.body);
  createMarkup('p', 'Température minimale : ' +weather.main.temp_min, document.body);
  createMarkup('p', 'Température maximale : ' +weather.main.temp_max, document.body);
  createMarkup('p', weather.weather[0].description, document.body);
}


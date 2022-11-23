const config = {
  baseUrl: 'http://api.openweathermap.org',
  apiKey: '88d72bc7f30bc91056f03d28dbc993b9'
}

const form = document.querySelector('form');
form.onsubmit = async function (e) {
  e.preventDefault();
  const cityName = document.getElementById("cityName").value;
  console.log(cityName);
  const coordinates = await getCityCoordinate(cityName);
  getWeather(coordinates);
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
    const response = await fetch(`${config.baseUrl}/data/2.5/weather?lat=${coordinates.latitude}&lon=${coordinates.longitude}&appid=${config.apiKey}`);
    if (response.ok) {
      return await response.json();
    } else {
      throw new Error('Erreur survenue, statut : ' + response.status)
    }
  } catch (error) {
    console.error(error);
  }
}


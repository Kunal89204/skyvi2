let search = document.getElementById("search");
const ico = document.querySelector(".fa-solid");
let temp = document.querySelector(".temp-c");
let loc = document.querySelector(".loc");
let country = document.querySelector(".country");
let time = document.querySelector(".time");
let condition = document.querySelector(".condition");
let bg = document.querySelector(".bg");
let wind_speed = document.querySelector(".wind-speed")
let wind_dir = document.querySelector(".wind-direction")
let humidity = document.querySelector(".humidity")

const fetchdata = () => {
  const apiKey = "bc6cdf98ec47468598142603231609";
  const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${search.value}`;

  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      temp.innerHTML = data.current.temp_c + "&#176;C";
      loc.textContent = data.location.name;
      time.textContent = data.location.localtime;
      country.textContent = data.location.country;
      wind_dir.innerHTML = data.current.wind_dir;
      wind_speed.innerHTML = data.current.wind_kph + " km/h";
      humidity.innerHTML = data.current.humidity;

      let climate = data.current.condition.text;
      condition.textContent = climate;

      if (climate.toLowerCase().includes("clear")) {
        bg.style.background = 'url("/img/clear.avif")';
      } else if (climate.toLowerCase().includes("sunny")) {
        bg.style.background = 'url("/img/sunny.avif")';
      } else if (climate.toLowerCase().includes("partly cloudy")) {
        bg.style.background = 'url("/img/cloudy.jpg")';
      } else if (climate.toLowerCase().includes("snow")) {
        bg.style.background = 'url("/img/snow.avif")';
      } else if (climate.toLowerCase().includes("cloud")) {
        bg.style.background = 'url("/img/cloudy.jpg")';
      } else if (climate.toLowerCase().includes("mist")) {
        bg.style.background = 'url("/img/mist.jpg")';
      } else if (climate.toLowerCase().includes("thunder")) {
        bg.style.background = 'url("/img/thor.jpg")';
      } else if (climate.toLowerCase().includes("freez")) {
        bg.style.background = 'url("/img/freezing-fog.jpg")';
      }

      bg.style.backgroundRepeat = "no-repeat";
      bg.style.backgroundSize = "100% 100%";
    });
};

ico.addEventListener("click", fetchdata);

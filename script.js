const fetchdata = () => {
    const apiKey = 'bc6cdf98ec47468598142603231609';
    const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=new york&aqi=yes`;
  
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
}

fetchdata();



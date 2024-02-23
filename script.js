const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "a44a425510mshee6f076d09a61cap1b6863jsn6553d2979bec",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};
const getWeather = (city) => {
  cityName.innerHTML = city;
  console.log(city, " city ");
  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city,
    options
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      //cloud_pct.innerHTML = response.cloud_pct;
      temp.innerHTML = response.temp;
      temp2.innerHTML = response.temp;
      feels_like.innerHTML = response.feels_like;
      humidity.innerHTML = response.humidity;
      humidity2.innerHTML = response.humidity;
      min_temp.innerHTML = response.min_temp;
      max_temp.innerHTML = response.max_temp;
      wind_speed.innerHTML = response.wind_speed;
      wind_speed2.innerHTML = response.wind_speed;
      wind_degrees.innerHTML = response.wind_degrees;
      sunrise.innerHTML = response.sunrise;
      sunset.innerHTML = response.sunset;
    })
    .catch((err) => console.error(err));
};

getWeather("New York");

//when you enter in search field to get data
submit.addEventListener("click", (e) => {
  e.preventDefault();
  getWeather(city.value);
});

//need data for other common cities
//call getWheter api for those cities -> data
// show that data in table
function getDataForOtherCities(city) {
  // const city = "Shanghai";
  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city,
    options
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response, "  data for other cities");
      let table_body = document.getElementById("table_body");
      
      let tr_tag = document.createElement("tr");
      table_body.appendChild(tr_tag);
      
      const th_tag = document.createElement("th");
      tr_tag.appendChild(th_tag);

      th_tag.innerText = city;

      for (let key in response) {
        let value = response[key];
        const td_tag = document.createElement("td");
        td_tag.innerText = value;
        //append
        tr_tag.classList.add('text-start')
        tr_tag.appendChild(td_tag);
      }
    })
    .catch((err) => console.error(err));
}

// getDataForOtherCities("Shanghai");
const cities = ["Shanghai","Boston","Lucknow","Kolkata","Jabalpur"];
cities.forEach((city)=>{
  getDataForOtherCities(city);
})
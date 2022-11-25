import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  constructor() { }
   Gweather(cityName:string) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=4d8fb5b93d4af21d66a2948710284366&units=metric`)
     .then(response => response.json())
     .then(data => {
       const { main, name, sys, weather } = data;
       const icon = `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${
         weather[0]["icon"]
       }.svg`;
       const cityWeather = document.createElement("div");
       cityWeather.classList.add("city");
       const markup = `
         <h6 class="city-name" data-name="${name},${sys.country}">
           <span>${name}</span>
           <sup>${sys.country}</sup>
         </h6>
         <div class="city-temp">${Math.round(main.temp)}<sup>°C</sup></div>
         <figure>
           <img class="city-icon" src="${icon}" alt="${
         weather[0]["description"]
       }">
           <figcaption>${weather[0]["description"]}</figcaption>
         </figure>
       `;
       cityWeather.innerHTML = markup;
       document.querySelector(".ajax-section")?.appendChild(cityWeather);
     })
     .catch(() => {
      console.log("Please search for a valid city 😩");
     });
  }



  ngOnInit(): void {
    this.Gweather("hadera");
    this.Gweather("new york");
    this.Gweather("london");
    this.Gweather("paris");
  }
}





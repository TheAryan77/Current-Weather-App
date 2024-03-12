const apikey = "7fb70194c7919725f75bff82e023856b"
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="

const searchbox = document.querySelector(".search input")
const searchbtn = document.querySelector(".search button")
const weathericon = document.querySelector(".weather-icon")
async function checkWeather(city){
    const response = await fetch(apiurl + city +`&appid=${apikey}`)

    if(response.status == 404){
        document.querySelector(".error").style.display = "block"
        document.querySelector(".weather").style.display = "none"
    }
    else{
        document.querySelector(".error").style.display = "none"
    var data = await response.json()
    console.log(data)
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/hr";
    if(data.weather[0].main == "Clouds"){
        weathericon.src = "clouds.png"
    }
    else if(data.weather[0].main == "Clear"){
        weathericon.src = "clear.png"
    }
    else if(data.weather[0].main == "Rain"){
        weathericon.src = "Rain.png"
    }
    else if(data.weather[0].main == "Snow"){
        weathericon.src = "Snow.png"
    }
    else if(data.weather[0].main == "Drizzle"){
        weathericon.src = "drizzle.png"
    }
    else if(data.weather[0].main == "Haze"){
        weathericon.src = "Mist.png"
    }
    document.querySelector(".weather").style.display = "block"
}
}
searchbtn.addEventListener("click",()=>{
    checkWeather(searchbox.value)

})

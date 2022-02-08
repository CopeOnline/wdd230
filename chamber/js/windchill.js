const weatherIcon = document.querySelector(".wIcon")
const iconDesc = document.querySelector(".iconDesc")
const localtemp = document.querySelector(".temp")
const wSpeed = document.querySelector(".windSpeed")
const wChill = document.querySelector(".windChill")


async function getWeather() {
    const response = await fetch("https://api.openweathermap.org/data/2.5/weather?q=Shoshone,ID,USA&units=imperial&APPID=da28ef0488cf8a1538d20c2db5897dd8");
    let data = await response.json()

    let newTemp = data['main']['temp']
    let icon = data['weather'][0]['icon'];
    let desc = data['weather'][0]['description'];
    let speed = data['wind']['speed']

    weatherIcon.src = `https://openweathermap.org/img/wn/${icon}@2x.png`;
    weatherIcon.alt = `open weather map API icon: ${desc}`;
    iconDesc.textContent = desc.toUpperCase()

    currentTemp = Math.round(newTemp)
    localtemp.textContent += `${currentTemp}`;

    currentspeed = Math.round(speed)
    wSpeed.textContent = `${currentspeed} mph`

    if (newTemp <= 50 && speed > 3.0) {
        chill = 35.74 + (0.6215*newTemp) - (35.75*speed**0.16) + (0.4275*newTemp*speed**0.16)
        chill = Math.round(chill)
        wChill.textContent = `Feels like ${chill}`
    }else {
        console.log('variable out of range')
    }
    }
    
getWeather();









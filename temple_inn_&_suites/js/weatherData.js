const weatherIcon = document.querySelector(".wIcon")
const iconDesc = document.querySelector(".iconDesc")
const localtemp = document.querySelector(".temp")
const humidity = document.querySelector(".humidity")

const apiInfo = "https://api.openweathermap.org/data/2.5/onecall?lat=38.984653&lon=-77.094711&exclude=hourly,minutely&units=imperial&APPID=da28ef0488cf8a1538d20c2db5897dd8"

let data, newTemp, weekday = [], icon, desc;


async function getWeather() {
    const response = await fetch(apiInfo);
    data = await response.json()
    console.log(data)
    return data

}    

const fillData = async () => {
    await getWeather();
    newTemp = data.current.temp
    humid = data.current.humidity

    let currentTemp = Math.round(newTemp)
    localtemp.textContent += `${currentTemp}`;
    humidity.textContent = `${humid} %`

    return newTemp
    }

const getIconDesc = async () => {
    await fillData();
    icon = data.current.weather[0].icon;
    desc = data.current.weather[0].description;

    iconData = imgDetails(icon, desc)
    weatherIcon.src = iconData[0];
    weatherIcon.alt = iconData[1];
    iconDesc.textContent = desc.toUpperCase()
    return icon
} 

const getForecast = async () => {
    await getIconDesc();
    getDay();
    for (let i=0; i < 3; i++) {
        
        let dayName= weekday[i];
        let num = i + 1
        let container = document.createElement('div');
        container.setAttribute('class', `${dayName}`)
        document.querySelector('div.threeday').appendChild(container);

        let day = document.createElement('h2');
        let image = document.createElement('img');
        let dayTemp = document.createElement('p');

        day.textContent = `${dayName}`;
        dayTemp.innerHTML = `${Math.round(data.daily[num].temp.day)}&#176;F `;

        let forecastIcon = data.daily[num].weather[0].icon;
        let forecastText = data.daily[num].weather.desc;
        forecastImg = imgDetails(forecastIcon, forecastText)

        image.setAttribute('src', forecastImg[0]);
        image.setAttribute('alt', forecastImg[1]);

        container.appendChild(day);
        container.appendChild(image);
        container.appendChild(dayTemp);
    
    }
  }
const getDay = () => {
    for (let i=1; i < 4; i++) {
        const dateObject = new Date(data.daily[i].dt * 1000 )
        const forecastOptions = {weekday: 'long'}
        let forecastDay = dateObject.toLocaleString('en-US', forecastOptions)
        weekday.push(forecastDay)

        const alertOptions = {weekday: 'long', month: "long", day: "numeric", year: "numeric", hour: "numeric", minute: "numeric", second: "numeric", timeZoneName: "short" }
    }
    return weekday
}

const imgDetails = () => {
    let imgIcon = `https://openweathermap.org/img/wn/${icon}@2x.png`;
    let imgText = `openweathermap.com API icon: ${desc}`;

    return [imgIcon, imgText]
}

const getAlerts = async () => {
    await getForecast();

    if (JSON.stringify(data).includes("alerts")) {
        console.log("yes")
        console.log(data)
    }else {
    console.log("no")
    console.log(data)
}
}



  
window.addEventListener('load', getAlerts());









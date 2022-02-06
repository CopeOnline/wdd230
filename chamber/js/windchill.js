const weatherIcon = document.querySelector(".wIcon")


async function getWeather() {
    const response = await fetch("http://api.openweathermap.org/data/2.5/weather?q=Shoshone,ID,USA&units=imperial&APPID=da28ef0488cf8a1538d20c2db5897dd8");
    let data = await response.json()
    console.log(typeof(data))
    console.log(data.name)
    let icon = data['weather'][0]['icon'];

    weatherIcon.src = `http://openweathermap.org/img/wn/${icon}@2x.png`;

    
    }
    
getWeather();









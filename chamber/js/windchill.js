async function getWeather() {
    const response = await fetch("http://api.openweathermap.org/data/2.5/weather?q=Shoshone,ID,USA&units=imperial&APPID=da28ef0488cf8a1538d20c2db5897dd8");
    let data = await response.json()
    return data;
    }
getWeather().then(data => console.log(data));
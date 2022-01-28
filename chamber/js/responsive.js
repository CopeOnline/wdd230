const d = new Date();
let year = d.getFullYear();
const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
let day = weekday[d.getDay()];
let monthname = month[d.getMonth()];

document.querySelector(".currentyear").textContent += `${year}`;

const lastupdate = document.querySelector(".lastupdated");
lastupdate.textContent += `Last Updated: ${document.lastModified}`;

document.querySelector(".todaysDate").textContent = `${day}, ${d.getDay()} ${monthname} ${year}`;
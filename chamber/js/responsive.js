
const d = new Date();
let year = d.getFullYear();
const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
let day = weekday[d.getDay()];
let monthName = month[d.getMonth()];

document.querySelector(".currentyear").textContent += `\u00A9 ${year} GS Chamber`;

const lastupdate = document.querySelector(".lastupdated");
lastupdate.textContent += `Last Modification: ${document.lastModified}`;

let tempDate = `${d.getDate()} ${monthName} ${year}`

document.querySelector(".todaysDate").textContent = `${day}, ${tempDate}`;

function toggleMenu(){
    document.getElementById("menu").classList.toggle("open");
    document.getElementById("hamBtn").classList.toggle("open");
}

const x = document.getElementById("hamBtn");
x.onclick = toggleMenu;

function hiddenDate() {
    const time = [d.getHours(), d.getMinutes(), d.getSeconds()];
    let currentTime = `${time[0]}:${time[1]}:${time[2]}`
    let tempDate = `${d.getDate()} ${monthName} ${year}, ${currentTime}`
    document.getElementById("todayDate").value = tempDate;
}

function gridView() {
    let listView = document.getElementsByTagName('section');
    for (let i=0; i < listView.length; i++) {
        listView[i].className = listView[i].className.replace("list", "grid");
        }
    }
    
function listView() {
    let listView = document.getElementsByTagName('section');    
    for (let i=0; i < listView.length; i++) {
        listView[i].className = listView[i].className.replace("grid", "list");
        }
    }

const gridBtn = document.getElementById("grid");
gridBtn.onclick = gridView;

const listBtn = document.getElementById("list");
listBtn.onclick = listView;
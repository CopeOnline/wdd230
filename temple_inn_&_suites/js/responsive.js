
const d = new Date();
let year = d.getFullYear();
let day = weekday[d.getDay()];

const lastupdate = document.querySelector(".lastupdated");
lastupdate.textContent += `Updated: ${document.lastModified}`;

function toggleMenu(){
    document.getElementById("menu").classList.toggle("open");
    document.getElementById("hamBtn").classList.toggle("open");
}

const x = document.getElementById("hamBtn");
x.onclick = toggleMenu;



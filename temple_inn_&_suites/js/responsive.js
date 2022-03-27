
const d = new Date();
let year = d.getFullYear();
let day = weekday[d.getDay()];

const lastupdate = document.querySelector(".lastupdated");
lastupdate.textContent += `Updated: ${document.lastModified}`;

function toggleMenu(){
    document.getElementById("menu").classList.toggle("open");
    document.getElementById("hamBtn").classList.toggle("open");
    
}

function toggleContact(){
    document.getElementById("contact").classList.toggle("open");
    document.getElementById("phoneBtn").classList.toggle("open");
    
}

function toggleNotice(){
    document.getElementById("danger").classList.toggle("open");
    document.getElementById("closeAlert").classList.toggle("close");
    
}

const x = document.getElementById("hamBtn");
x.onclick = toggleMenu;

const y = document.getElementById("phoneBtn");
y.onclick = toggleContact;

const z = document.getElementById("closeAlert");
z.onclick = toggleNotice;



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


const x = document.getElementById("hamBtn");
x.onclick = toggleMenu;

const y = document.getElementById("phoneBtn");
y.onclick = toggleContact;



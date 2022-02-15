
const visits = document.querySelector(".visitor");

let today = Date.now();
let numVisits = Number(localStorage.getItem("visits"));
let lastVisit = localStorage.getItem('dateVisited');

if (numVisits !== 0) {
    localStorage.setItem("dateVisited", today);
}else {
    localStorage.setItem('visits', 1)
    localStorage.setItem("dateVisited", today);
}

numVisits++

localStorage.setItem('visits', numVisits)

let difference = today - lastVisit

let msPerDay = 86400000

let daysBwtnVisits = Math.round(difference / msPerDay)

visits.textContent = daysBwtnVisits

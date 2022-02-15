
const visits = document.querySelector(".visitor");

let msPerDay = 86400000
let today = Date.now();
let numVisits = Number(localStorage.getItem("visits"));
let lastVisit = localStorage.getItem('dateVisited');
let daysBwtnVisits;

if (numVisits !== 0) {
    localStorage.setItem("dateVisited", today);
    let difference = today - lastVisit
    daysBwtnVisits = Math.round(difference / msPerDay)
}else {
    localStorage.setItem('visits', 1)
    localStorage.setItem("dateVisited", today);
    daysBwtnVisits = 0

}

numVisits++

localStorage.setItem('visits', numVisits)

visits.textContent = daysBwtnVisits

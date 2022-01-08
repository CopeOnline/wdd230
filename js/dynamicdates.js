const d = new Date();
let year = d.getFullYear();

document.querySelector(".currentyear").textContent += ` ${year} | Larry E. Copeland Jr | Idaho`;

const lastupdate = document.querySelector(".lastupdated");
lastupdate.textContent = `Last Updated: ${document.lastModified}`;
const d = new Date();
let year = d.getFullYear();

document.querySelector(".currentyear").textContent += ` ${year}  |  Larry E. Copeland Jr  |  Idaho`;

const lastupdate = document.querySelector(".lastupdated");
lastupdate.textContent = `Document was last updated: ${document.lastModified}`;
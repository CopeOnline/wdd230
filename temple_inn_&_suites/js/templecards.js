
let templeNum = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight']
let num = 0
const requestFilePath = 'json/temples.json';

fetch(requestFilePath)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) { 

    const temples = jsonObject['temples'];
   
    temples.forEach(displayTemples);
  });

function displayTemples(temple) { 
    const card = document.querySelector(`section.${templeNum[num]}`);
    const h2 = document.querySelector('h2');
    const image = document.querySelector(`img.${templeNum[num]}`);
    const status = document.querySelector("p.status");
    const phone = document.querySelector("p.phone");
    const address = document.querySelector("p.address");
    const button = document.querySelector(`button.like`);
    const detail = document.querySelector(`button.expand`);
    const ordinances = document.querySelector("p.ordinances");
    const service = document.querySelector("ul.localServices");
    const closed = document.querySelector("ul.closures");

    h2.textContent = `${temple.name}`;
    image.setAttribute('src', temple.src);
    image.setAttribute('alt', `Portrait of ${temple.name}`);
    image.setAttribute('width', '400')
    image.setAttribute('height', '250')
    image.setAttribute('loading', 'lazy');
    status.textContent = `${temple.status}`
    phone.textContent = `${temple.telephone}`;
    address.textContent = `${temple.address}`;
    ordinances.textContent = `${temple.ordinances}`;

    localServices = temple.services.split(",")
    for (let i=0; i < localServices.length; i++) {
        const li = document.createElement("li")
        li.textContent = `${localServices[i]}`;
        service.appendChild(li)
        card.appendChild(service)
    }

    templeClosed = temple.closures.split("*")
    for (let i=0; i < templeClosed.length; i++) {
        const li = document.createElement("li")
        li.textContent = `${templeClosed[i]}`;
        closed.appendChild(li)
        card.appendChild(closed)
    }

    className = temple.name.split(" ")
    button.classList.add(`${className[0]}`)
    detail.setAttribute('id', `${templeNum[num]}`)
 
    card.appendChild(image);
    card.appendChild(button);
    card.appendChild(h2);
    card.appendChild(phone);
    card.appendChild(address);
  
    
    document.querySelector('main.temples').appendChild(card);
    num += 1
  }


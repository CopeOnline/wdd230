const requestTemple = 'json/temples.json';
let int

 fetch(requestTemple)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) { 
    
    const temples = jsonObject['temples'];
    
    getTemple(temples)    
    prepareSummary()
    displaySummary(temples);

  });

function getTemple(temples){
    int = getRandomInt(temples.length)    
    
    return int
}

function getRandomInt(max) {
    int = Math.floor(Math.random() * max);

    return int
}

function prepareSummary(){
    let container = document.createElement('div');
    container.setAttribute('class', 'temple')
    document.querySelector('div.summary').appendChild(container);

}

function displaySummary(temples) { 

    let card = document.createElement('section');
    let image = document.createElement('img');
    let h3 = document.createElement('h3');
    let templeStatus = document.createElement('p');
    let address = document.createElement('p');
    let phone = document.createElement('p');
    

    h3.textContent = `${temples[int].name}`;
    templeStatus.textContent = `${temples[int].status}`;
    address.textContent = `${temples[int].address}`;
    phone.textContent = `${temples[int].telephone}`;
    image.setAttribute('src', temples[int].src);
    image.setAttribute('alt', `${temples[int].name}`);

    card.appendChild(h3);
    card.appendChild(image);
    card.appendChild(templeStatus);
    card.appendChild(address);
    card.appendChild(phone);

    services = temples[int].services.split(",")
    console.log(services)
    for (let i=0; i < services.length; i++) {
        let service = document.createElement('p');
        service.textContent = `${services[i]}`;
        card.appendChild(service)
    }


    document.querySelector('div.summary').appendChild(card);
  }

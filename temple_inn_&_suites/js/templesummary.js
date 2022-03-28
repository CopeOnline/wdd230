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
    let h3 = document.createElement('h2');
    let templeStatus = document.createElement('p');
    let address = document.createElement('p');
    let phone = document.createElement('p');
    

    h3.textContent = `${temples[int].name}`;
    templeStatus.textContent = `Status: ${temples[int].status}`;
    address.textContent = `Address: ${temples[int].address}`;
    phone.textContent = `Phone: ${temples[int].telephone}`;
    image.setAttribute('src', temples[int].src);
    image.setAttribute('alt', `${temples[int].name}`);
    image.setAttribute('loading', 'lazy')

    card.appendChild(h3);
    card.appendChild(image);
    card.appendChild(templeStatus);
    card.appendChild(phone);
    card.appendChild(address);
    

    document.querySelector('div.summary').appendChild(card);
  }

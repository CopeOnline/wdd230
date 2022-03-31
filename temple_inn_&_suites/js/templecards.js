
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
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let birthDate = document.createElement('p');
    let birthPlace = document.createElement('p');
    let image = document.createElement('img');

    h2.textContent = `${temple.name}`;
    image.setAttribute('src', temple.src);

    image.setAttribute('alt', `Portrait of ${temple.name}`);
    image.setAttribute('width', '400')
    image.setAttribute('height', '250')
    image.setAttribute('loading', 'lazy');
 
    card.appendChild(image);
    card.appendChild(h2);

    document.querySelector('main.temples').appendChild(card);
  }


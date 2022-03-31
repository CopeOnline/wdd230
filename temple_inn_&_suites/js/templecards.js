
let templeNum = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight']
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
    let image = document.createElement('img');
    let button = document.createElement('button');
    let chckbox = document.createElement("INPUT");
    let label = document.createElement('label')
    label.setAttribute('for', 'likeTemple')
    chckbox.setAttribute("type", "checkbox");
    chckbox.setAttribute('id', 'likeTemple');
    chckbox.setAttribute('class', `${temple.name}`);
    label.textContent = 'Like';
    

    h2.textContent = `${temple.name}`;
    image.setAttribute('src', temple.src);
    image.setAttribute('alt', `Portrait of ${temple.name}`);
    image.setAttribute('width', '400')
    image.setAttribute('height', '250')
    image.setAttribute('loading', 'lazy');

    button.textContent = 'More...'
    button.setAttribute('class', 'templeInfo')
 
    card.appendChild(image);
    card.appendChild(h2);
    card.appendChild(button)
    card.appendChild(label)
    card.appendChild(chckbox)
    

    document.querySelector('main.temples').appendChild(card);
  }


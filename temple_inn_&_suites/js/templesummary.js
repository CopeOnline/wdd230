const requestTemple = 'json/temples.json';
let value = false
let website = ''

 fetch(requestTemple)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) { 
    
    const temples = jsonObject['temples'];
    
    prepareSummary()
    console.log(temples)
    temples.forEach(displaySummary);

  });



function prepareSummary(){
    let container = document.createElement('div');
    container.setAttribute('class', 'temple')
    document.querySelector('div.summary').appendChild(container);

}

function displaySummary(temples) { 
    let card = document.createElement('section');
    let image = document.createElement('img');
    let h3 = document.createElement('h3');
    let address = document.createElement('p');
    let phone = document.createElement('p');
    

    h3.textContent = `${temples.name}`;
    address.textContent = `${temples.address}`;
    phone.textContent = `${temples.phone}`;
    image.setAttribute('src', temples.src);
    image.setAttribute('alt', `${temples.name}`);
    card.appendChild(image);
    card.appendChild(h3);
    card.appendChild(address);
    card.appendChild(phone);

    document.querySelector('div.summary').appendChild(card);
  }

// let view

// function gridView() {
//     view = document.getElementsByTagName('div');
//     for (let i=0; i < view.length; i++) {
//         view[i].className = view[i].className.replace("list", "grid");
//           }    
//       }
      
// function listView() {
//     view = document.getElementsByTagName('div');    
//     for (let i=0; i < view.length; i++) {
//         view[i].className = view[i].className.replace("grid", "list");
//           }
//       }
  
// const gridBtn = document.getElementById("grid");
// gridBtn.onclick = gridView;
  
// const listBtn = document.getElementById("list");
// listBtn.onclick = listView;
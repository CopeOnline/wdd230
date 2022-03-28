
function displaySummary(temples) { 

    let card = document.createElement('section');
    let image = document.createElement('img');
    let h3 = document.createElement('h3');
    let templeStatus = document.createElement('p');
    let address = document.createElement('p');
    let phone = document.createElement('p');
    let servicesh3 = document.createElement('h3');
    

    h3.textContent = `${temples[int].name}`;
    templeStatus.textContent = `Status: ${temples[int].status}`;
    address.textContent = `Address: ${temples[int].address}`;
    phone.textContent = `Phone: ${temples[int].telephone}`;
    image.setAttribute('src', temples[int].src);
    image.setAttribute('alt', `${temples[int].name}`);
    image.setAttribute('loading', 'lazy')
    servicesh3.textContent = "Local Services: "

    card.appendChild(h3);
    card.appendChild(image);
    card.appendChild(templeStatus);
    card.appendChild(address);
    card.appendChild(phone);
    card.appendChild(servicesh3);


services = temples[int].services.split(",")
for (let i=0; i < services.length; i++) {
    let service = document.createElement('p');
    service.textContent = `${services[i]}`;
    card.appendChild(service)


    document.querySelector('div.summary').appendChild(card);
}}
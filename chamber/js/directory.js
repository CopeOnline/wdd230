
const requestURL = 'js/data.json';
let value = false
let website = ''

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) { 
    
    const directory = jsonObject['directory'];
    console.log(directory)
    directory.forEach(displaydirectory);
  });


function displayCompanyWebsite(listing, value) {
    for  (const property in listing) {
        if (property == "website") {
            value = true
            website = document.createElement('p');
            website.textContent = `${listing.website}`;
            return {website, value}
            }   
    console.log(value)
    }
}


function displaydirectory(listing) {  // Create elements to add to the document
    let card = document.createElement('section');
    let image = document.createElement('img');
    let h2 = document.createElement('h2');
    let address = document.createElement('p');
    let phone = document.createElement('p');
    let website = displayCompanyWebsite(listing, value)
    
      // Change the textContent property of the h2 element to contain the listing's full name
    h2.textContent = `${listing.name}`;
    address.textContent = `${listing.address}`;
    phone.textContent = `${listing.phone}`;
    image.setAttribute('src', listing.logo);
    // Add/append the section(card) with the h2 element
    card.appendChild(image);
    card.appendChild(h2);
    card.appendChild(address);
    card.appendChild(phone);

    console.log(value)

    if (value = true) {
        card.appendChild(website.website);
    }

    console.log(website.website)
    
    
    // Add/append the existing HTML div with the cards class with the section(card)
    document.querySelector('div.directory').appendChild(card);
  }


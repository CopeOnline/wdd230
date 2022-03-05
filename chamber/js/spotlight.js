const requestFile = 'json/data.json';
let value = false
let website = ''

fetch(requestFile)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) { 
    
    const directory = jsonObject['directory'];
    
    directory.forEach(displaydirectory);
  });


function displayCompanyWebsite(listing, value) {
for  (const property in listing) {
    if (property == "website") {
        value = true
        website = document.createElement('a');
        website.setAttribute('href', `${listing.website}`)
        website.textContent = 'Website';
        return {website, value};
        }   
    };
return {website, value};
}




  function displaydirectory(listing) { 
    console.log('working')
  }
const requestFile = 'json/data.json';
let value = false
let website = ''
let directory


function getRandomInt(max) {
    let intOne = Math.floor(Math.random() * max);
    let intTwo = Math.floor(Math.random() * max);
    let intThree = Math.floor(Math.random() * max);

    return {intOne, intTwo, intThree}
  }

function fetchData (directory){
    fetch(requestFile)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) { 
    
    directory = jsonObject['directory'];

    getSpotlightMembers(directory)
  });
}

function getSpotlightMembers(directory){
    const newDir = directory.filter(memberStatus);

    const int = getRandomInt(newDir.length)    
    
    displaydirectory(newDir, int);
}

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

function displaydirectory(listing, int) {
    
    let website = displayCompanyWebsite(listing, value)
    console.log(listing)
    console.log(int)
  }

function memberStatus(dir){
    return dir["membership"] == "gold" || dir["membership"] == "silver"

}

fetchData()


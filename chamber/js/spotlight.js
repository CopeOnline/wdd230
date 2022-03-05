const requestFile = 'json/data.json';
let value = false
let website = ''
let directory


function getRandomInt(max) {
    let int = []
    for (let i = 0; i < 3; i++) {
        ts = Math.floor(Math.random() * max);
        int.push(ts)
        console.log(ts)
    }
    console.log(int)
    return int
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
    let spotOne = listing[int[0]]
    let spotTwo = listing[int[1]]
    let spotThree = listing[int[2]]

    let website = displayCompanyWebsite(listing, value)
    console.log(listing)
    console.log(int[0])
    console.log(spotOne)
    console.log(spotTwo)
    console.log(spotThree)
  }

function memberStatus(dir){
    return dir["membership"] == "gold" || dir["membership"] == "silver"

}

fetchData()


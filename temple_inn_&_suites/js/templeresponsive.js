
function toggleLikeOne(){
    let checkLike = localStorage.getItem('one');
    if (checkLike === null || checkLike == ''){
        localStorage.setItem('one', 'like')
    }else if (checkLike == 'like'){
        localStorage.setItem('one', '')
    }else {
        localStorage.setItem('one', 'like')
    }
    document.getElementById('likeOne').classList.toggle("open");
}
function toggleLikeTwo(){
    let checkLike = localStorage.getItem('two');
    if (checkLike === null || checkLike == ''){
        localStorage.setItem('two', 'like')
    }else if (checkLike == 'like'){
        localStorage.setItem('two', '')
    }else {
        localStorage.setItem('two', 'like')
    }
    document.getElementById('likeTwo').classList.toggle("open");
}
function toggleLikeThree(){
    let checkLike = localStorage.getItem('three');
    if (checkLike === null || checkLike == ''){
        localStorage.setItem('three', 'like')
    }else if (checkLike == 'like'){
        localStorage.setItem('three', '')
    }else {
        localStorage.setItem('three', 'like')
    }
    document.getElementById('likeThree').classList.toggle("open");
}
function toggleLikeFour(){
    let checkLike = localStorage.getItem('four');
    if (checkLike === null || checkLike == ''){
        localStorage.setItem('four', 'like')
    }else if (checkLike == 'like'){
        localStorage.setItem('four', '')
    }else {
        localStorage.setItem('four', 'like')
    }
    document.getElementById('likeFour').classList.toggle("open");
}
function toggleLikeFive(){
    let checkLike = localStorage.getItem('five');
    if (checkLike === null || checkLike == ''){
        localStorage.setItem('five', 'like')
    }else if (checkLike == 'like'){
        localStorage.setItem('five', '')
    }else {
        localStorage.setItem('five', 'like')
    }
    document.getElementById('likeFive').classList.toggle("open");
}
function toggleLikeSix(){
    let checkLike = localStorage.getItem('six');
    if (checkLike === null || checkLike == ''){
        localStorage.setItem('six', 'like')
    }else if (checkLike == 'like'){
        localStorage.setItem('six', '')
    }else {
        localStorage.setItem('six', 'like')
    }
    document.getElementById('likeSix').classList.toggle("open");
}
function toggleLikeSeven(){
    let checkLike = localStorage.getItem('seven');
    if (checkLike === null || checkLike == ''){
        localStorage.setItem('seven', 'like')
    }else if (checkLike == 'like'){
        localStorage.setItem('seven', '')
    }else {
        localStorage.setItem('seven', 'like')
    }
    document.getElementById('likeSeven').classList.toggle("open");
}
function toggleLikeEight(){
    let checkLike = localStorage.getItem('eight');
    if (checkLike === null || checkLike == ''){
        localStorage.setItem('eight', 'like')
    }else if (checkLike == 'like'){
        localStorage.setItem('eight', '')
    }else {
        localStorage.setItem('eight', 'like')
    }
    document.getElementById('likeEight').classList.toggle("open");
}

const one = document.getElementById("likeOne");
one.onclick = toggleLikeOne;

const two = document.getElementById("likeTwo");
two.onclick = toggleLikeTwo;

const three = document.getElementById("likeThree");
three.onclick = toggleLikeThree;

const four = document.getElementById("likeFour");
four.onclick = toggleLikeFour;

const five = document.getElementById("likeFive");
five.onclick = toggleLikeFive;

const six = document.getElementById("likeSix");
six.onclick = toggleLikeSix;

const seven = document.getElementById("likeSeven");
seven.onclick = toggleLikeSeven;

const eight = document.getElementById("likeEight");
eight.onclick = toggleLikeEight;


if (localStorage.getItem('one') == 'like') {
    document.getElementById('likeOne').classList.toggle("open");
}if (localStorage.getItem('two') == 'like') {
    document.getElementById('likeTwo').classList.toggle("open");
}if (localStorage.getItem('three') == 'like') {
    document.getElementById('likeThree').classList.toggle("open");
}if (localStorage.getItem('four') == 'like') {
    document.getElementById('likeFour').classList.toggle("open");
}if (localStorage.getItem('five') == 'like') {
    document.getElementById('likeFive').classList.toggle("open");
}if (localStorage.getItem('six') == 'like') {
    document.getElementById('likeSix').classList.toggle("open");
}if (localStorage.getItem('seven') == 'like') {
    document.getElementById('likeSeven').classList.toggle("open");
}if (localStorage.getItem('eight') == 'like') {
    document.getElementById('likeEight').classList.toggle("open");
}




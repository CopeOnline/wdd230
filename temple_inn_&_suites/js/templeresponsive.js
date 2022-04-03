
function toggleLikeOne(){
    let checkLike = localStorage.getItem('one');
    if (checkLike === null || checkLike == ''){
        localStorage.setItem('one', 'like')
    }else if (checkLike == 'like'){
        localStorage.setItem('one', '')
    }else {
        localStorage.setItem('one', 'like')
    }
    document.getElementById('likeOne').classList.toggle("liked");
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
    document.getElementById('likeTwo').classList.toggle("liked");
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
    document.getElementById('likeThree').classList.toggle("liked");
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
    document.getElementById('likeFour').classList.toggle("liked");
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
    document.getElementById('likeFive').classList.toggle("liked");
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
    document.getElementById('likeSix').classList.toggle("liked");
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
    document.getElementById('likeSeven').classList.toggle("liked");
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
    document.getElementById('likeEight').classList.toggle("liked");
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
    document.getElementById('likeOne').classList.toggle("liked");
}if (localStorage.getItem('two') == 'like') {
    document.getElementById('likeTwo').classList.toggle("liked");
}if (localStorage.getItem('three') == 'like') {
    document.getElementById('likeThree').classList.toggle("liked");
}if (localStorage.getItem('four') == 'like') {
    document.getElementById('likeFour').classList.toggle("liked");
}if (localStorage.getItem('five') == 'like') {
    document.getElementById('likeFive').classList.toggle("liked");
}if (localStorage.getItem('six') == 'like') {
    document.getElementById('likeSix').classList.toggle("liked");
}if (localStorage.getItem('seven') == 'like') {
    document.getElementById('likeSeven').classList.toggle("liked");
}if (localStorage.getItem('eight') == 'like') {
    document.getElementById('likeEight').classList.toggle("liked");
}

function toggleShow(list) {
    if (list.classList.contains('show')) {
        list.classList.remove('show');
        list.classList.add('hide');
        if (list.classList.contains('showBtn')) {
            list.classList.remove('hide');
            list.classList.add('show');  
        }
    }else {
        list.classList.add('show');
        list.classList.remove('hide');
        if (list.classList.contains('showBtn')) {
            list.classList.remove('show');
            list.classList.add('hide');  
        }

    }
}



function toggleDetailOne(){
    document.getElementById('statsOne').classList.toggle("show");
    const list = document.querySelectorAll('.tplOne');
    list.forEach(toggleShow)
}
function toggleDetailTwo(){
    document.getElementById('statsTwo').classList.toggle("show");
    const list = document.querySelectorAll('.tplTwo');
    list.forEach(toggleShow)
}
function toggleDetailThree(){
    document.getElementById('statsThree').classList.toggle("show");
    const list = document.querySelectorAll('.tplThree');
    list.forEach(toggleShow)
}
function toggleDetailFour(){
    document.getElementById('statsFour').classList.toggle("show");
    const list = document.querySelectorAll('.tplFour');
    list.forEach(toggleShow)
}
function toggleDetailFive(){
    document.getElementById('statsFive').classList.toggle("show");
    const list = document.querySelectorAll('.tplFive');
    list.forEach(toggleShow)
}
function toggleDetailSix(){
    document.getElementById('statsSix').classList.toggle("show");
    const list = document.querySelectorAll('.tplSix');
    list.forEach(toggleShow)
}
function toggleDetailSeven(){
    document.getElementById('statsSeven').classList.toggle("show");
    const list = document.querySelectorAll('.tplSeven');
    list.forEach(toggleShow)
}
function toggleDetailEight(){
    document.getElementById('statsEight').classList.toggle("show");
    const list = document.querySelectorAll('.tplEight');
    list.forEach(toggleShow)
}


const oneDetail = document.getElementById("statsOne");
oneDetail.onclick = toggleDetailOne;

const twoDetail = document.getElementById("statsTwo");
twoDetail.onclick = toggleDetailTwo;

const threeDetail = document.getElementById("statsThree");
threeDetail.onclick = toggleDetailThree;

const fourDetail = document.getElementById("statsFour");
fourDetail.onclick = toggleDetailFour;

const fiveDetail = document.getElementById("statsFive");
fiveDetail.onclick = toggleDetailFive;

const sixDetail = document.getElementById("statsSix");
sixDetail.onclick = toggleDetailSix;

const sevenDetail = document.getElementById("statsSeven");
sevenDetail.onclick = toggleDetailSeven;

const eightDetail = document.getElementById("statsEight");
eightDetail.onclick = toggleDetailEight;


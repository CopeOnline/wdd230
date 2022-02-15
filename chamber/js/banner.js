function toggleBanner(){
    document.getElementById("banner").classList.toggle("open");
}

if (d.getDay() == 1) {
    toggleBanner();
}
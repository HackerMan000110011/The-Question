function moveRandomEl(elm) {
    elm.style.position = "absolute"
    elm.style.top = Math.floor(Math.random() * -220 + 20) + "%";
    elm.style.left = Math.floor(Math.random() * -200 + 50) + "%";
}

const moveRandom = document.querySelector("#move-random");

moveRandom.addEventListener('mouseover', function (e) {
    moveRandomEl(e.target);
});
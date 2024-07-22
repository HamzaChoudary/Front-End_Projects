let animatetext = document.querySelector('#textarea');
let text = "My thoughts on technology and business, welcome to subscribe";

let i = 0;
let speed = 80;

function animate() {
    animatetext.textContent = text.substring(0, i)
    i++;
    setTimeout(animate, speed);
}

animate();
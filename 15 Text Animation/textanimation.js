const animationtext = document.querySelector('.animation-text');

// console.log(animationtext.textContent);

const text = "Worlds simplest online text line.";

// for (let i=0; i<text.length; i++ ) {
//     console.log(text.substring(0,1));
//     setTimeout(() => {
//     animationtext.textContent = text.substring(0,1);
//     }, 200);
// };

console.log(text.length);

let i = 0;
let speed = 50;


function animate() {
    animationtext.textContent = text.substring(0,1);
    i++;
    // console.log(i);

    if( i < text.length){
        i = 0;
    }setTimeout(() => {
        animate();
    }, speed);
}

animate();

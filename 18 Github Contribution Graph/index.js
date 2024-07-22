const count = document.querySelector(".container");
// console.log(count);

let square_count = 365;

const colors = ["green", "white", "yellow", "lightgreen", "Darkgreen","pink" ,"bluevoilet"]

function randomC(colors){
     return colors [Math.floor(Math.random()*colors.length)];
}

for(let i = 0; i < 365; i++){
    const square = document.createElement("div");
    square.classList.add("square")
    square.style.backgroundColor = randomC(colors);
    count.appendChild(square)
    document.getElementById("result").innerText = randomC(colors);
}

console.log(result);
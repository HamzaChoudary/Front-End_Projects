const container = document.querySelector(".container");
const no_of_square = 500;
const colors = ["red", "green", "white", "yellow","blue", "violet", "pink", "orange",
     "aliceblue", "aqua", "beige", "bisque", "Brown", "Purple", "AcidGreen", "Cyan", "Magenta"];

function randomC(colors){
    return colors [Math.floor(Math.random()*colors.length)];
}

function setColor(element){
    element.style.backgroundColor = randomC(colors)
}

function unsetColor(element){
    element.style.backgroundColor = "#1d1d1d"
    element.style.boxShadow = "0 0 2px rgba(0, 0, 0, 0.3)"
}
 
for (let i = 0; i <no_of_square; i++) {
     const square = document.createElement("div");
     square.classList.add("square");
     square.addEventListener("mouseover", () => {
        setColor(square);
     })
     square.addEventListener("mouseout", () =>{
        unsetColor(square);
     })
     container.appendChild(square);
}
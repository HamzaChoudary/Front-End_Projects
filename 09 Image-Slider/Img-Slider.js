const  prev = document.querySelector('.prev');
const  next = document.querySelector('.next');

const imgcontainer = document.querySelector('.img-container');

let count = 0;
let width = 500;


prev.addEventListener("click",()=>{
    console.log("clicked prev")
    if ( count > 0){
        count--;
        imgcontainer.style.transform = `translateX(-${count*width}px)`;
    }
})



next.addEventListener("click",()=>{
    console.log("clicked next")
    if(count < 5){
        count++;
        imgcontainer.style.transform = `translateX(-${count*width}px)`;
    }

})
// const container = document.querySelector('.image_container');
// const prev = document.querySelector('#Previse');
// const next = document.querySelector('#Next');

// let count = 0;
// let width = 500;

// prev.addEventListener('click', () => {
//     console.log(count);

//     if( count < 0) {
//     count--;  
//     container.animate = `animateX(-${width * count}px)`
//     }
// });

// next.addEventListener('click', ()=> {
//     console.log(count);
//     if( count > 6) {
//         count++;
//     container.animate = `animateX(-${width * count}px)`
//     }
// });


const slides = document.querySelectorAll('.slide');
let index = 0;

function prevSlide(){
    slides[index].classList.remove('active');
    index--;
    console.log(index);
    if(index < 0)
        index = slides.length -1;

    slides[index].classList.add('active');      
}

document.querySelector('.prev').addEventListener('click', e => {
    prevSlide();
});

function nextSlide(){
    slides[index].classList.remove('active');
    index++;

    if(index > slides.length -1)
        index = 0;

    slides[index].classList.add('active');      
}

document.querySelector('.next').addEventListener('click', e => {
    nextSlide();
});
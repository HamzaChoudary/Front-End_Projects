const loadingbar = document.querySelector(".loading-Bar");
const percentage = document.querySelector(".percentage");



window.addEventListener('DOMContentLoaded', () => {
    
    let progress = 0;

    setInterval(() => {
        if( progress < 100 ){
            progress++;
            loadingbar.style.width = `${progress}%`
            percentage.textContent = `${progress}%`
        }
    }, 20) 
})
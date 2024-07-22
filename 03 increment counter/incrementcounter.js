const counters = document.querySelectorAll('#Counter');

console.log(counters);

counters.forEach(counter => {
    counter.innerText = '0';
    let target = +counter.getAttribute('data-target');
    console.log(target);
    let inc = target / 20;
    let count = 0;
    function incrementcounter() {
        if (count < target) {
            // count++;
            count = target + inc;
            counter.innerHTML = count;
            setInterval(incrementcounter, 50);
        } else {
            counter.innerHTML = target;
        }
    }
        incrementcounter();
});












// const counters = document.querySelectorAll('.counter');

// console.log(counters)

// counters.forEach(counter => {
//     counter.innerHTML = '0';
//     let target = +counter.getAttribute('data-target');
//     console.log(target)
//     // let inc = target / 20;
//     let count = 0;
//     function incrementcounter(){
//         if( count < target){
//             count++;
//             // count = count + inc;
//             counter.innerHTML = count;
//             setInterval(incrementcounter, 1);
//         }else{
//             counter.innerHTML = target;
//         }
//     }
//     incrementcounter();
// })
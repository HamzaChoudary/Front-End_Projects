let buttons = document.querySelectorAll('#button');

buttons.forEach( (button) => {
    console.log(button);
    button.addEventListener('click', (e) => {
        
        if(e.target.id === 'blue'){
            document.querySelector('body').style.backgroundColor = e.target.id;
        }
        if(e.target.id === 'grey'){
            document.querySelector('body').style.backgroundColor = e.target.id;
        }
        if(e.target.id === 'green'){
            document.querySelector('.color-container').style.backgroundColor = e.target.id;
        }
        if(e.target.id ==='yellow'){
            document.querySelector('body').style.backgroundColor = e.target.id;
        }
    });
});
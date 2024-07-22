let input = document.querySelector('.form-input');
let btn = document.querySelector(".form-btn");
let output = document.querySelector('.output');




btn.addEventListener('click', () => {
    const todo = input.Value;
    // console.log(todo)

    if(todo == ''){
        alert('please enter a todo');
        return;
    }else {
        const p = document.createElement('p');
        p.innerHTML = ` <p>${todo}</p>
          <button class="remove" onclick="removetodo(this)">Remove</button>`;
        output.appendChild(p)
        input.Value = '';
    };
});

function removetodo(element){
    element.parentNode.remove();
};
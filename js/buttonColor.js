let button = document.querySelector('#buttonRipple');

function changeColor(event){
    if(event.target.style.backgroundColor === "orange"){
        event.target.style.backgroundColor = "cornflowerblue";
    } else {
        event.target.style.backgroundColor = "orange";
    }
}

button.addEventListener('click', changeColor);


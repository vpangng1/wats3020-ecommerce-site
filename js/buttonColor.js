//javascript for changing the checkout button color when clicked

let button = document.querySelector('#color-changer');

function changeColor(event){
    if(event.target.style.backgroundColor === "orange"){
        event.target.style.backgroundColor = "cornflowerblue";
    } else {
        event.target.style.backgroundColor = "orange";
    }
}

button.addEventListener('click', changeColor);


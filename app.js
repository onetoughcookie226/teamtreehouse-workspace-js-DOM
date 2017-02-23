


const toggleList = document.getElementById('toggleList');
const listDiv = document.querySelector('.list');
const input =document.querySelector('input.description');
const p = document.querySelector('p.description');
const button = document.querySelector('button.description');

toggleList.addEventListener('click', () => {
    listDiv.style.display = 'none';
});

button.addEventListener( 'click', () => {
    p.innerHTML= input.value + ';';
});

p.title = "list description";




const myList = document.getElementsByTagName('li');
for (let i = 0 ; i < myList.length; i +=1) {
    myList[i].style.color = 'purple';
}


const errorNotPurple = document.querySelectorAll('.error-not-purple');
for (let i = 0 ; i < errorNotPurple.length; i +=1) {
    errorNotPurple[i].style.color = 'red';
}

const evens = document.querySelectorAll('li:nth-child(odd)');
for (let i = 0 ; i < evens.length; i +=1) {
    evens[i].style.backgroundColor = 'white';
}



const myHeading = document.getElementById('myHeading');
const myButton = document.getElementById('myButton');
const myTextInput = document.getElementById('myTextInput');

myButton.addEventListener('click', () => {
    myHeading.style.color = myTextInput.value;

});
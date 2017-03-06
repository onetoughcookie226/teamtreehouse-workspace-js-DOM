
const toggleList = document.getElementById('toggleList');
const listDiv = document.querySelector('.list');
const descriptionInput =document.querySelector('input.description');
const descriptionP = document.querySelector('p.description');
const descriptionButton = document.querySelector('button.description');
const addItemInput = document.querySelector('input.addItemInput');
const addItemButton = document.querySelector('button.addItemButton');
const removeItemButton = document.querySelector('button.removeItemButton');
const listItems = document.getElementsByTagName('li');

for (let i = 0; i < listItems.length; i += 1) {
    listItems[i].addEventListener('mouseover' , () => {
        listItems[i].textContent = listItems[i].textContent.toUpperCase();
    });
    listItems[i].addEventListener('mouseout' , () => {
        listItems[i].textContent = listItems[i].textContent.toLowerCase();
    });
}
//click button and hide list
toggleList.addEventListener('click', () => {
    if (listDiv.style.display == 'none') {
        toggleList.textContent = 'Hide list';
        listDiv.style.display = 'block';
    } else {
        toggleList.textContent = 'show list';
    listDiv.style.display = 'none';
    }
});

descriptionButton.addEventListener( 'click', () => {
    descriptionP.innerHTML= descriptionInput.value + ';';
    descriptionInput.value = '';
});

descriptionP.title = "list description";


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

// appending element

addItemButton.addEventListener('click', () => {
    let ul = document.getElementsByTagName('ul')[0];
    let li = document.createElement('li');
    li.textContent = addItemInput.value;
    ul.appendChild(li);
    addItemInput.value = '';
});

removeItemButton.addEventListener('click', () => {
    console.log("hello");
    let ul = document.getElementsByTagName('ul')[0];
    let li = document.querySelector('li:last-child');
    ul.removeChild(li);
});
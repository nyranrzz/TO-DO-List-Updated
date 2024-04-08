let btn = document.querySelector('button');
let upIcon = document.querySelector('i.up');
let downIcon = document.querySelector('i.down');
let inputPart = document.querySelector('.card-add-input');
let listPart = document.querySelector('.card-list');
let x = document.querySelector('.x');
let input = document.querySelector('input');
let span = document.querySelector('span.validation-span');
let ol = document.querySelector('ol');

let tasks = [];
let count = 0;

const deleteElement = (id) => {
    tasks.splice(id, 1);
    renderList();
}

const inputListChanger = () => {
    
    // e.preventDefault();
    if ( input.value.trim().length  ) {
        tasks.push(input.value.trim());
        renderList();
        input.value = '';
    } else {       
        input.value = '';
        span.style.display = 'block';
    }

    inputPart.classList.toggle('d-none');
    listPart.classList.remove('d-none');
}

const renderList = () => {

    ol.innerHTML = '';

    tasks.forEach((task, index) => {
        ol.innerHTML += `
            <li>
                <span class='task-inner'>${index+1}.${ task}</span>
             
              <div class='icon'>  <i class="fa-regular fa-circle-xmark delete-btn" onclick="deleteElement(${index})"></i></div>
            </li>`;
    });
}

const clearInputValue = () => {
    input.value = '';
}

const filterAZ = () => {
    tasks.sort();
    renderList();
}

const filterZA = () => {
    tasks.sort((a, b) => b.localeCompare(a));
    renderList();
}

btn.addEventListener('click', inputListChanger);
upIcon.addEventListener('click', filterZA);
downIcon.addEventListener('click', filterAZ);
x.addEventListener('click', clearInputValue);
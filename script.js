
let btn = document.querySelector('button');
let upIcon = document.querySelector('i.up');
let downIcon = document.querySelector('i.down');
let inputPart = document.querySelector('.card-add-input');
let listPart = document.querySelector('.card-list');
let x = document.querySelector('.x');
let input = document.querySelector('input');
let span = document.querySelector('span.validation-span');
let ol = document.querySelector('ol');
let filter =document.querySelector('.filter');
let tasks = [];
let count = 0;

const deleteElement = (id) => {
    tasks.splice(id, 1);
    renderList();
}

const inputListChanger = (e) => {
    
    e.preventDefault();
    if ( input.value.trim().length  ) {
        tasks.push(input.value.trim());
        renderList();
        input.value = '';
    } else {       
        input.value = '';
        span.style.display = 'block';
    }
    new Sortable(ol,{
        animation : 500,
        ghostClass : "sortable-ghost"
    })
    inputPart.classList.toggle('d-none');
    listPart.classList.remove('d-none');
}

const renderList = () => {

    ol.innerHTML = '';

    tasks.forEach((task, index) => {
        ol.innerHTML += `
            <li>
                <span class='task-inner'>${index+1}.${ task}</span>
             
              <div class='icon'><i class="fa-regular fa-circle-xmark delete-btn" onclick="deleteElement(${index})"></i></div>
            </li>`;
    });
}

const clearInputValue = () => {
    input.value = '';
}
let sortBtn= "sortUp";
filter.addEventListener('click',()=>{
    if(sortBtn==="sortUp"){
        
        filter.style.background='url(img/yuxari.png)';
        tasks.sort();
        renderList();
        sortBtn= "sortDown";
        filter.addEventListener('mouseout', (e)=>{
            e.target.style.background = "url(img/yuxarinoqara.png)"
        })
        filter.addEventListener('mouseover', (e)=>{
            e.target.style.background = "url(img/yuxari.png)"
        })
    }else{
       sortBtn ="sortUp"
        filter.style.background='url(img/asagi.png)';
        tasks.sort((a, b) => b.localeCompare(a));
        renderList();
        
        filter.addEventListener('mouseout', (e)=>{
            e.target.style.background = "url(img/asaginoqara.png)"
        })
        filter.addEventListener('mouseover', (e)=>{
            e.target.style.background = "url(img/asagi.png)"
        })
    }
})
btn.addEventListener('click', inputListChanger);
x.addEventListener('click', clearInputValue);
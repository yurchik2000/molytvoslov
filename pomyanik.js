const addName = document.querySelector('.btn__addName');
const editName = document.querySelector('.btn__editName');

let nameList = document.querySelector('.names__list');

const newName = document.querySelector('.input__name');

newName.addEventListener('keypress', (event) => {
    if (event.keyCode === 13 && activeIndex === -1 && newName.value.length) addNewName();      
    if (event.keyCode === 13 && activeIndex !== -1 && newName.value.length) editNameIndex();      
})

let zdravList = [];
let activeIndex = -1;

editName.addEventListener('click', editNameIndex);

addName.addEventListener('click', addNewName);

function addNewName() {
 const name = newName.value;
 if (name.length) {
    // console.log(name);
    zdravList.push(name);    
    nameList = document.querySelector('.names__list');    
    let nameItem = document.createElement("li");
    nameItem.dataset.index = zdravList.length - 1;
    nameItem.classList.add('nameItem');
    
    let nameItemText = document.createElement("p");
    nameItemText.textContent = name;     

    let btnDeleteName = document.createElement("button");
    btnDeleteName.classList.add('btn__delete');
    btnDeleteName.classList.add('hide');
    btnDeleteName.textContent = " X ";

    let btnEditName = document.createElement("button");    
    btnEditName.classList.add('btn__edit');    
    btnEditName.classList.add('hide');
    btnEditName.textContent = " Edit ";                

    nameItem.appendChild(nameItemText);
    nameItem.appendChild(btnDeleteName);
    nameItem.appendChild(btnEditName);

    nameList.appendChild(nameItem);        
    // console.log(nameList);    
    localStorage.setItem('zdravList', JSON.stringify(zdravList));    
    newName.value = '';
 } 
}

function getZdravList() {
    zdravList = JSON.parse(localStorage.getItem('zdravList'));
    if (!zdravList) zdravList = [];
    // console.log(zdravList);
    renderZdravList(zdravList)
}

function renderZdravList(zdravList) {        
    for (let i = 0; i < zdravList.length; i++) {
        let nameItem = document.createElement("li");
        nameItem.classList.add('nameItem');
        nameItem.dataset.index = i;

        let nameItemText = document.createElement("p");
        nameItemText.textContent = zdravList[i]; 

        let btnDeleteName = document.createElement("button");
        btnDeleteName.classList.add('btn__delete');
        btnDeleteName.classList.add('hide');
        btnDeleteName.textContent = " X ";

        let btnEditName = document.createElement("button");
        btnEditName.classList.add('btn__edit');        
        btnEditName.classList.add('hide');                
        btnEditName.textContent = " Edit ";

        nameItem.appendChild(nameItemText);
        nameItem.appendChild(btnDeleteName);
        nameItem.appendChild(btnEditName);
        nameList.appendChild(nameItem);
    }
    document.querySelector('.zdrav__title').after(nameList);    
}

getZdravList();

document.querySelector('.names__list').addEventListener('click', ()=> {
    let target = event.target;    
    // console.log(event.target);
    if (target.tagName === "P") {        
        target.nextSibling.classList.toggle('hide');    
        target.nextSibling.nextSibling.classList.toggle('hide');    
    }    
    if (target.tagName === "BUTTON" && target.className === "btn__delete") {
        let newList = target.parentElement.parentElement;
        target.parentElement.remove();
        let data = newList.querySelectorAll('li>p');        
        activeIndex = target.parentElement.dataset.index;
        zdravList.splice(activeIndex, 1);
        if (document.querySelector('.names__list')) document.querySelector('.names__list').textContent = '';        
        renderZdravList(zdravList);        
        localStorage.setItem('zdravList', JSON.stringify(zdravList));            
    };    
    if (target.tagName === "BUTTON" && target.className === "btn__edit") {
        editName.classList.toggle('hide');
        addName.classList.toggle('hide');
        target.classList.add('hide');
        target.previousSibling.classList.add('hide');
        newName.value = target.previousSibling.previousSibling.textContent;
        activeIndex = target.parentElement.dataset.index;
        // console.log(activeIndex);
    };        
})

function editNameIndex() {
    const name = newName.value;        
    if (name.length) {
        zdravList[activeIndex] = name;        
        if (document.querySelector('.names__list')) document.querySelector('.names__list').textContent = '';        
        renderZdravList(zdravList);
        editName.classList.toggle('hide');
        addName.classList.toggle('hide');
        localStorage.setItem('zdravList', JSON.stringify(zdravList));
        newName.value = '';
        activeIndex = -1;
    }
}

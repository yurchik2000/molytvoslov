const addName = document.querySelector('.btn__addName');
const editName = document.querySelector('.btn__editName');
const insertName = document.querySelector('.btn__insertName');
const newName = document.querySelector('.input__name');

let mode = "add";
let nameList = document.querySelector('.names__list');
let zdravList = [];
let activeIndex = -1;

newName.addEventListener('keypress', (event) => {
    if (event.keyCode === 13 && mode === "add" && newName.value.length) addNewName();      
    if (event.keyCode === 13 && mode === "edit" && newName.value.length) editNameIndex();     
    if (event.keyCode === 13 && mode === "insert" && newName.value.length) insertNameIndex();     
})

addName.addEventListener('click', addNewName);
editName.addEventListener('click', editNameIndex);
insertName.addEventListener('click', insertNameIndex);

function insertNameIndex() {
    const name = newName.value;
    if (name.length) {        
        zdravList.splice(activeIndex, 0, name);        
        localStorage.setItem('zdravList', JSON.stringify(zdravList));
        if (document.querySelector('.names__list')) document.querySelector('.names__list').textContent = '';  
        renderZdravList(zdravList);
        editName.classList.add('hide');
        addName.classList.remove('hide');
        insertName.classList.add('hide');
        newName.value = '';
    }
}

function addNewName() {
 const name = newName.value;
 if (name.length) {    
    zdravList.push(name);

    // nameList = document.querySelector('.names__list');    
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

    let btnInsertName = document.createElement("button");    
    btnInsertName.classList.add('btn__insert');    
    btnInsertName.classList.add('hide');
    btnInsertName.textContent = " Ins ";                

    nameItem.appendChild(nameItemText);
    nameItem.appendChild(btnDeleteName);
    nameItem.appendChild(btnEditName);
    nameItem.appendChild(btnInsertName);

    nameList.appendChild(nameItem);            
    localStorage.setItem('zdravList', JSON.stringify(zdravList));    
    newName.value = '';
 } 
}

function getZdravList() {
    zdravList = JSON.parse(localStorage.getItem('zdravList'));
    if (!zdravList) zdravList = [];    
    activeIndex = zdravList.length;
    renderZdravList(zdravList)
}

function renderZdravList(zdravList) {        
    if (document.querySelector('.names__list')) document.querySelector('.names__list').textContent = '';            

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

        let btnInsertName = document.createElement("button");
        btnInsertName.classList.add('btn__insert');        
        btnInsertName.classList.add('hide');                
        btnInsertName.textContent = " Ins ";

        nameItem.appendChild(nameItemText);
        nameItem.appendChild(btnDeleteName);
        nameItem.appendChild(btnEditName);
        nameItem.appendChild(btnInsertName);
        nameList.appendChild(nameItem);
    }
    document.querySelector('.zdrav__title').after(nameList);    
    mode = "add";
}

getZdravList();

document.querySelector('.names__list').addEventListener('click', ()=> {
    let target = event.target;    

    if (target.tagName === "P") {        
        target.nextSibling.classList.toggle('hide');    
        target.nextSibling.nextSibling.classList.toggle('hide');    
        target.nextSibling.nextSibling.nextSibling.classList.toggle('hide');    
    }    
    if (target.tagName === "BUTTON" && target.className === "btn__delete") {        
        // target.parentElement.remove();        
        activeIndex = target.parentElement.dataset.index;
        zdravList.splice(activeIndex, 1);        
        renderZdravList(zdravList);        
        localStorage.setItem('zdravList', JSON.stringify(zdravList));            
    };    
    if (target.tagName === "BUTTON" && target.className === "btn__edit") {
        mode = "edit";
        editName.classList.remove('hide');
        addName.classList.add('hide');
        insertName.classList.add('hide');
        target.classList.add('hide');
        target.previousSibling.classList.add('hide');
        target.nextSibling.classList.add('hide');
        newName.value = target.previousSibling.previousSibling.textContent;
        activeIndex = target.parentElement.dataset.index;
        newName.focus();
    };        
    if (target.tagName === "BUTTON" && target.className === "btn__insert") {
        mode = "insert";
        editName.classList.add('hide');
        addName.classList.add('hide');
        insertName.classList.remove('hide');        
        target.classList.add('hide');
        target.previousSibling.classList.add('hide');
        target.previousSibling.previousSibling.classList.add('hide');        
        activeIndex = Number(target.parentElement.dataset.index) + 1;
        newName.focus();        
    };        
})

function editNameIndex() {
    const name = newName.value;        
    if (name.length) {
        zdravList[activeIndex] = name;        
        renderZdravList(zdravList);
        editName.classList.toggle('hide');
        addName.classList.toggle('hide');
        localStorage.setItem('zdravList', JSON.stringify(zdravList));
        newName.value = '';
        activeIndex = zdravList.length;
    }
}

// upokoy

const addNameU = document.querySelector('.btn__addName-u');
const editNameU = document.querySelector('.btn__editName-u');
const insertNameU = document.querySelector('.btn__insertName-u');
const newNameU = document.querySelector('.input__name-u');

let modeU = "add";
let nameListU = document.querySelector('.names__list-u');
let zdravListU = [];
let activeIndexU = -1;

newNameU.addEventListener('keypress', (event) => {
    if (event.keyCode === 13 && modeU === "add" && newNameU.value.length) addNewNameU();      
    if (event.keyCode === 13 && modeU === "edit" && newNameU.value.length) editNameIndexU();     
    if (event.keyCode === 13 && modeU === "insert" && newNameU.value.length) insertNameIndexU();     
})

addNameU.addEventListener('click', addNewNameU);
editNameU.addEventListener('click', editNameIndexU);
insertNameU.addEventListener('click', insertNameIndexU);

function insertNameIndexU() {
    const name = newNameU.value;
    if (name.length) {        
        zdravListU.splice(activeIndexU, 0, name);        
        localStorage.setItem('zdravListU', JSON.stringify(zdravListU));
        if (document.querySelector('.names__list-u')) document.querySelector('.names__list-u').textContent = '';  
        renderZdravListU(zdravListU);
        editNameU.classList.add('hide');
        addNameU.classList.remove('hide');
        insertNameU.classList.add('hide');
        newNameU.value = '';
    }
}

function addNewNameU() {        
 const name = newNameU.value;
 if (name.length) {    
    zdravListU.push(name);

    let nameItem = document.createElement("li");
    nameItem.dataset.index = zdravListU.length - 1;
    nameItem.classList.add('nameItem');
    
    let nameItemText = document.createElement("p");
    nameItemText.textContent = name;     

    let btnDeleteName = document.createElement("button");
    btnDeleteName.classList.add('btn__delete-u');
    btnDeleteName.classList.add('hide');
    btnDeleteName.textContent = " X ";

    let btnEditName = document.createElement("button");    
    btnEditName.classList.add('btn__edit-u');    
    btnEditName.classList.add('hide');
    btnEditName.textContent = " Edit ";                

    let btnInsertName = document.createElement("button");    
    btnInsertName.classList.add('btn__insert-u');    
    btnInsertName.classList.add('hide');
    btnInsertName.textContent = " Ins ";                

    nameItem.appendChild(nameItemText);
    nameItem.appendChild(btnDeleteName);
    nameItem.appendChild(btnEditName);
    nameItem.appendChild(btnInsertName);
    
    nameListU.appendChild(nameItem);            
    localStorage.setItem('zdravListU', JSON.stringify(zdravListU));    
    newNameU.value = '';
 } 
}

function getZdravListU() {
    zdravListU = JSON.parse(localStorage.getItem('zdravListU'));
    if (!zdravListU) zdravListU = [];    
    activeIndexU = zdravListU.length;
    renderZdravListU(zdravListU)
}

function renderZdravListU(zdravListU) {                
    if (document.querySelector('.names__list-u')) document.querySelector('.names__list-u').textContent = '';            

    for (let i = 0; i < zdravListU.length; i++) {
        let nameItem = document.createElement("li");
        nameItem.classList.add('nameItem');
        nameItem.dataset.index = i;

        let nameItemText = document.createElement("p");
        nameItemText.textContent = zdravListU[i]; 

        let btnDeleteName = document.createElement("button");
        btnDeleteName.classList.add('btn__delete-u');
        btnDeleteName.classList.add('hide');
        btnDeleteName.textContent = " X ";

        let btnEditName = document.createElement("button");
        btnEditName.classList.add('btn__edit-u');        
        btnEditName.classList.add('hide');                
        btnEditName.textContent = " Edit ";

        let btnInsertName = document.createElement("button");
        btnInsertName.classList.add('btn__insert-u');        
        btnInsertName.classList.add('hide');                
        btnInsertName.textContent = " Ins ";

        nameItem.appendChild(nameItemText);
        nameItem.appendChild(btnDeleteName);
        nameItem.appendChild(btnEditName);
        nameItem.appendChild(btnInsertName);        
        nameListU.appendChild(nameItem);
    }
    document.querySelector('.zdrav__title-u').after(nameListU);    
    modeU = "add";
}

getZdravListU();

document.querySelector('.names__list-u').addEventListener('click', ()=> {
    let target = event.target;    

    if (target.tagName === "P") {        
        target.nextSibling.classList.toggle('hide');    
        target.nextSibling.nextSibling.classList.toggle('hide');    
        target.nextSibling.nextSibling.nextSibling.classList.toggle('hide');    
    }    
    if (target.tagName === "BUTTON" && target.className === "btn__delete-u") {                
        activeIndexU = target.parentElement.dataset.index;
        zdravListU.splice(activeIndexU, 1);        
        renderZdravListU(zdravListU);        
        localStorage.setItem('zdravListU', JSON.stringify(zdravListU));            
    };    
    if (target.tagName === "BUTTON" && target.className === "btn__edit-u") {
        modeU = "edit";
        editNameU.classList.remove('hide');
        addNameU.classList.add('hide');
        insertNameU.classList.add('hide');
        target.classList.add('hide');
        target.previousSibling.classList.add('hide');
        target.nextSibling.classList.add('hide');
        newNameU.value = target.previousSibling.previousSibling.textContent;
        activeIndexU = target.parentElement.dataset.index;
        newNameU.focus();
    };        
    if (target.tagName === "BUTTON" && target.className === "btn__insert-u") {
        modeU = "insert";
        editNameU.classList.add('hide');
        addNameU.classList.add('hide');
        insertNameU.classList.remove('hide');        
        target.classList.add('hide');
        target.previousSibling.classList.add('hide');
        target.previousSibling.previousSibling.classList.add('hide');        
        activeIndexU = Number(target.parentElement.dataset.index) + 1;
        newNameU.focus();        
    };        
})

function editNameIndexU() {
    const name = newNameU.value;        
    if (name.length) {
        zdravListU[activeIndexU] = name;        
        renderZdravListU(zdravListU);
        editNameU.classList.toggle('hide');
        addNameU.classList.toggle('hide');
        localStorage.setItem('zdravListU', JSON.stringify(zdravListU));
        newNameU.value = '';
        activeIndexU = zdravListU.length;
    }
}

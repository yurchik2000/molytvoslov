const akafistTitle = document.querySelector('.akafist__title');
const calendarTitle = document.querySelector('.calendar__title');
const prichastyaTitle = document.querySelector('.prichastya__title');
let currentDateInner = document.querySelector('.current__date');
let date = new Date();
const currentMonth = date.getMonth();
const currentDate = date.getDate();
const currentDay = date.getDay();
const monthList = ['січень', 'лютий', 'березень', 'квітень', 'травень', 'червень', 'липень', 'серпень', 'вересень', 'жовтень', 'листопад', 'грудень'];
const dayList = ['неділя','понеділок', 'вівторок','середа','четвер','п"ятниця','субота']
if (currentDateInner) currentDateInner.textContent = 'Сьогодні: ' + monthList[currentMonth] + ', ' + currentDate + ' (' + dayList[currentDay] + ')';

const december = document.querySelector('.december__list');
const february = document.querySelector('.february__list');
const march = document.querySelector('.march__list');
const april = document.querySelector('.april__list');
const may = document.querySelector('.may__list');
// if (december) {
//     for (let prop of december.childNodes) {    
//         if (prop.textContent.includes(currentDate)) {        
//             prop.classList.add('back');
//         }
//     }
// }

const january = document.querySelector('.january__list');
if (february) {
    for (let prop of january.childNodes) {                    
        if (prop.textContent.slice(0, currentDate.toString().length) == currentDate.toString()) {
            prop.classList.add('back');            
            if (prop.nextSibling.nextSibling) prop.nextSibling.nextSibling.classList.remove('hide');            
        }        
    }
}


if (akafistTitle) akafistTitle.addEventListener('click', ()=> {    
    document.querySelector('.akafist__list').classList.toggle('hide')
})

// document.querySelector('.prichastya__title')?.addEventListener('click', ()=> {    
//     document.querySelector('.prichastya__list').classList.toggle('hide')
// })

if (prichastyaTitle) prichastyaTitle.addEventListener('click', ()=> {        
    document.querySelector('.prichastya__list').classList.toggle('hide')
})
if (calendarTitle) calendarTitle.addEventListener('click', ()=> {    
    document.querySelector('.calendar__list').classList.toggle('hide')
})

document.querySelector('.october__title')?.addEventListener('click', ()=> {    
    document.querySelector('.october__list').classList.toggle('hide')
})
document.querySelector('.november__title')?.addEventListener('click', ()=> {    
    document.querySelector('.november__list').classList.toggle('hide')
})
document.querySelector('.december__title')?.addEventListener('click', ()=> {    
    document.querySelector('.december__list').classList.toggle('hide')
})
document.querySelector('.january__title')?.addEventListener('click', ()=> {    
    document.querySelector('.january__list').classList.toggle('hide')
});
document.querySelector('.february__title')?.addEventListener('click', ()=> {    
    document.querySelector('.february__list').classList.toggle('hide')
})
document.querySelector('.march__title')?.addEventListener('click', ()=> {    
    document.querySelector('.march__list').classList.toggle('hide')
})
document.querySelector('.april__title')?.addEventListener('click', ()=> {    
    document.querySelector('.april__list').classList.toggle('hide')
})
document.querySelector('.may__title')?.addEventListener('click', ()=> {    
    document.querySelector('.may__list').classList.toggle('hide')
})


document.querySelector('.chasoslov__title')?.addEventListener('click', ()=> {    
    document.querySelector('.chasoslov__list').classList.toggle('hide')
})
    
document.querySelector('.psalmy__title')?.addEventListener('click', ()=> {    
    document.querySelector('.psalmy__list').classList.toggle('hide')
})
document.querySelector('.bogosluzhbovi__title')?.addEventListener('click', ()=> {    
    document.querySelector('.bogosluzhbovi__list').classList.toggle('hide')
})
document.querySelector('.kolyadky__title')?.addEventListener('click', ()=> {    
    document.querySelector('.kolyadky__list').classList.toggle('hide')
})
document.querySelector('.pisni__title')?.addEventListener('click', ()=> {    
    document.querySelector('.pisni__list').classList.toggle('hide')
})


document.querySelector('.ukr')?.addEventListener('click', ()=> {    
    if (document.querySelector('.ukr')) document.querySelector('.ukr').classList.add('active');
    if (document.querySelector('.trans')) document.querySelector('.trans').classList.remove('active');
    if (document.querySelector('.cs')) document.querySelector('.cs').classList.remove('active');
    if (document.querySelector('.psalom__content-ukr')) document.querySelector('.psalom__content-ukr').classList.remove('hide');
    if (document.querySelector('.psalom__content-trans')) document.querySelector('.psalom__content-trans').classList.add('hide');    
    if (document.querySelector('.psalom__content-cs')) document.querySelector('.psalom__content-cs').classList.add('hide');
})

document.querySelector('.trans')?.addEventListener('click', ()=> {        
    if (document.querySelector('.ukr')) document.querySelector('.ukr').classList.remove('active');
    if (document.querySelector('.trans')) document.querySelector('.trans').classList.add('active');
    if (document.querySelector('.cs')) document.querySelector('.cs').classList.remove('active');
    if (document.querySelector('.psalom__content-ukr')) document.querySelector('.psalom__content-ukr').classList.add('hide');
    if (document.querySelector('.psalom__content-trans')) document.querySelector('.psalom__content-trans').classList.remove('hide');    
    if (document.querySelector('.psalom__content-cs')) document.querySelector('.psalom__content-cs').classList.add('hide');
})

document.querySelector('.cs')?.addEventListener('click', ()=> {
    if (document.querySelector('.cs')) document.querySelector('.cs').classList.add('active');
    if (document.querySelector('.ukr')) document.querySelector('.ukr').classList.remove('active');
    if (document.querySelector('.trans')) document.querySelector('.trans').classList.remove('active');
    if (document.querySelector('.psalom__content-ukr')) document.querySelector('.psalom__content-ukr').classList.add('hide');
    if (document.querySelector('.psalom__content-trans')) document.querySelector('.psalom__content-trans').classList.add('hide');    
    if (document.querySelector('.psalom__content-cs')) document.querySelector('.psalom__content-cs').classList.remove('hide');
})



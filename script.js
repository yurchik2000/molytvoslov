const akafistTitle = document.querySelector('.akafist__title');
const calendarTitle = document.querySelector('.calendar__title');
let currentDateInner = document.querySelector('.current__date');
let date = new Date();
const currentMonth = date.getMonth();
const currentDate = date.getDate();
const currentDay = date.getDay();
const monthList = ['січень', 'лютий', 'березень', 'квітень', 'травень', 'червень', 'липень', 'серпень', 'вересень', 'жовтень', 'листопад', 'грудень'];
const dayList = ['неділя','понеділок', 'вівторок','середа','четвер','п"ятниця','субота']
if (currentDateInner) currentDateInner.textContent = 'Сьогодні: ' + monthList[currentMonth] + ', ' + currentDate + ' (' + dayList[currentDay] + ')';

const december = document.querySelector('.december__list');
// if (december) {
//     for (let prop of december.childNodes) {    
//         if (prop.textContent.includes(currentDate)) {        
//             prop.classList.add('back');
//         }
//     }
// }

const january = document.querySelector('.january__list');
if (january) {
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


document.querySelector('.ukr')?.addEventListener('click', ()=> {    
    document.querySelector('.ukr').classList.add('active');
    document.querySelector('.trans').classList.remove('active');
    document.querySelector('.cs').classList.remove('active');
    document.querySelector('.psalom__content-ukr').classList.remove('hide');
    document.querySelector('.psalom__content-trans').classList.add('hide');    
    document.querySelector('.psalom__content-cs').classList.add('hide');
})

document.querySelector('.trans')?.addEventListener('click', ()=> {        
    document.querySelector('.ukr').classList.remove('active');
    document.querySelector('.trans').classList.add('active');
    document.querySelector('.cs').classList.remove('active');
    document.querySelector('.psalom__content-ukr').classList.add('hide');
    document.querySelector('.psalom__content-trans').classList.remove('hide');    
    document.querySelector('.psalom__content-cs').classList.add('hide');
})

document.querySelector('.cs')?.addEventListener('click', ()=> {
    document.querySelector('.cs').classList.add('active');
    document.querySelector('.ukr').classList.remove('active');
    document.querySelector('.trans').classList.remove('active');
    document.querySelector('.psalom__content-ukr').classList.add('hide');
    document.querySelector('.psalom__content-trans').classList.add('hide');    
    document.querySelector('.psalom__content-cs').classList.remove('hide');
})


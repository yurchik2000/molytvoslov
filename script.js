const akafistTitle = document.querySelector('.akafist__title');

// document.querySelector('.akafist__title').addEventListener('click', ()=> {    
//     document.querySelector('.akafist__list').classList.toggle('hide')
// })

if (akafistTitle) akafistTitle.addEventListener('click', ()=> {    
    document.querySelector('.akafist__list').classList.toggle('hide')
})

document.querySelector('.chasoslov__title')?.addEventListener('click', ()=> {    
    document.querySelector('.chasoslov__list').classList.toggle('hide')
})
    
document.querySelector('.psalmy__title')?.addEventListener('click', ()=> {    
    document.querySelector('.psalmy__list').classList.toggle('hide')
})

document.querySelector('.ukr')?.addEventListener('click', ()=> {        
    document.querySelector('.ukr').classList.toggle('active');
    document.querySelector('.trans').classList.toggle('active');
    document.querySelector('.psalov33__content-ukr').classList.toggle('hide');
    document.querySelector('.psalov33__content-trans').classList.toggle('hide');    
})

document.querySelector('.trans')?.addEventListener('click', ()=> {        
    document.querySelector('.ukr').classList.toggle('active');
    document.querySelector('.trans').classList.toggle('active');
    document.querySelector('.psalov33__content-ukr').classList.toggle('hide');
    document.querySelector('.psalov33__content-trans').classList.toggle('hide');    
})
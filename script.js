const akafistTitle = document.querySelector('.akafist__title');

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
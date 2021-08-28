const hamburger = document.querySelector('.hamburger');
const closeBtn = document.querySelector('.close');
const backdrop =  document.querySelector('.backdrop');
const navbar = document.querySelector('.large-navbar');

const showNavbarHandler = ()=>{
    navbar.classList.add('show-navbar');
    hamburger.classList.remove('d-block');
    hamburger.classList.add('d-none');
    closeBtn.classList.remove('d-none');
    closeBtn.classList.add('d-block')
    backdrop.classList.remove('d-none');
    backdrop.classList.add('d-block');
}
const hideNavbarHandler = ()=>{
    navbar.classList.remove('show-navbar');
    hamburger.classList.remove('d-none');
    hamburger.classList.add('d-block');
    closeBtn.classList.remove('d-block');
    closeBtn.classList.add('d-none')
    backdrop.classList.remove('d-block');
    backdrop.classList.add('d-none');
}
const backdropHandler = ()=>{
    navbar.classList.remove('show-navbar');
    hamburger.classList.remove('d-none');
    hamburger.classList.add('d-block');
    closeBtn.classList.remove('d-block');
    closeBtn.classList.add('d-none')
    backdrop.classList.remove('d-block');
    backdrop.classList.add('d-none');
}

hamburger.addEventListener('click', showNavbarHandler);
closeBtn.addEventListener('click', hideNavbarHandler);
backdrop.addEventListener('click', backdropHandler);
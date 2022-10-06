// shopping cart modal 

const numProducts = document.querySelector('.num-products');
const modalOverlay = document.querySelector('.modal-overlay');
const closeBtn = document.querySelector('.close-button');

numProducts.addEventListener('click', ()=> {
    modalOverlay.classList.add('active');
});


closeBtn.addEventListener('click', ()=> {
    modalOverlay.classList.remove('active');
})

// burger-menu

const burgerMenu = document.querySelector('.burger-menu');
const navLinks = document.querySelector('.nav-links');
const topLine = document.querySelector('.burger-line-top');
const bottomLine = document.querySelector('.burger-line-bottom');


burgerMenu.addEventListener('click', ()=> {
    navLinks.classList.toggle('open');
    topLine.classList.toggle('white-line');
    bottomLine.classList.toggle('white-line');
});


// faq 

const faqs = document.querySelectorAll('.faq');
const faqBottomText = document.querySelectorAll('.faq-bottom-text');
const faqIcon = document.querySelectorAll('.faq-icon');


faqs.forEach(faq => {
    faq.addEventListener('click', ()=> {
        faq.classList.toggle('clicked');
        // faqIcon.classList.toggle('clicked');
    })
});
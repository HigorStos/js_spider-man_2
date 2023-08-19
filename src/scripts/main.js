document.addEventListener('DOMContentLoaded', function() {
    const buttonViewMore = document.getElementById('gallery__button__view-more');
    const buttonHide = document.getElementById('gallery__button__hide');
    const gallery = document.querySelector('.gallery__list--is-hidden');
    const questions = document.querySelectorAll('.faq__questions__item__question');
    const toggled = document.querySelector('.faq__questions__item--is-open');
    
    for (let i = 0; i < questions.length; i++) {
        questions[i].addEventListener('click', toggleAnswer);
    }

    buttonViewMore.addEventListener('click', function() {
        buttonViewMore.classList.add('button--is-hidden');
        gallery.classList.remove('gallery__list--is-hidden');
        buttonHide.classList.remove('button--is-hidden');
    })

    buttonHide.addEventListener('click', function() {
        buttonHide.classList.add('button--is-hidden');
        gallery.classList.add('gallery__list--is-hidden');
        buttonViewMore.classList.remove('button--is-hidden');
    })
})

function toggleAnswer(e) {
    const toggleClass = 'faq__questions__item--is-open';
    const element = e.target.parentNode;

    const toggled = document.querySelector('.faq__questions__item--is-open');

    if (toggled && toggled !== element) {
        toggled.classList.remove(toggleClass);
    }

    element.classList.toggle(toggleClass);
}

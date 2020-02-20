var phoneButton = document.querySelector(".main-footer__phone-btn");
phoneButton.addEventListener('click', function(evt) {
    evt.preventDefault();
    phoneButton.classList.add('main-footer__phone-btn--show');
    phoneButton.innerHTML = '+7 (908) 824-37-11';
    phoneButton.setAttribute('href', 'tel:+79088243711');
});
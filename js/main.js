var phoneButton = document.querySelector(".main-footer__phone-btn");
phoneButton.addEventListener('click', function(evt) {
    evt.preventDefault();
    phoneButton.classList.add('main-footer__phone-btn--show');
    phoneButton.innerHTML = '+7 908 8243711';
    phoneButton.setAttribute('href', 'tel:+79088243711');
});
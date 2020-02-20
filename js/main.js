var phoneButton = document.querySelector(".main-footer__phone-btn");
var footerPhone = document.querySelector(".main-footer__phone");
phoneButton.addEventListener('click', function(evt) {
    evt.preventDefault();
    footerPhone.classList.add('main-footer__phone--shown');
});
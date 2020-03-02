// Форма связи
const contactFormOpen = document.querySelector('.contactsForm');
const formPopup = document.querySelector('.contact-form');
const formClose = document.querySelector('.close-form');
// Карта сайта
const popupMapOpen = document.querySelector('.openMap');
const mapOpen = document.querySelector('.popup-map');
const mapClose = document.querySelector('.close-map');
// Вычисления формы связи
contactFormOpen.addEventListener("click", eventForm => {
  eventForm.preventDefault();
  formPopup.classList.add('contact-form-activate');
});

formClose.addEventListener("click", eventForm => {
  eventForm.preventDefault();
  formPopup.classList.remove('contact-form-activate');
});
// Вычисления карта сайта
popupMapOpen.addEventListener("click", eventForm => {
  eventForm.preventDefault();
  mapOpen.classList.add('popup-map-activate');
});

mapClose.addEventListener("click", eventForm => {
  eventForm.preventDefault();
  mapOpen.classList.remove('popup-map-activate');
});

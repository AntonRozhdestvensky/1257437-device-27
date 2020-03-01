const contactFormOpen = document.querySelector('.contactsForm');
const formPopup = document.querySelector('.contact-form');
const formClose = document.querySelector('.close-form');

contactFormOpen.addEventListener("click", eventForm => {
  eventForm.preventDefault();
  formPopup.classList.add('contact-form-activate');
});

formClose.addEventListener("click", eventForm => {
  eventForm.preventDefault();
  formPopup.classList.remove('contact-form-activate');
});

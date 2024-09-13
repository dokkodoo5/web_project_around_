import { initialCards } from "./initialcard.js";
import { FormHandler } from "./FormValidator.js";
import { Card } from "./cards.js";
import { Popup } from "./popups.js";
import { Modal } from "./modal.js";
import { settings } from "./formsettins.js";
const profilePopup = new Popup(document.querySelector('#popup'));
const placePopup = new Popup(document.querySelector('#popupplace'));
const profileCloseButton = document.querySelector('#cerrar');
const placeCloseButton = document.querySelector('#cerrarplace');

profilePopup.setEventListeners(profileCloseButton);
placePopup.setEventListeners(placeCloseButton);

// Initialize modal
const modal = new Modal(document.getElementById('myModal'), document.getElementById('modalImage'), document.getElementById('piemodal'));
modal.setEventListeners(document.getElementById('cerrarImg'));

// Initialize forms
const profileFormHandler = new FormHandler(document.querySelector('.popup__form[name="registrer"]'), settings);
profileFormHandler.setSubmitAction((event) => {
  event.preventDefault();
  h2Person.textContent = inputNombre.value.trim();
  pCaracter.textContent = inputCaracteristica.value.trim();
  profilePopup.close();
});

const placeFormHandler = new FormHandler(document.querySelector('.popup__form[name="placeForm"]'), settings);
placeFormHandler.setSubmitAction((event) => {
  event.preventDefault();
  const title = document.getElementById('Title').value.trim();
  const url = document.getElementById('Url').value.trim();
  if (title && url) {
    const card = new Card(title, url);
    document.querySelector('.post').appendChild(card.generateCard());
    placePopup.close();
  } else {
    alert('Por favor, complete todos los campos.');
  }
});

// Render initial cards
initialCards.forEach(cardData => {
  const card = new Card(cardData.name, cardData.link);
  document.querySelector('.post').appendChild(card.generateCard());
});
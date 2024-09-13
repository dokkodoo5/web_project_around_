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

<<<<<<< HEAD
// Render initial cards
initialCards.forEach(cardData => {
  const card = new Card(cardData.name, cardData.link);
  document.querySelector('.post').appendChild(card.generateCard());
=======

function openModal(imageUrl, title) {




  modalImage.src = imageUrl;
  piemodal.textContent = title;
  modal.style.display = "block";
}



// Funciones para manejar los popups

const closeOnEsc = (evt) => {
  if (evt.key === "Escape") {
    if (popup.hasAttribute('open')) {
      popup.close();
    }
    if (popupplace.hasAttribute('open')) {
      popupplace.close();
    }
    if (modal.style.display === "block") { // Cerrar modal si está visible
      modal.style.display = "none";
    }
  }
};

// Función para cerrar popups al hacer clic fuera de ellos
const closeOnClickOutside = (event) => {
  if (event.target === popup) {
    popup.close();
  }
  if (event.target === popupplace) {
    popupplace.close();
  }
  if (event.target === modal) {
    modal.style.display = "none";
  }
};

// Asignar el evento 'keydown' para cerrar los popups con 'Escape'
document.addEventListener("keydown", closeOnEsc);

// Asignar el evento 'click' para cerrar los popups al hacer clic fuera de ellos
window.addEventListener("click", closeOnClickOutside);

// Funciones para manejar los popups

cerrarImg.addEventListener('click', () => {
  modal.style.display = "none";
  document.removeEventListener("keydown", closeOnEsc);
});

addplace.addEventListener("click", () => {
  popupplace.showModal();
  document.addEventListener("keydown", closeOnEsc);
});

cerrarplace.addEventListener("click", () => {
  popupplace.close();
  document.removeEventListener("keydown", closeOnEsc);
});

edit.addEventListener("click", () => {
  popup.showModal();
  document.addEventListener("keydown", closeOnEsc);
});

cerraredit.addEventListener("click", () => {
  popup.close();
  document.removeEventListener("keydown", closeOnEsc);
});

// Cambio de información del perfil
EditarPerfil.addEventListener('submit', function(event) {
  event.preventDefault();

  const nuevoNombre = inputNombre.value.trim();
  const nuevaCaracteristica = inputCaracteristica.value.trim();

  h2Person.textContent = nuevoNombre;
  pCaracter.textContent = nuevaCaracteristica;

  dialogPopup.close();
});

// Función para manejar los botones de corazón
document.addEventListener('DOMContentLoaded', function() {
  const heartButtons = document.querySelectorAll('.heart');

  heartButtons.forEach(function(heartButton) {
    let isHeartFull = false;

    heartButton.addEventListener('click', function() {
      const heartSymbol = this.querySelector('.heart-symbol');

      if (isHeartFull) {
        heartSymbol.innerHTML = '&#x2661;';
      } else {
        heartSymbol.innerHTML = '&hearts;';
      }

      isHeartFull = !isHeartFull;
    });
  });
>>>>>>> 3144de7ddc82983986cd2636a2c86611aeb2148a
});
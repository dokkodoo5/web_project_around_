const edit = document.querySelector('#edit');
const popup = document.querySelector('#popup');

const cerraredit = document.querySelector('#cerrar');
const addplace = document.querySelector('#newplace');
const popupplace = document.querySelector('#popupplace');
const cerrarplace = document.querySelector('#cerrarplace');
const dialogPopup = document.getElementById('popup');

const EditarPerfil = document.forms['registrer'];
const inputNombre = EditarPerfil.elements['name'];
const inputCaracteristica = EditarPerfil.elements['breed'];
const h2Person = document.getElementById('person');
const pCaracter = document.querySelector('.caracter');
const deleteButtons = document.querySelectorAll('.btnbin');
const modal = document.getElementById("myModal");
const modalImage = document.getElementById("modalImage");
const templateGrid = document.getElementById("template-grid");
const post = document.querySelector(".post");
const cerrarImg = document.getElementById("cerrarImg");
const piemodal = document.getElementById("piemodal");
const title = document.getElementById('Title').value;
const url = document.getElementById('Url').value;

const initialCards = [
  {
    name: "London",
    link: "https://images.unsplash.com/photo-1502700559166-5792585222ef?q=80&w=1382&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    name: "Rusia",
    link: "https://images.unsplash.com/photo-1520106212299-d99c443e4568?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    name: "Praga",
    link: "https://images.unsplash.com/photo-1541849546-216549ae216d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    name: "Francia",
    link: "https://images.unsplash.com/photo-1503917988258-f87a78e3c995?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    name: "Japon",
    link: "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    name: "Polonia",
    link: "https://plus.unsplash.com/premium_photo-1671727048737-308ab4b80353?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  }
];


// Funciones de mostrar y ocultar errores
const showInputError = (formElement, inputElement, errorMessage, settings) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add(settings.inputErrorClass);
  errorElement.textContent = errorMessage;
};

const hideInputError = (formElement, inputElement, settings) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(settings.inputErrorClass);
  errorElement.textContent = '';
};

// Función para verificar la validez de los campos de entrada
const checkInputValidity = (formElement, inputElement, settings) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage, settings);
  } else {
    hideInputError(formElement, inputElement, settings);
  }
};

// Función para agregar event listeners a los inputs del formulario
const setEventListeners = (formElement, settings) => {
  const inputList = Array.from(formElement.querySelectorAll(settings.inputSelector));
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', function () {
      checkInputValidity(formElement, inputElement, settings);
      validateForm(formElement, settings); // Validar el formulario después de cada entrada
    });
  });
};

// Activación/desactivación del botón de guardar
const validateForm = (formElement, settings) => {
  const isFormValid = formElement.checkValidity();
  const saveButton = formElement.querySelector(settings.submitButtonSelector);
  saveButton.disabled = !isFormValid;
  saveButton.classList.toggle('save_inactive', !isFormValid);
};

// Configuración y uso de las funciones
const settings = {
  inputSelector: 'input',
  inputErrorClass: 'popup__input_type_error',
  submitButtonSelector: '.save',
};

const profileForm = document.querySelector('.popup__form[name="registrer"]');
const placeForm = document.querySelector('.popup__form[name="placeForm"]'); // Ajusta el nombre del formulario

// Validar y establecer event listeners en ambos formularios
setEventListeners(profileForm, settings);
setEventListeners(placeForm, settings);

// Validación en tiempo real para ambos formularios
profileForm.addEventListener('input', () => validateForm(profileForm, settings));
placeForm.addEventListener('input', () => validateForm(placeForm, settings));

// Evento para el envío del formulario de perfil
profileForm.addEventListener('submit', function (event) {
  event.preventDefault();
  if (profileForm.querySelector(settings.submitButtonSelector).disabled) {
    return;
  }

  const nuevoNombre = inputNombre.value.trim();
  const nuevaCaracteristica = inputCaracteristica.value.trim();

  h2Person.textContent = nuevoNombre;
  pCaracter.textContent = nuevaCaracteristica;

  popup.close();
});

// Evento para el envío del formulario de imagen
placeForm.addEventListener('submit', function (event) {
  event.preventDefault();
  if (placeForm.querySelector(settings.submitButtonSelector).disabled) {
    return;
  }

  const title = document.getElementById('Title').value.trim();
  const url = document.getElementById('Url').value.trim();

  createElement(title, url);
  popupplace.close();
});
// Función para crear una tarjeta a partir de una tarjeta jaja
function createElement(title, link) {
  const template = document.getElementById("template-grid");
  const clone = template.content.cloneNode(true);

  const post = clone.querySelector(".grid");
  post.querySelector("h2.spot").textContent = title;
  const img = post.querySelector("img.galery");
  img.src = link;
  img.alt = title;

  // Añadir el evento de clic para abrir el modal
  img.addEventListener('click', function() {
    openModal(link, title);
  });

  // Añadir el evento de clic para eliminar la tarjeta
  post.querySelector(".btnbin").addEventListener('click', function() {
    post.remove();
  });

  // Insertar el nuevo elemento en el contenedor
  document.querySelector(".post").appendChild(post);
}


window.addEventListener('click', function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
});

// esto agrega las tarjetas iniciales
initialCards.forEach(card => {
  createElement(card.name, card.link);
});

// Añadir una nueva tarjeta mediante el dialog del +
popupplace.addEventListener('submit', function(event) {
  event.preventDefault(); //
  const title = document.getElementById('Title').value;
  const url = document.getElementById('Url').value;
  const newCards ={ name: title, link: url };



  if (title || url) {
    initialCards.unshift(newCards);
    createElement(title, url);
    popupplace.close();
  } else {
    alert('Por favor, complete todos los campos.');
  }
});


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
});
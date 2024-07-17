const edit = document.querySelector('#edit');
const popup = document.querySelector('#popup');
const cerraredit= document.querySelector('#cerrar');

edit.addEventListener("click",()=>{
    popup.showModal();
});

cerraredit.addEventListener("click",()=>{
    popup.close();
})


const dialogPopup = document.getElementById('popup');

const EditarPerfil = document.forms['registrer'];
const inputNombre = EditarPerfil.elements['name'];
const inputCaracteristica = EditarPerfil.elements['breed'];
const h2Person = document.getElementById('person');
const pCaracter = document.querySelector('.caracter');


// cambio de informacion
EditarPerfil.addEventListener('submit', function(event) {
    event.preventDefault();


    const nuevoNombre = inputNombre.value.trim();
    const nuevaCaracteristica = inputCaracteristica.value.trim();

    // la funcion textcontent reemplaza el contenido
    h2Person.textContent = nuevoNombre;
    pCaracter.textContent = nuevaCaracteristica;


    dialogPopup.close();
});

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


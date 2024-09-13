const btnClose = this.getElementById("cerrarImg");
const modalImage = this.querySelector("modalImage");
const myModal = this.querySelector("myModal");


export class Card {
  constructor(title, link) {
    this._title = title;
    this._link = link;
  }

  _getTemplate() {
    const cardElement = document.getElementById('template-grid').content.cloneNode(true);
    return cardElement;
  }

  generateCard() {
    this._element = this._getTemplate();

    const post = this._element.querySelector('.grid');
    post.querySelector('h2.spot').textContent = this._title;
    const img = post.querySelector('img.galery');
    img.src = this._link;
    img.alt = this._title;

    // Add event listeners for modal and delete
    this._setEventListeners(title, link);

    return post;
  }

  _openModal(){

    modalImage.src = this._image;
    myModal.classList.add("modal_is-opened");

  }
  _closeModal(){
    modalImage.src = "";
    myModal.classList.remove("modal_is-opened");

  }

  _setEventListeners() {
    this._element.addEventListener('click', () => {
      _openModal();
    });

    btnClose.addEventListener('click', () => {
      this._closeModal();
    });





    }

  }

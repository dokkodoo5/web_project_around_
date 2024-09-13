 export class FormHandler {
  constructor(formElement, settings) {
    this._formElement = formElement;
    this._settings = settings;
    this._inputList = Array.from(this._formElement.querySelectorAll(this._settings.inputSelector));
    this._saveButton = this._formElement.querySelector(this._settings.submitButtonSelector);
    this._setEventListeners();
  }

  _showInputError(inputElement, errorMessage) {
    const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(this._settings.inputErrorClass);
    errorElement.textContent = errorMessage;
  }

  _hideInputError(inputElement) {
    const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(this._settings.inputErrorClass);
    errorElement.textContent = '';
  }

  _checkInputValidity(inputElement) {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement, inputElement.validationMessage);
    } else {
      this._hideInputError(inputElement);
    }
  }

  _setEventListeners() {
    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._checkInputValidity(inputElement);
        this._validateForm();
      });
    });
  }

  _validateForm() {
    const isFormValid = this._formElement.checkValidity();
    this._saveButton.disabled = !isFormValid;
    this._saveButton.classList.toggle('save_inactive', !isFormValid);
  }

  setSubmitAction(submitAction) {
    this._formElement.addEventListener('submit', submitAction);
  }
}
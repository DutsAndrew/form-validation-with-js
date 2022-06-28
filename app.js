window.onload = () => {
  loadForm();
  formValidation();
}

function loadForm() {
  const body = document.getElementById('body');
  const formContainer = document.createElement('div');
    formContainer.setAttribute('id', 'form-container');
  const form = document.createElement('form');
    form.setAttribute('id', 'form');
    form.setAttribute = ('novalidate', true);
  const fieldSet = document.createElement('fieldset');
    fieldSet.setAttribute('id', 'fieldset');
  const legend = document.createElement('legend');
    legend.setAttribute('id', 'legend');
    legend.textContent = 'Gathering Data';
  const labelForEmail = document.createElement('label');
   labelForEmail.setAttribute('id', 'label-email');
   labelForEmail.classList.add('form-label');
   labelForEmail.textContent = "*Email:"
  const inputForEmail = document.createElement('input');
    inputForEmail.setAttribute('id', 'input-email');
    inputForEmail.classList.add('form-input');
    inputForEmail.placeholder = 'Alexis95@gmail.com';
    inputForEmail.required = true;
    inputForEmail.type = 'email';
    inputForEmail.minLength = 8;
    inputForEmail.maxLength = 30;
  const emailErrorText = document.createElement('p');
    emailErrorText.classList.add('error-msg');
    emailErrorText.setAttribute('id', 'email-error-text');
  const labelForCountry = document.createElement('label');
    labelForCountry.setAttribute('id', 'label-country');
    labelForCountry.classList.add('form-label');
    labelForCountry.textContent = 'Country:';
  const inputForCountry = document.createElement('input');
    inputForCountry.setAttribute('id', 'input-country');
    inputForCountry.classList.add('form-input');
    inputForCountry.placeholder = 'New Zealand';
    inputForCountry.required = false;
    inputForCountry.type = 'text';
    inputForCountry.minLength = 2;
    inputForCountry.maxLength = 15;
  const countryErrorText = document.createElement('p');
    countryErrorText.classList.add('error-msg');
    countryErrorText.setAttribute('id', 'country-error-text');
  const labelForZip = document.createElement('label');
    labelForZip.setAttribute('id', 'label-zip');
    labelForZip.classList.add('form-label');
    labelForZip.textContent = '*Zip Code:';
  const inputForZip = document.createElement('input');
    inputForZip.setAttribute('id', 'input-zip');
    inputForZip.classList.add('form-input');
    inputForZip.placeholder = '9749';
    inputForZip.type = 'tel';
    inputForZip.required = true;
    inputForZip.maxLength = 10;
    inputForZip.minLength = 3;
  const zipErrorText = document.createElement('p');
    zipErrorText.classList.add('error-msg');
    zipErrorText.setAttribute('id', 'zip-error-text');
  const labelForPassword = document.createElement('label');
    labelForPassword.setAttribute('id', 'label-password');
    labelForPassword.classList.add('form-label');
    labelForPassword.textContent = '*Password:';
  const inputForPassword = document.createElement('input');
    inputForPassword.setAttribute('id', 'input-password');
    inputForPassword.classList.add('form-input');
    inputForPassword.placeholder = '********';
    inputForPassword.type = 'password';
    inputForPassword.required = true;
    inputForPassword.minLength = 8;
    inputForPassword.maxLength = 128;
  const passwordErrorText = document.createElement('p');
    passwordErrorText.classList.add('error-msg');
    passwordErrorText.setAttribute('id', 'password-error-text');
  const labelForConfirmPassword = document.createElement('label');
    labelForConfirmPassword.setAttribute('id', 'label-confirm-password');
    labelForConfirmPassword.classList.add('form-label');
    labelForConfirmPassword.textContent = '*Confirm Password:'
  const inputForConfirmPassword = document.createElement('input');
    inputForConfirmPassword.setAttribute('id', 'input-confirm-password');
    inputForConfirmPassword.classList.add('form-input');
    inputForConfirmPassword.placeholder = '********';
    inputForConfirmPassword.type = 'password';
    inputForConfirmPassword.required = true;
    inputForConfirmPassword.minLength = 8;
    inputForConfirmPassword.maxLength = 128;
  const passwordConfirmErrorText = document.createElement('p');
    passwordConfirmErrorText.classList.add('error-msg');
    passwordConfirmErrorText.setAttribute('id', 'password-confirm-error-text');
  const inputForSubmit = document.createElement('input');
    inputForSubmit.setAttribute('id', 'submit-button');
    inputForSubmit.type = 'submit';

  fieldSet.appendChild(legend);
  fieldSet.appendChild(labelForEmail);
  fieldSet.appendChild(inputForEmail);
  fieldSet.appendChild(emailErrorText);
  fieldSet.appendChild(labelForCountry);
  fieldSet.appendChild(inputForCountry);
  fieldSet.appendChild(countryErrorText);
  fieldSet.appendChild(labelForZip);
  fieldSet.appendChild(inputForZip);
  fieldSet.appendChild(zipErrorText);
  fieldSet.appendChild(labelForPassword);
  fieldSet.appendChild(inputForPassword);
  fieldSet.appendChild(passwordErrorText);
  fieldSet.appendChild(labelForConfirmPassword);
  fieldSet.appendChild(inputForConfirmPassword);
  fieldSet.appendChild(passwordConfirmErrorText);
  fieldSet.appendChild(inputForSubmit);
  form.appendChild(fieldSet);
  formContainer.appendChild(form);
  body.appendChild(formContainer);
}

// Handles all form validation through js
function formValidation() {
  const email = document.querySelector('#input-email');
  const emailError = document.querySelector('#email-error-text');
  const country = document.querySelector('#input-country');
  const countryError = document.querySelector('#country-error-text');
  const zip = document.querySelector('#input-zip');
  const zipError = document.querySelector('#zip-error-text');
  const password = document.querySelector('#input-password');
  const passwordError = document.querySelector('#password-error-text');
  const confirmPassword = document.querySelector('#input-confirm-password');
  const confirmPasswordError = document.querySelector('#password-confirm-error-text');
  const submit = document.querySelector('#submit-button');

  email.addEventListener('input', () => {
    if (email.validity.valid) {
      emailError.textContent = "";
      emailError.className = 'error';
    } else {
      showError();
    }
  })

  country.addEventListener('input', () => {
    if (country.validity.valid) {
      countryError.textContent = "";
      countryError.className = 'error';
    } else {
      showError();
    }
  })

  zip.addEventListener('input', () => {
    if (zip.validity.valid) {
      zipError.textContent = "";
      zipError.className = 'error';
    } else {
      showError();
    }
  })

  password.addEventListener('input', () => {
    if (password.validity.valid) {
      passwordError.textContent = "";
      passwordError.className = 'error';
    } else {
      showError();
    }
  })

  confirmPassword.addEventListener('input', () => {
    if (confirmPassword.validity.valid) {
      confirmPasswordError.textContent = "";
      confirmPasswordError.className = 'error';
    } else {
      showError();
    }
  })

  submit.addEventListener('submit', (e) => {
    if (!email.validity.valid) {
      showError();
      e.preventDefault();
    } else if (!country.validity.valid) {
      showError();
      e.preventDefault();
    } else if (!zip.validity.valid) {
      showError();
      e.preventDefault();
    } else if (!password.validity.valid) {
      showError();
      e.preventDefault();
    } else if (!confirmPassword.validity.valid) {
      showError();
      e.preventDefault();
    }
  })

  function showError() {
    if (email.validity.valueMissing) {
      emailError.textContent = "You need to enter an email address";
      emailError.className = 'error active';
    } else if (email.validity.typeMismatch) {
      emailError.textContent = "The value you entered is not an email address";
      emailError.className = 'error active';
    } else if (email.validity.tooShort) {
      emailError.textContent = `Email should be at least ${ email.minLength } characters; you entered: ${ email.value.length }`;
      emailError.className = 'error active';
    } else if (country.validity.valueMissing) {
      countryError.textContent = "You need to enter your Country's name";
      countryError.className = 'error active';
    } else if (country.validity.tooShort) {
      countryError.textContent = `Your Country's name should be at least ${ country.minLength } characters; you entered: ${ country.value.length }`;
      countryError.className = 'error active';
    } else if (zip.validity.valueMissing) {
      zipError.textContent = "You need to enter a zip code";
      zipError.className = 'error active';
    } else if (zip.validity.tooShort) {
      zipError.textContent = `Your zip code should be at least ${ zip.minLength } characters; you entered: ${ zip.value.length }`;
      zipError.className = 'error active';
    } else if (password.validity.valueMissing) {
      passwordError.textContent = "You need to enter a password";
      passwordError.className = 'error active';
    } else if (password.validity.tooShort) {
      passwordError.textContent = `Your password should be at least ${ password.minLength } characters; you entered: ${ password.value.length }`;
      passwordError.className = 'error active';
    } else if (password.validity.typeMismatch) {
      passwordError.textContent = "You need to enter a valid password";
      passwordError.className = 'error active';
    } else if (confirmPassword.validity.valueMissing) {
      confirmPasswordError.textContent = "You need to confirm your password";
      confirmPasswordError.className = 'error active';
    } else if (confirmPassword.validity.tooShort) {
      confirmPasswordError.textContent = `Your password should be at least ${ confirmPassword.minLength } characters; you entered: ${ confirmPassword.value.length }`;
      confirmPasswordError.className = 'error active';
    } else if (confirmPassword.validity.typeMismatch) {
      confirmPasswordError.textContent = "You're confirmed password does not match the necessary criteria";
      confirmPasswordError.className = 'error active';
    } else {
      return;
    }
  }
}
window.onload = () => {
  loadForm();
}

function loadForm() {
  const body = document.getElementById('body');
  const formContainer = document.createElement('div');
    formContainer.setAttribute('id', 'form-container');
  const form = document.createElement('form');
    form.setAttribute('id', 'form');
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
  const labelForCountry = document.createElement('label');
    labelForCountry.setAttribute('id', 'label-country');
    labelForCountry.classList.add('form-label');
    labelForCountry.textContent = 'Country:';
  const inputForCountry = document.createElement('input');
    inputForCountry.setAttribute('id', 'input-country');
    inputForCountry.classList.add('form-input');
    inputForCountry.placeholder = 'New Zealand';
  const labelForZip = document.createElement('label');
    labelForZip.setAttribute('id', 'label-zip');
    labelForZip.classList.add('form-label');
    labelForZip.textContent = '*Zip Code:';
  const inputForZip = document.createElement('input');
    inputForZip.setAttribute('id', 'input-zip');
    inputForZip.classList.add('form-input');
    inputForZip.placeholder = '9749';
  const labelForPassword = document.createElement('label');
    labelForPassword.setAttribute('id', 'label-password');
    labelForPassword.classList.add('form-label');
    labelForPassword.textContent = '*Password:';
  const inputForPassword = document.createElement('input');
    inputForPassword.setAttribute('id', 'input-password');
    inputForPassword.classList.add('form-input');
    inputForPassword.placeholder = '********';
  const labelForConfirmPassword = document.createElement('label');
    labelForConfirmPassword.setAttribute('id', 'label-confirm-password');
    labelForConfirmPassword.classList.add('form-label');
    labelForConfirmPassword.textContent = '*Confirm Password:'
  const inputForConfirmPassword = document.createElement('input');
    inputForConfirmPassword.setAttribute('id', 'input-confirm-password');
    inputForConfirmPassword.classList.add('form-input');
    inputForConfirmPassword.placeholder = '********';

  fieldSet.appendChild(legend);
  fieldSet.appendChild(labelForEmail);
  fieldSet.appendChild(inputForEmail);
  fieldSet.appendChild(labelForCountry);
  fieldSet.appendChild(inputForCountry);
  fieldSet.appendChild(labelForZip);
  fieldSet.appendChild(inputForZip);
  fieldSet.appendChild(labelForPassword);
  fieldSet.appendChild(inputForPassword);
  fieldSet.appendChild(labelForConfirmPassword);
  fieldSet.appendChild(inputForConfirmPassword);
  form.appendChild(fieldSet);
  formContainer.appendChild(form);
  body.appendChild(formContainer);
}
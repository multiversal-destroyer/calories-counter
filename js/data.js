export const counterForm = document.querySelector('.counter__form');
const formSubmitButton = document.querySelector('.form__submit-button');
const formResetButton = document.querySelector('.form__reset-button');
const ageInput = document.querySelector('#age');
const heightInput = document.querySelector('#height');
const weightInput = document.querySelector('#weight');
const genderParameters = document.querySelectorAll('#form input[name="gender"]');
const activityParameters = document.querySelectorAll('#form input[name="activity"]');
const physicalParameters = document.querySelectorAll('#form input[type="number"]');

const ACTIVITY_COEFFICIENTS = {
  min: 1.2,
  low: 1.375,
  medium: 1.55,
  high: 1.725,
  max: 1.9
};

export function getUserParameters() {
  const userParameters = {
    userGender: document.querySelector('#form input[name="gender"]:checked').value,
    userAge: Number(ageInput.value),
    userHeight: Number(heightInput.value),
    userWeight: Number(weightInput.value),
    userActivity: ACTIVITY_COEFFICIENTS[document.querySelector('#form input[name="activity"]:checked').value]
  };
  return userParameters;
}

genderParameters.forEach((element) => element.onchange = getUserParameters);
activityParameters.forEach((element) => element.onchange = getUserParameters);
physicalParameters.forEach((element) => element.onchange = activateFormButtons);

counterForm.addEventListener('reset', (evt) => {
  evt.preventDefault();
  document.querySelectorAll('#form input[type="number"]').forEach((element) => element.value = '');
  document.querySelector('.counter__result').classList.add('counter__result--hidden');
  activateFormButtons();
});

function activateFormButtons() {
  if (ageInput.value || heightInput.value || weightInput.value ) {
    formResetButton.removeAttribute('disabled');
  } else {
    formResetButton.setAttribute('disabled', '');
  }

  if (ageInput.value && heightInput.value && weightInput.value ) {
    formSubmitButton.removeAttribute('disabled');
  } else {
    formSubmitButton.setAttribute('disabled', '');
  }
}

import { getCalories } from './result.js';
import { counterForm } from './data.js';

counterForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  let userCalories = getCalories();
  console.log(userCalories);
  document.querySelector('.counter__result').classList.remove('counter__result--hidden');
  document.querySelector('#calories-norm').textContent = userCalories.norm;
  document.querySelector('#calories-minimal').textContent = userCalories.minimal;
  document.querySelector('#calories-maximal').textContent = userCalories.maximal;
});

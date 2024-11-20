import { getUserParameters } from './data.js';

const WEIGHT_MODIFIERS = {
  gain: 1.15,
  loss: 0.85
};

export function getCalories() {
  let userCalories = {};
  const userParameters = getUserParameters();
  if (userParameters.userGender == 'male') {
    userCalories.norm = Math.round(userParameters.userActivity * (10 * userParameters.userWeight + 6.25 * userParameters.userHeight - 5 * userParameters.userAge + 5));
  } else {
    userCalories.norm = Math.round(userParameters.userActivity * (10 * userParameters.userWeight + 6.25 * userParameters.userHeight - 5 * userParameters.userAge - 161));
  }
  userCalories.minimal = Math.round(userCalories.norm * WEIGHT_MODIFIERS.loss);
  userCalories.maximal = Math.round(userCalories.norm * WEIGHT_MODIFIERS.gain);
  return userCalories;
}

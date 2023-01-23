//logic for handling exercise data for responsive layout
const display = () => {
  const idData = document.querySelectorAll('.idData');
  const display = idData.length.toString();
  console.log(`you have planned/logged ${display} workouts, Keep it up!`);
  if (display == 1) {
    console.log(`You have planned/logged ${display} workout, Keep it up!`);
  } else if (display > 1) {
    console.log(`You have logged/planned ${display} workouts, Keep it up!`);
  } else {
    return;
  }
};
const goals = () => {
  const goalArray = [];
  const completedArray = [];
  const goalData = document.querySelectorAll('.goalData');
  const completedData = document.querySelectorAll('.completedData');

  for (i = 0; i < goalData.length; i++) {
    goalArray.push(goalData[i].id);
  }
  for (i = 0; i < completedData.length; i++) {
    completedArray.push(completedData[i].id);
  }
  const goalArrayInt = goalArray.map(Number);
  const completedArrayInt = completedArray.map(Number);

  const goalTotal = goalArrayInt.reduce(function (a, b) {
    return a + b;
  }, 0);
  const completedTotal = completedArrayInt.reduce(function (a, b) {
    return a + b;
  }, 0);

  // fills in the progress bar based on the percentage of completed goals
  let value = Math.floor((completedTotal / goalTotal) * 100);

  if (value > 0) {
    document
      .querySelector('.progress-bar')
      .setAttribute('style', `width: ${value}%`);
  }
};

window.addEventListener('load', display);
window.addEventListener('load', goals);

const currentDate = document.querySelector('#currentDate');

var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

today = mm + '/' + dd + '/' + yyyy;
currentDate.innerHTML = today;

// takes data from front end to determine when logged workouts are scheduled
const init = () => {
  const dateData = document.querySelectorAll('.dateData');
  if (dateData.length > 0) {
    dateData.forEach((date) => {
      if (date.textContent === today) {
        document.getElementById(
          'exerciseAlert'
        ).innerHTML = `You have an exercise planned today.`;
      } else {
        document.getElementById(
          'exerciseAlert'
        ).innerHTML = `You have have completed all planned exercises for today.`;
      }
    });
  }
};

init();

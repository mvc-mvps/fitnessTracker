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
    goalArray.push(goalData[i].innerHTML);
  }
  for (i = 0; i < completedData.length; i++) {
    completedArray.push(completedData[i].innerHTML);
  }
  const goalArrayInt = goalArray.map(Number);
  const completedArrayInt = completedArray.map(Number);
  const goalTotal = goalArrayInt.reduce(function (a, b) {
    return a + b;
  }, 0);
  const completedTotal = completedArrayInt.reduce(function (a, b) {
    return a + b;
  }, 0);
  let value = goalTotal - completedTotal;
  if (value > 0) {
    document
      .querySelector('.progress-bar')
      .setAttribute('style', `width: ${value}%`);
    // alert(
    //   `Almost there! Only ${value} reps/minutes left until you hit your goals`
    // );
  } else if (value < 0) {
    // alert(`You crushed your workout goals with ${value} extra!`);
  } else {
    // alert('Great job! You have completed all of your set goals!');
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

const init = () => {
  const dateData = document.querySelectorAll('.dateData');

  dateData.forEach((date) => {
    if (date.textContent === today) {
      document.getElementById('exerciseAlert').innerHTML = `You have an exercise planned today.`;
    }
  });
};

init();

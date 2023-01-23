const addExerciseFormHandler = async (event) => {
  event.preventDefault();

  const date = document.querySelector('#exercise-date').value.trim();
  const type = document.querySelector('#exercise-type').value.trim();
  const goal = document.querySelector('#exercise-goal').value.trim();
  const completed = document.querySelector('#exercise-completed').value.trim();

  if (date.length != 10) {
    alert('Please enter date in MM/DD/YYYY format');
    return;
  }

  if (date && type && goal && completed) {
    const response = await fetch('/api/planner/add', {
      method: 'POST',
      body: JSON.stringify({ date, type, goal, completed }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/exercise-homepage');
    } else {
      alert('Failed to add exercise.');
    }
  }
  if (date === '' || type === '' || goal === '' || completed === '') {
    document.getElementById('formValidation').innerHTML = `
        <div class="alert alert-danger" role="alert">
        You must fill out all required fields on the form. Enter "0" for "Completed" if you haven't started this exercise yet. 
        </div>`;
  }
};

document
  .querySelector('#submit-exercise')
  .addEventListener('submit', addExerciseFormHandler);

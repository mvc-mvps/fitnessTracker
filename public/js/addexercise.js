const addExerciseFormHandler = async (event) => {
    event.preventDefault();
  
    const date = document.querySelector('#exercise-date').value.trim();
    const type = document.querySelector('#exercise-type').value.trim();
    const goal = document.querySelector('#exercise-goal').value.trim();
    const completed = document.querySelector('#exercise-completed').value.trim();
  
    if (date && type && goal) {
      const response = await fetch('/api/homepage', {
        method: 'POST',
        body: JSON.stringify({ date, type, goal, completed }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/homepage');
      } else {
        alert('Failed to add exercise.');
      }
    }
  };
  
  document
    .querySelector('#submit-exercise')
    .addEventListener('submit', addExerciseFormHandler);

    //checkout the nutrition.js for event handler
  
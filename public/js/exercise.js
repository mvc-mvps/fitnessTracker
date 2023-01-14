async function newFormHandler(event) {
    event.preventDefault();
    const exercise_type = document.querySelector('#exercise-input').value;
    // Send fetch request to add a new exercise
    const response = await fetch(`/api/exercise`, {
      method: 'POST',
      body: JSON.stringify({
        type,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    //if the exercise is added, the 'exercise' template will be rerendered
    if (response.ok) {
      document.location.replace('/exercise');
    } else {
      alert('Failed to add exercise');
    }
  }
  
  document.querySelector('#exercise-add').addEventListener('submit', newFormHandler);
    
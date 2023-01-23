//logic to delete exercise
const deleteExerciseFormHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');
    const response = await fetch(`/api/planner/delete/${id}`, {
      method: 'DELETE',
    });
    if (response.ok) {
      document.location.reload();
    } else {
      alert('Failed to delete exercise');
    }
  }
};

const deleteExercise = document.querySelectorAll('.delete-exercise');

deleteExercise.forEach((element) => {
  element.addEventListener('click', deleteExerciseFormHandler);
});
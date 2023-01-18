// const deleteExerciseFormHandler = async (event) => {
//   event.preventDefault();

//   const exerciseId = document.querySelectorAll('.exerciseId');
//   const exerciseElement = event.target.parentElement.parentElement;

//   console.log(exerciseElement);
//   console.log(exerciseElement.children);

//   const response = await fetch(`/api/planner/delete/$ exerciseElement}`, {
//     method: 'DELETE',
//     body: JSON.stringify({ planner_id: exerciseElement }),
//     headers: { 'Content-Type': 'application/json' },
//   });

//   if (response.ok) {
//     // document.location.replace('/api/planner');
//   } else {
//     alert('Failed to delete exercise.');
//   }
// };

// const cLogFunc = () => console.log('button inside function working');

const deleteExerciseFormHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');
    const response = await fetch(`/api/planner/delete/${id}`, {
      method: 'DELETE',
    });
    if (response.ok) {
      document.location.replace('/api/planner');
    } else {
      alert('Failed to delete exercise');
    }
  }
};

const deleteExercise = document.querySelectorAll('.delete-exercise');

deleteExercise.forEach((element) => {
  element.addEventListener('click', deleteExerciseFormHandler);
});

// const delButtonHandler = async (event) => {
//   console.log('delbtnhndler working');
//   console.log(event.target.hasAttribute('exerciseId'));
//   if (event.target.hasAttribute('exerciseId')) {
//     console.log('if statement running');
//     const id = event.target.getAttribute('exerciseId');
//     const response = await fetch(`/api/projects/${id}`, {
//       method: 'DELETE',
//     });
//     if (response.ok) {
//       document.location.replace('/api/planner');
//     } else {
//       alert('Failed to delete exercise');
//     }
//   }
// };

// document
//   .querySelector('#delete-exercise')
//   .addEventListener('click', delButtonHandler);

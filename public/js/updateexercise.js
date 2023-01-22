// async function editFormHandler(event) {
//     event.preventDefault();

//     const title = document.querySelector('input[name="post-title"]').value.trim();
//     const content = document.querySelector('input[name="content"]').value.trim();
//     console.log(title);
//     console.log(content);

//     const id = window.location.toString().split('/')[
//       window.location.toString().split('/').length - 1
//     ];

//       const response = await fetch(`/api/posts/${id}`, {
//         method: 'PUT',
//         body: JSON.stringify({
//           post_id: id,
//           title,
//           content
//         }),
//         headers: {
//           'Content-Type': 'application/json'
//         }
//       });

//       if (response.ok) {
//         document.location.replace('/dashboard/');
//       } else {
//         alert(response.statusText);
//       }

// }

// document.querySelector('.edit-post-form').addEventListener('submit', editFormHandler);

const updateExerciseFormHandler = async (event) => {
  event.preventDefault();

  const goal = document.querySelector('#exercise-goal').value.trim();
  const completed = document.querySelector('#exercise-completed').value.trim();

  const id = location.pathname.split('/')[4];

  if (goal && completed) {
    const response = await fetch(`/api/planner/updateexercise/${id}`, {
      method: 'PUT',
      body: JSON.stringify({ goal, completed }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/api/planner/');
      res.json({ message: 'exercise has been updated' });
    } else {
      alert('Failed to update exercise.');
    }
  } else {
    alert('Please enter all fields');
  }
};

const updateExercise = document.getElementById('updateExerciseButton');

updateExercise.addEventListener('click', updateExerciseFormHandler);
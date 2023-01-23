//logic to update exercise data
const updateExerciseFormHandler = async (event) => {
    event.preventDefault();

    const goal = document.querySelector('#exercise-goal').value.trim();
    const completed = document.querySelector('#exercise-completed').value.trim();
    const id = location.pathname.split('/')[2];

    if (goal && completed) {
        const response = await fetch(`/api/planner/updateexercise/${id}`, {
            method: 'PUT',
            body: JSON.stringify({ goal, completed }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/exercise-homepage');
            res.json({ message: 'exercise has been updated' });
        } else {
            alert('Failed to update exercise.');
        }
    }
    if (goal === "" || completed === "") {
        document.getElementById('formValidation').innerHTML = `
    <div class="alert alert-danger" role="alert">
    You must fill out all required fields on the form. Enter "0" for completed if you haven't started this exercise yet.
    </div>`;
    }
};

const updateExercise = document.getElementById('updateExerciseButton');

updateExercise.addEventListener('click', updateExerciseFormHandler);
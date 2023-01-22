const addFoodFormHandler = async (event) => {
    event.preventDefault();
    const name = document.querySelector('#food-name').value.trim();
    const protein = document.querySelector('#food-protein').value.trim();
    const calories = document.querySelector('#food-calories').value.trim();
    const serving = document.querySelector('#food-servings').value.trim();

    if (name && protein && calories && serving) {
        const response = await fetch('/api/nutrition/add', {
            method: 'POST',
            body: JSON.stringify({ name, protein, calories, serving }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/nutrition');
        } else {
            alert('Failed to add food.');
        }
    }
    if (name === "" || protein === "" || calories === "" || serving === "") {
        document.getElementById('formValidation').innerHTML = `
        <div class="alert alert-danger" role="alert">
        You must fill out all required fields on the form.
        </div>`;
    }
};

const addButton = document.getElementById('add-btn');
addButton.addEventListener('click', addFoodFormHandler);
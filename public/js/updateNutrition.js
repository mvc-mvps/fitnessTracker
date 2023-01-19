const updateFood = async (event) => {
    event.preventDefault();

    const name = document.getElementById('food-name').value.trim();
    const protein = document.getElementById('food-protein').value.trim();
    const calories = document.getElementById('food-calories').value.trim();
    const serving = document.getElementById('food-servings').value.trim();
    
    const id = location.pathname.split('/')[4];
    const response = await fetch(`/api/nutrition/updateNutrition/${id}`, {
        method: 'PUT',
        body: JSON.stringify({ name, protein, calories, serving }),
        headers: { 'Content-Type': 'application/json' },
    });
    if (response.ok) {
        document.location.replace('nutrition-homepage');
        res.json({ message: 'food has been updated' });
    } else {
        alert('Failed to update food');
    }
};

const updateButton = document.getElementById('updatefoodbtn');
updateButton.addEventListener('click', console.log(location.pathname.split('/')[4]));
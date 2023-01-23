//logic to update nutrition data
const updateFood = async (event) => {
  event.preventDefault();
  
  let protein = document.getElementById('food-protein').value.trim();
  let calories = document.getElementById('food-calories').value.trim();
  let serving = document.getElementById('food-servings').value.trim();
  let id = location.pathname.split('/')[2];
  let request = '/api/nutrition/updateNutrition/'+ id;
  
    const response = await fetch(request, {
      method: 'PUT',
      body: JSON.stringify({ protein, calories, serving }),
      headers: ({ 'Content-Type': 'application/json' }),
    })
    if(response.ok) {
      location.replace('/nutrition-homepage');
    }     if (protein === "" || calories === "" | serving === "") {
      document.getElementById('formValidation').innerHTML = `
  <div class="alert alert-danger" role="alert">
  You must fill out all required fields on the form.
  </div>`;
  }
  
}

const updateButton = document.getElementById('updatefoodbtn');
updateButton.addEventListener('click', updateFood);


 
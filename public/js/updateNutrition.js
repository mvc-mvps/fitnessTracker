const updateFood = async (event) => {
    event.preventDefault();
  var name = document.getElementById('food-name').value.trim();
  let protein = document.getElementById('food-protein').value.trim();
  let calories = document.getElementById('food-calories').value.trim();
  let serving = document.getElementById('food-servings').value.trim();
  let id = location.pathname.split('/')[2];
  console.log(name);
  console.log(id);
  let request = '/api/nutrition/updateNutrition/'+ id;
  console.log(request);
  
  const response = await fetch(request , {
    method: 'PUT',
    body: JSON.stringify({ name, protein, calories, serving }),
  });
  console.log(response);
  if (response.ok) {
    // document.location.replace('/api/nutrition/');
    console.log(response);
  } else {
    alert('Failed to update food');
  }
};

const updateButton = document.getElementById('updatefoodbtn');
updateButton.addEventListener('click', updateFood);
 
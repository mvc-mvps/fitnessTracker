const addFoodFormHandler = async (event) => {
    event.preventDefault();
  
    const name = document.querySelector('#food-name').value.trim();
    const protein = document.querySelector('#food-protein').value.trim();
    const calories = document.querySelector('#food-calories').value.trim();
    const servings = document.querySelector('#food-servings').value.trim();
  
    if (name && protein && calories && servings) {
      const response = await fetch('/api/nutrition/add', {
        method: 'POST',
        body: JSON.stringify({ name, protein, calories, servings }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/api/nutrition');
      } else {
        alert('Failed to add food.');
      }
    }
  };
  
  document
    .querySelector('#submit-food')
    .addEventListener('submit', addFoodFormHandler);
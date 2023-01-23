//logic to delete food listing
const deleteNutritionHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');
    const response = await fetch(`/api/nutrition/deletefood/${id}`, {
      method: 'DELETE',
    });
    if (response.ok) {
      document.location.reload();
    } else {
      alert('Failed to delete food');
    }
  }
};

const deleteButton = document.querySelectorAll('.delete-food');

deleteButton.forEach((element) => {
  element.addEventListener('click', deleteNutritionHandler);
});

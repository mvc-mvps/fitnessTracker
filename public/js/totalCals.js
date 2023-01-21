const display = () => {
    const array = [];
    const calorieData = document.querySelectorAll('.calorieData');
    for(i = 0;i < calorieData.length;i++) {
      array.push(calorieData[i].innerHTML);
    }
    const arrayInt = array.map(Number);
    const total = arrayInt.reduce(function(a, b) {return a + b; }, 0);
    alert(`You have logged ${total} calories, Great Job!`);
  }
  
  window.addEventListener('load', display);
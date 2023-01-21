const display = () => {
    const idData = document.querySelectorAll('.idData');
    const display = idData.length.toString();
    console.log(`you have planned/logged ${display} workouts, Keep it up!`)
    alert(`You have planned/logged ${display} workouts, Keep it up!`)
  }
  
  window.addEventListener('load', display);
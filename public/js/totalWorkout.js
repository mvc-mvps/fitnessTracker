const display = () => {
    const idData = document.querySelectorAll('.idData');
    const display = idData.length.toString();
    console.log(`you have planned/logged ${display} workouts, Keep it up!`)
    if(display == 1) {
    alert(`You have planned/logged ${display} workout, Keep it up!`)
    } else if(display > 1){
      alert(`You have logged/planned ${display} workouts, Keep it up!`)
    } else {
      return;
    }
  }
  
  window.addEventListener('load', display);
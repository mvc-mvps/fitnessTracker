const display = () => {
  const arrayC = [];
  const arrayP = [];
  const calorieData = document.querySelectorAll('.calorieData');
  const proteinData = document.querySelectorAll('.proteinData');
  for (i = 0; i < calorieData.length; i++) {
    arrayC.push(calorieData[i].innerHTML);
  }
  for (i = 0; i < proteinData.length; i++) {
    arrayP.push(proteinData[i].innerHTML);
  }
  const arrayIntC = arrayC.map(Number);
  const totalC = arrayIntC.reduce(function (a, b) {
    return a + b;
  }, 0);
  const arrayIntP = arrayP.map(Number);
  const totalP = arrayIntP.reduce(function (a, b) {
    return a + b;
  }, 0);
  if (totalC > 0 || totalP > 0) {
    document.querySelector(
      '.alert'
    ).innerHTML = `You have logged ${totalC} calories and ${totalP}g of protein, Great Job!`;
    // alert(`You have logged ${total} calories, Great Job!`);
  }
};

window.addEventListener('load', display);

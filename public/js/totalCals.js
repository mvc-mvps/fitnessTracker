// function that takes in all of the calories and protein and returns an alert with the totals
const display = () => {
  const arrayC = [];
  const arrayP = [];
  const calorieData = document.querySelectorAll('.calorieData');
  const proteinData = document.querySelectorAll('.proteinData');
  for (i = 0; i < calorieData.length; i++) {
    arrayC.push(calorieData[i].id);
  }
  for (i = 0; i < proteinData.length; i++) {
    arrayP.push(proteinData[i].id);
  }
  const arrayIntC = arrayC.map(Number);
  const totalC = arrayIntC.reduce(function (a, b) {
    return a + b;
  }, 0);
  const arrayIntP = arrayP.map(Number);
  const totalP = arrayIntP.reduce(function (a, b) {
    return a + b;
  }, 0);
  if (totalC != "" || totalP != "") {
    document.querySelector(
      '.alert'
    ).innerHTML = `You have logged ${totalC} calories and ${totalP}g of protein, Great Job!`;
  }
};

window.addEventListener('load', display);


let calculation = localStorage.getItem('calculation') || '';
let history = JSON.parse(localStorage.getItem('history')) || [];
console.log(calculation);
updateScreen();

function updateCalculation(value) {
   calculation += value;
   localStorage.setItem('calculation', calculation);
   updateScreen();
   console.log(calculation);
  }

function removeLast() {
  calculation = calculation.slice(0, -1);
  localStorage.setItem('calculation',calculation);
  updateScreen();
  console.log(calculation);
}
function clearCalculation(){
    calculation ='';
    localStorage.removeItem('calculation');
    updateScreen();
    console.log(calculation);
}
function equal() {
  try{
  const result = eval(calculation);

  history.push(calculation + ' = ' + result);
  localStorage.setItem('history', JSON.stringify(history));

  calculation = result.toString();
  localStorage.setItem('currentCalculation', calculation);
  updateScreen();
  console.log(calculation);
  }
catch(error){
  calculation = 'Error';
  updateScreen();

}

  
}
function showHistory() {
  updateScreen();
  console.log('History:');
  history.forEach(item => updateScreen() || console.log(item));
}
function updateScreen(){
  document.querySelector('.result').innerText = calculation || 0 ;
}

function percentage() {
  if (!calculation) return;

  try {
    calculation = (eval(calculation) / 100).toString();
    localStorage.setItem('calculation', calculation);
    updateScreen();
  } catch {
    calculation = 'Error';
    updateScreen();
  }
}

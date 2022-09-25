const reset = document.querySelector(".reset");
const result = document.querySelector(".result-btn");
const form = document.querySelector("form");
const btn = document.querySelector(".btn");
const heightInput = document.querySelector(".height1");
const weightInput = document.querySelector(".weight");

form.addEventListener("submit", submitForm);
function submitForm(e) {
  e.preventDefault();
  let height = heightInput.value;
  let weight = weightInput.value;
//   display rest button
reset.style.display = "block"
result.style.display = "block"


  if (height === "") {
    return (reset.textContent = "Please enter a valid height! ");
  } else if (weight === "") {
    return (reset.textContent = "Please enter a valid weight !");
  } else {
        // reload 
result.innerHTML =`
<div class="loader-div">
Loading Result...
</div>
`;
setTimeout(() => {
     calculateBMI(height, weight);
    
}, 1000);
  }

}
function calculateBMI(height, weight) {
  height / 100;
  let bmi = (weight / Math.pow(height, 2)).toFixed(1);
  console.log(bmi);

  if (bmi < 18.5) {
    showResult(`Underweight: <span>${bmi}</span>`, "orange");
  } else if ( bmi >= 18.5 && bmi < 24.9){
    showResult(`Normal: <span>${bmi}</span>`, "green");

  } else if (bmi >= 25.0 && bmi < 29.9 ){
    showResult(`Overweight: <span>${bmi}</span>`, "blue");
  } else {
    showResult(`Obese: <span>${bmi}</span>`, "red");
  }
}
// Show result
function showResult(val, color) {
  result.style.backgroundColor = color;
  return (result.innerHTML = val);
}
// rest function
reset.addEventListener("click", () => {
    form.reset();
    result.style.display = "none"
    reset.style.display =none;

});

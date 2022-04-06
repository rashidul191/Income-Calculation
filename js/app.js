/* 
// calculate btn event handle 
document.getElementById("calculate").addEventListener("click", function(){
    const totalIncome = document.getElementById("income");
    const totalIncomeNumber = parseFloat(totalIncome.value);
    // console.log(totalIncomeNumber);

    const totalFood = document.getElementById("food");
    const totalFoodNumber = parseFloat(totalFood.value);
    // console.log(totalFoodNumber)

    const totalRent = document.getElementById("rent");
    const totalRentNumber = parseFloat(totalRent.value);
    // console.log(totalRentNumber)
    const others = document.getElementById("others");
    const othersNumber = parseFloat(others.value);
    const totalExpenses = totalFoodNumber + totalRentNumber + othersNumber;

    const balance = totalIncomeNumber - totalExpenses;

// set total expenses amount
    document.getElementById("total-expenses").innerText = totalExpenses;

    // set balance amount
    document.getElementById("balance").innerText = balance;
}) 
*/

// get Inputs Value Income and Expenses
function getInputValue(inputId) {
  const amountInput = document.getElementById(inputId);
  const totalAmountInput = parseFloat(amountInput.value);
  return totalAmountInput;
}

function updateAmount() {
  const totalExpenses = getInputValue("food") + getInputValue("rent") + getInputValue("others");
  const balance = getInputValue("income") - totalExpenses;

  // set total expenses amount
  document.getElementById("total-expenses").innerText = totalExpenses;
  // set balance amount
  document.getElementById("balance").innerText = balance;
}

// calculate btn event handle
document.getElementById("calculate").addEventListener("click", function () {
    updateAmount()
});

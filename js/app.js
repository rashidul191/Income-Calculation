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

  if (totalAmountInput >= 0) {
    // document.getElementById("error-massages").style.display = "none";
    return totalAmountInput;
  } else {
    document.getElementById("error-massages").innerText =
      "Error!!! Please enter a amount";
    // alert("Error!!! Please enter a correct amount")
    return 0;
  }
}

// update Total Expenses and Balance  Amount
function updateAmount() {
  // const food = getInputValue("food");
  // const rent = getInputValue("rent");
  // const clOther = getInputValue("others");
  // const totalExpenses = food + rent + clOther;
  const totalExpenses =
    getInputValue("food") + getInputValue("rent") + getInputValue("others");

  const income = getInputValue("income");
  const balance = income - totalExpenses;
  
  if (income > totalExpenses) {
    // set total expenses amount
    document.getElementById("expenses-balance").innerText = totalExpenses;
    // set balance amount
    document.getElementById("balance-amount").innerText = balance;
    document.getElementById("error-massages").style.display = "none";

  } else {
    // alert(
    //   "Sorry, dear !!! You don't have enough money. Please do the short expense."
    // );
    document.getElementById("error-massages").innerText =
      "Sorry, dear !!! You don't have enough money. Please do the short expense.";
  }
  return balance;
}

function calculationAmount(){
  const saveMoneyNumber = getInputValue("save-money");
  const income = getInputValue("income");
  const saveTotalMoney = (saveMoneyNumber / 100) * income;
  const totalBalance = updateAmount();
  const totalRemainingBalance = totalBalance - saveTotalMoney;
  const remainingBalance = document.getElementById("remaining-balance");
  const savingAmount = document.getElementById("saving-amount");

  if (totalBalance > saveTotalMoney) {
    remainingBalance.innerText = totalRemainingBalance;
    savingAmount.innerText = saveTotalMoney;
  } else {
    remainingBalance.innerText = 0;
    savingAmount.innerText = 0;
    alert("Sorry, dear !!! You don't have enough income money.");
  }

 // return totalRemainingBalance;
}

// calculate btn event handle
document.getElementById("calculate").addEventListener("click", function () {
  updateAmount();
});

// save btn event handle
document.getElementById("save").addEventListener("click", function () {
  // const saveMoneyNumber = getInputValue("save-money");
  // const income = getInputValue("income");
  // const saveTotalMoney = (saveMoneyNumber / 100) * income;
  // const totalBalance = updateAmount();
  // const totalRemainingBalance = totalBalance - saveTotalMoney;
  calculationAmount()

  // const remainingBalance = document.getElementById("remaining-balance");
  // const savingAmount = document.getElementById("saving-amount");  
  // if (totalBalance > saveTotalMoney) {
  //   remainingBalance.innerText = totalRemainingBalance;
  //   savingAmount.innerText = saveTotalMoney;
  // } else {
  //   remainingBalance.innerText = 0;
  //   savingAmount.innerText = 0;
  //   alert("Sorry, dear !!! You don't have enough income money.");
  // }
});

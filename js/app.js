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

  // console.log(typeof (amountInput.value));
  const totalAmountInput = parseFloat(amountInput.value);
  // console.log(typeof (totalAmountInput));
  if(isNaN(amountInput.value)){
    // document.getElementById("error-massages").innerText =
    //   "Error string!!! Please enter a amount";
console.log("input is string")
    return amountInput.value;
  }

  // if(typeof (amountInput.value) == "string"){
  //   // document.getElementById("error-massages").innerText =
  //   //   "Sorry, dear !!! You don't have enough money. Please do the short expense.";
  //     return amountInput.value;
  // }

 if (totalAmountInput > 0) {
    // document.getElementById("error-massages").style.display = "none";
    return totalAmountInput;
  } else {
    document.getElementById("error-massages").innerText =
      "Error!!! Please enter a correct amount";
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
  const income = getInputValue("income");

  // console.log(typeof(income));
  const totalExpenses =
    getInputValue("food") + getInputValue("rent") + getInputValue("others");

  const balance = income - totalExpenses;

  // if(isNaN(income) || isNaN(totalExpenses)){
  //   document.getElementById("error-massages").innerText =
  //     "Sorry, dear !!! You enter amount not a number. Please try again.";
  // }
  
   if (income > totalExpenses) {
    // set total expenses amount
    document.getElementById("expenses-balance").innerText = totalExpenses;
    // set balance amount
    document.getElementById("balance-amount").innerText = balance;
    document.getElementById("error-massages").style.display = "none";

  }
  else if(typeof(income) == "string" || typeof(totalExpenses) == "string"){
    document.getElementById("error-massages").innerText = "error string!!! .";
  }
  
  else {
    // alert(
    //   "Sorry, dear !!! You don't have enough money. Please do the short expense."
    // );

    
    document.getElementById("error-massages").innerText =
      "Sorry, dear !!! You don't have enough money. Please do the short expense.";
  }
  return balance;
}

function calculationAmount(){
  const saveMoney = document.getElementById("save-money");
  const saveMoneyNumber = parseFloat(saveMoney.value);
  // const saveMoneyNumber = getInputValue("save-money");
  const income = getInputValue("income");
  const saveTotalMoney = (saveMoneyNumber / 100) * income;  
  const totalBalance = updateAmount();
  const totalRemainingBalance = totalBalance - saveTotalMoney;
  const remainingBalance = document.getElementById("remaining-balance");
  const savingAmount = document.getElementById("saving-amount");

  if (totalBalance >= saveTotalMoney) {
    remainingBalance.innerText = totalRemainingBalance;
    savingAmount.innerText = saveTotalMoney;
  } else {
    remainingBalance.innerText = 0;
    savingAmount.innerText = 0;
    saveMoney.value = '';
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
  calculationAmount()
});

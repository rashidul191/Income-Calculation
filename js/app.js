// get Inputs Value Income and Expenses
function getInputValue(inputId) {
  const amountInput = document.getElementById(inputId);
  const totalAmountInput = parseFloat(amountInput.value);
  const errorMassages = document.getElementById("error-massages");
  if (isNaN(amountInput.value) || amountInput.value == "") {
    return amountInput.value;
  }
  if (totalAmountInput > 0) {
    return totalAmountInput;
  } else {
    errorMassages.innerText = "Error!!! Please enter a correct amount";
    return totalAmountInput;
  }
}
// update Total Expenses and Balance  Amount
function updateAmount() {
  const income = getInputValue("income");
  const food = getInputValue("food");
  const rent = getInputValue("rent");
  const others = getInputValue("others");
  const totalExpenses = food + rent + others;
  const balance = income - totalExpenses;
  const expenseBalances = document.getElementById("expenses-balance");
  const balanceAmount = document.getElementById("balance-amount");
  const errorMassages = document.getElementById("error-massages");
  if (income < 0 || food < 0 || rent < 0 || others < 0) {
    errorMassages.innerText =
      "Error negative amount!!! Please enter a positive amount. Try aging";
       // set total expenses amount
    expenseBalances.innerText = 0;
    // set balance amount
    balanceAmount.innerText = 0;
  } else if (typeof income == "string" || typeof totalExpenses == "string") {
    errorMassages.innerText = "Error!! string / empty input.";
     // set total expenses amount
     expenseBalances.innerText = 0;
     // set balance amount
     balanceAmount.innerText = 0;
  } else if (income.toString() == "" || totalExpenses.toString() == "") {
    errorMassages.innerText = "your input is empty ";
  } else if (income >= totalExpenses) {
    // set total expenses amount
    expenseBalances.innerText = totalExpenses;
    // set balance amount
    balanceAmount.innerText = balance;
    errorMassages.innerText = "";
  } else {
    errorMassages.innerText =
      "Sorry, dear !!! You don't have enough money. Please do the short expense.";
       // set total expenses amount
    expenseBalances.innerText = 0;
    // set balance amount
    balanceAmount.innerText = 0;
  }
  return balance;
}
// calculation Amount and set saving amount , remaining balance
function calculationAmount() {
  const saveMoney = document.getElementById("save-money");
  const saveMoneyNumber = parseFloat(saveMoney.value);
  const income = getInputValue("income");
  const errorMassages = document.getElementById("error-massages");
  if (saveMoneyNumber > 0) {
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
      saveMoney.value = "";
      errorMassages.innerText =
        "Sorry, dear !!! You don't have enough income money.";
    }
  } else if (saveMoneyNumber < 0) {
    errorMassages.innerText =
      "Error negative amount!!! Please enter a positive amount. Try aging";
    saveMoney.value = "";
  } else if (typeof saveMoney.value == "string") {
    errorMassages.innerText = "Error!! string / empty input.";
  }
}
// calculate btn event handle
document.getElementById("calculate").addEventListener("click", function () {
  updateAmount();
});
// save btn event handle
document.getElementById("save").addEventListener("click", function () {
  calculationAmount();
});

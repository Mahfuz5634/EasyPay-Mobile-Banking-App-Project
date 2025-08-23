document
  .getElementById("add-money")
  .addEventListener("click", function (event) {
    event.preventDefault();

    let myPin = "easypay12";

    let balanceElement = document.getElementById("total-balance");

    let totalBalance = parseFloat(balanceElement.innerText);
    let amountAdd = parseFloat(document.getElementById("amount-add").value);
    let totalsum = totalBalance + amountAdd;

    let pinNumber = document.getElementById("pin-numbers").value;

    if (myPin === pinNumber) {
      balanceElement.innerText = totalsum;
    } else {
      alert("Wrong Pin Number");
    }
  });

document
  .getElementById("withdraw-money-button")
  .addEventListener("click", function (event) {
    event.preventDefault();
    let balanceElement = document.getElementById("total-balance");
    let totalBalance = parseFloat(balanceElement.innerText);

    let withdrawAmmount = parseFloat(
      document.getElementById("amount-withdraw").value
    );
    let currentammount = totalBalance - withdrawAmmount;
    balanceElement.innerText = currentammount;
  });

// toggleing
const addMoneyBtn = document.getElementById("add-money-button");
const cashoutBtn = document.getElementById("cashout-button");
document
  .getElementById("add-money-button")
  .addEventListener("click", function () {
    document.getElementById("cashout-section").style.display = "none";
    document.getElementById("add-money-section").style.display = "block";

    addMoneyBtn.classList.add("active-btn");
    cashoutBtn.classList.remove("active-btn");
  });
document
  .getElementById("cashout-button")
  .addEventListener("click", function () {
    document.getElementById("add-money-section").style.display = "none";
    document.getElementById("cashout-section").style.display = "block";

    cashoutBtn.classList.add("active-btn");
  addMoneyBtn.classList.remove("active-btn");
  });

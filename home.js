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

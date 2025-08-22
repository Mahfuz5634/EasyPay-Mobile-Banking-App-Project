// login-button
document.getElementById("loginBtn").addEventListener("click", function (event) {
  event.preventDefault();

  const mobileNumber = 1687848893;
  const password = "easypay12";

  let mobileNumbervalue = document.getElementById("mobile-Number").value;
  mobileNumbervalue = parseInt(mobileNumbervalue);

  const pinnumbervalue = document.getElementById("pin-number").value;

  if (mobileNumber === mobileNumbervalue && password === pinnumbervalue) {
    window.location.href = "main.html";
  } else {
    alert("Wrong Number Or Password");
  }
});

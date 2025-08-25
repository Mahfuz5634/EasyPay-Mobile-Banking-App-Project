

let transectionArray=[];
let myPin = "easypay12";

document
  .getElementById("add-money")
  .addEventListener("click", function (event) {
    event.preventDefault();

  let balanceElement = document.getElementById("total-balance");

    let totalBalance = parseFloat(balanceElement.innerText);
    let amountAdd = parseFloat(document.getElementById("amount-add").value);
    let totalsum = totalBalance + amountAdd;

    let pinNumber = document.getElementById("pin-numbers").value;

    if (myPin === pinNumber) {
      balanceElement.innerText = totalsum;
      const addMoneyData={
         name:'Add Money',
         time: new Date().toLocaleTimeString()
      }
      transectionArray.push(addMoneyData);

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
    const addMoneyData={
         name:'Cash Out',
         time: new Date().toLocaleTimeString()
      }
      transectionArray.push(addMoneyData);
  });

// toggleing
const addMoneyBtn = document.getElementById("add-money-button");
const cashoutBtn = document.getElementById("cashout-button");

document
  .getElementById("add-money-button")
  .addEventListener("click", function () {
    const allbutton = document.getElementsByClassName("same-class");
    for (let all of allbutton) {
      all.style.display = "none";
     
    }
    const stylebutton=document.querySelectorAll('.all-button');
    for(let alls of stylebutton){
     alls.classList.remove("active-btn");
    }
    document.getElementById("add-money-button").classList.add("active-btn");
    document.getElementById("add-money-section").style.display = "block";
    
  });

document
  .getElementById("cashout-button")
  .addEventListener("click", function () {
    const allbutton = document.getElementsByClassName("same-class");
    for (let all of allbutton) {
      all.style.display = "none";
     
    }
     const stylebutton=document.querySelectorAll('.all-button');
    for(let alls of stylebutton){
     alls.classList.remove("active-btn");
    }
    document.getElementById("cashout-button").classList.add("active-btn");
    document.getElementById("cashout-section").style.display = "block";
 
  });

document
  .getElementById("transfer-button")
  .addEventListener("click", function () {
    const allbutton = document.getElementsByClassName("same-class");
    for (let all of allbutton) {
      all.style.display = "none";
      
    }
     const stylebutton=document.querySelectorAll('.all-button');
    for(let alls of stylebutton){
     alls.classList.remove("active-btn");
    }
    document.getElementById("transfer-button").classList.add("active-btn");
    document.getElementById("transfermoney-section").style.display = "block";

  });

document.getElementById("get-bonus").addEventListener("click", function () {
  const allbutton = document.getElementsByClassName("same-class");
  for (let all of allbutton) {
    all.style.display = "none";
  }
   const stylebutton=document.querySelectorAll('.all-button');
    for(let alls of stylebutton){
     alls.classList.remove("active-btn");
    }
    document.getElementById("get-bonus").classList.add("active-btn");
  document.getElementById("get-bonus-section").style.display = "block";
});

document.getElementById("pay-bill").addEventListener("click", function () {
  const allbutton = document.getElementsByClassName("same-class");
  for (let all of allbutton) {
    all.style.display = "none";
  }
   const stylebutton=document.querySelectorAll('.all-button');
    for(let alls of stylebutton){
     alls.classList.remove("active-btn");
    }
    document.getElementById("pay-bill").classList.add("active-btn");
  document.getElementById("pay-bill-section").style.display = "block";
});

// transection-section

document.getElementById("transection-button").addEventListener("click", function () {
  const allbutton = document.getElementsByClassName("same-class");
  for (let all of allbutton) {
    all.style.display = "none";
  }
   const stylebutton=document.querySelectorAll('.all-button');
    for(let alls of stylebutton){
     alls.classList.remove("active-btn");
    }
    document.getElementById("transection-button").classList.add("active-btn");
  document.getElementById("transection-section").style.display = "block";
  let transectionSectionData=document.getElementById('transection-history');
  transectionSectionData.innerHTML = ""; 

  for(let data of transectionArray){
    let newData=document.createElement('div');
    newData.innerHTML=`
     <div class="flex justify-between items-center p-4 rounded-2xl bg-[#ffffff] mt-2">
          <div class="flex justify-center items-center gap-4">
             <div class="rounded-full p-3 bg-[#f2f2f2]"><img src="./assets/wallet1.png" alt="" /></div>
             <div>
              <h1 class="text-[15px] font-semibold">${data.name}</h1>
             <p>${data.time}</p>
             </div>
            
          </div>
          <i class="fa-solid fa-ellipsis-vertical"></i>
         </div>
    `
    transectionSectionData.appendChild(newData)
  }
  
  
  

});
document.getElementById('LogoutBtn').addEventListener('click',function(){
   window.location.href='./index.html';
})





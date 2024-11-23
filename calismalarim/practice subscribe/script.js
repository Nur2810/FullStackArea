const myCheckBox = document.getElementById("myCheckBox");
const visaBtn = document.getElementById("visaBtn");
const MasterCardBtn = document.getElementById("MasterCardBtn");
const PayPalBtn = document.getElementById("PayPalBtn");
const submitBtn = document.getElementById("submitBtn");
const subResult = document.getElementById("subResult");
const paymentResult = document.getElementById("paymentResult");

submitBtn.onclick = function () {
  if (myCheckBox.checked) {
    //true
    subResult.textContent = "You are Subscribed!";
  } else {
    subResult.textContent = "You are not Subscribed!";
  }

  if (visaBtn.checked) {
    paymentResult.textContent = "You are paying with visa";
  } else if (MasterCardBtn.checked) {
    paymentResult.textContent = "You are paying with Mastercard";
  } else if (PayPalBtn.checked) {
    paymentResult.textContent = "You are paying with Paypal";
  } else {
    paymentResult.textContent = "You must Select a payment type!";
  }
};

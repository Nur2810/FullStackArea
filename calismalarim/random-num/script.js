/*let min = document.getElementById("min");
let max = document.getElementById("max").value;
console.log(max, typeof max);
let maxInt = parseInt(max, 10);
console.log(maxInt, typeof maxInt);
let btn = document.getElementById("rndm");
let lbl0 = document.getElementById("lbl0");
let a = 0;
let b = 0;

btn.onclick = () => {
  let maxValue = parseInt(document.getElementById("max").value, 10);
  a = Math.floor(Math.random() * maxInt) + 1;
  lbl0.textContent = a;
};
*/

let minInput = document.getElementById("min"); // Min inputunu almak
let maxInput = document.getElementById("max").value; // Max inputunun başlangıç değeri
// String olan max değerini integer'a çeviriyoruz
let maxInt = parseInt(maxInput, 10); // 10 tabanında integer
let btn = document.getElementById("rndm"); // Buton
let lbl0 = document.getElementById("lbl0");

let a = 0;
btn.onclick = () => {
  let minValue = parseInt(minInput.value, 10);
  let maxValue = parseInt(document.getElementById("max").value, 10);

  a = Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;

  lbl0.textContent = a;
};

let lbl = document.getElementById("lbl");
let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let sayac = 0;

btn1.onclick = () => {
  sayac = sayac - 1;
  lbl.innerHTML = sayac;
};

btn3.onclick = () => {
  sayac = sayac + 1;
  lbl.innerHTML = sayac;
};

btn2.onclick = () => {
  sayac = 0;
  lbl.innerHTML = sayac;
};

let hill1 = document.getElementById("hill1");
let hill2 = document.getElementById("hill2");
let hill3 = document.getElementById("hill3");
let hill4 = document.getElementById("hill4");
let hill5 = document.getElementById("hill5");
let leaf = document.getElementById("leaf");
let tree = document.getElementById("tree");
let plant = document.getElementById("plant");
let text = document.getElementById("text");
window.addEventListener("scroll", () => {
  let scrollDown = window.scrollY;
  text.style.marginTop = scrollDown * -2.5 + "px";
  leaf.style.top = scrollDown * -1.5 + "px";
  leaf.style.left = scrollDown * 1.5 + "px";
});

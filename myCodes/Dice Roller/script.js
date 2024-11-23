const input1 = document.getElementById("input");
const button = document.getElementById("button");
const diceResult = document.getElementById("diceResult");
const diceImages = document.getElementById("diceImages");

console.log(input);

function rollDice() {
  let number = 0;
  let randoms = [];
  let input = Number(input1.value);
  for (let i = 0; i < input; i++) {
    number = Math.floor(Math.random() * 6) + 1;
    randoms.push(number);
    for (let y = 0; y < randoms.length; y++) {
      diceImages.innerHTML = '<img src="Dice Roller/dice5.png" alt="" />';
    }
  }
  diceResult.textContent = "Dice:  " + randoms;
}

//console.log(randoms);

const addBtn = document.getElementById("add-btn");
const clearBtn = document.getElementById("clear-btn");
const inputBox = document.getElementById("input-box");
const todoListContainer = document.getElementById("to-do-container");

addBtn.addEventListener("click", () => {
  const paragraph = document.createElement("p");
  todoListContainer.appendChild(paragraph);
  paragraph.innerHTML = inputBox.value;
  inputBox.value = "";
  inputBox.focus();
  
});

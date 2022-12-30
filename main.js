const removeBtn = document.querySelector("#removeBtn");
const addBtn = document.querySelector("#addBtn");
const inputElement = document.querySelector("#example");
const list = document.querySelector("#list");
const listCheckBtn = document.querySelector("#check");
const listRemoveBtn = document.querySelector("#remove");

// Whole list cleaner
removeBtn.addEventListener("click", clean);
function clean() {
  list.innerHTML = "";
}

// Adding new task
addBtn.addEventListener("click", () => {
  let newDiv = document.createElement("newDiv");
  newDiv.id = newDiv;
  list.appendChild(newDiv);
  newDiv.className = "listItem";

  let newElement = document.createElement("newElement");
  newElement.className = "Task";
  newDiv.appendChild(newElement);
  newElement.innerHTML = inputElement.value;

  if (inputElement.value.length < 1) {
    alert ('Field can`t be empty')
    newDiv.remove()
  }

  let newCheckEl = document.createElement("newCheckEl");
  newCheckEl.className = "check";
  newCheckEl.type = "button";
  newDiv.appendChild(newCheckEl);

  let newRemoveEl = document.createElement("newRemoveEl");
  newRemoveEl.className = "remove";
  newRemoveEl.type = "button";
  newDiv.appendChild(newRemoveEl);
});

// Task remove button 
listRemoveBtn.addEventListener("click", () => {
    newDiv.removeChild()
});

const removeBtn = document.querySelector("#removeBtn");
const addBtn = document.querySelector("#addBtn");
const inputElement = document.querySelector("#example");
const list = document.querySelector("#list");
const listCheckBtn = document.querySelector("#check");
const listRemoveBtn = document.querySelector("#remove");
const listItem = document.querySelector("#listItem");

// Whole list cleaner
removeBtn.addEventListener("click", clean);
function clean() {
  list.innerHTML = "";
}

// Remove old task
listRemoveBtn.addEventListener("click", () => {
  list.removeChild(listItem);
});

//Mark old task
listCheckBtn.addEventListener("click", () => {
  listCheckBtn.classList.add("inProcess");
});

// Adding new task
addBtn.addEventListener("click", () => {
  let newDiv = document.createElement("newDiv");
  newDiv.id = newDiv;
  list.appendChild(newDiv);
  newDiv.className = "listItem";
  newDiv.id = "newDiv"; 

  let newElement = document.createElement("newElement");
  newElement.className = "Task";
  newDiv.appendChild(newElement);
  newElement.innerHTML = inputElement.value;

  if (inputElement.value.length < 1) {
    alert("Field can`t be empty");
    newDiv.remove();
  } else if (inputElement.value.length > 40) {
    alert("You reached maximum length(max. 40)");
    newDiv.remove();
    inputElement.value = "";
  }

  inputElement.value = "";

  let newCheckEl = document.createElement("newCheckEl");
  newCheckEl.className = "check";
  newCheckEl.type = "button";
  newDiv.appendChild(newCheckEl);
  newCheckEl.title = "Mark if done";

  let newRemoveEl = document.createElement("newRemoveEl");
  newRemoveEl.className = "remove";
  newRemoveEl.type = "button";
  newDiv.appendChild(newRemoveEl);

  // Remove each element
  newRemoveEl.addEventListener("click", () => {
    list.removeChild(newDiv);
  });

  // Mark if task is done
  newCheckEl.addEventListener("click", () => {
    newCheckEl.classList.add("inProcess");
    newDiv.classList.add("taskInProcess");
  });
});

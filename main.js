const removeBtn = document.querySelector("#removeBtn");
const list = document.querySelector("#list")
const listItem = document.querySelectorAll("#listItem")


removeBtn.addEventListener('click', clean);
function clean(){
    list.remove(listItem)
}
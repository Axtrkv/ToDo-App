const removeBtn = document.querySelector("#removeBtn");
const list = document.querySelector("#list")
const listItem = document.querySelectorAll("#listItem")
const div = document.querySelectorAll("#div.list")


removeBtn.addEventListener('click', clean);
function clean(){
    list.remove(div)
}
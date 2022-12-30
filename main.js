const removeBtn = document.querySelector("#removeBtn");
const list = document.querySelector("#list")
const listItem = document.querySelectorAll("#div.listItem")
const div = document.querySelectorAll("#div.list")


// removeBtn.addEventListener('click', clean);
// function clean(){
//     list.removeChild(listItem)
// }

removeBtn.addEventListener('click', clean);
function clean(){
    list.innerHTML = '';
}
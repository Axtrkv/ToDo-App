const addBtnElement = document.querySelector('#addBtn');
const removeBtnElement = document.querySelector('#removeBtn');
const parent = document.querySelector('#list')
const listItem = document.querySelector('#first')

removeBtnElement.addEventListener('click', clear)

function clear() {
    console.log('123');
}

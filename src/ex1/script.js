// Read the code from bottom-up !!!
// Read the code from bottom-up !!!
// Read the code from bottom-up !!!
// Read the code from bottom-up !!!

function onItemDelete(e, listItem) {
    // This function is called when "delete" button inside the item is clicked
    e.stopPropagation(); // Try to remove this line and click "delete" to better understand the DOM bubbling concept
    listItem.remove()
}

function onItemClick(inputValue) {
    // This function is called when an item is clicked
    alert(inputValue)
}

function addItem() {
    // 3) First, we take the text value inside the input with id="list-item-input"
    const input = document.getElementById("list-item-input")
    const inputValue = input.value;

    // 4) We create an item and setting its content to be the "inputValue"
    // we are also adding it a classname called 'list-item' so we can design it and make it look awesome!
    // Last but not least, we are attaching a click event listener so we can show the item name in "alert"
    const listItem = document.createElement("li");
    listItem.classList.add('list-item');
    listItem.innerHTML = inputValue;
    listItem.addEventListener("click", () => onItemClick(inputValue));

    // 5) Inside the list item we just created in 4, we are also adding a button
    // We will use this button to delete the item when its clicked.
    // Here as well, we are adding it a classname called 'list-item-delete-button' so we can position the button
    const listItemDeleteButton = document.createElement("img");
    listItemDeleteButton.src = "images/delete_icon.svg";
    listItemDeleteButton.classList.add('list-item-delete-button');
    listItemDeleteButton.addEventListener("click", (e) => onItemDelete(e, listItem));
    listItem.appendChild(listItemDeleteButton);

    // 6) Finally, we are taking our list item (that contains the text AND the delete button inside it) and appending to the list
    const list = document.getElementById("list");
    list.appendChild(listItem);
}

function onDOMReady() {
    // 2) If we reached here, it means the DOM is ready for manipulation
    // We are attaching an event listener to the button, so when it is clicked the function "addItem" will invoke
    const addItemButton = document.getElementById("list-item-submit")
    addItemButton.addEventListener("click", addItem);
}

document.addEventListener("DOMContentLoaded", function() {
    // 1) Wait for the DOM to be fully rendered, the non-jQuery equivalent of '$(document).ready()'
    onDOMReady();
});
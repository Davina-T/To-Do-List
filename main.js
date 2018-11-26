function removeCheckbox() {
    var checkBox = document.getElementById("myCheck");

    if (checkBox.checked == false) {
        removeElement(checkBox);
    }
}

function removeElement(element) {
    element.parentElement.removeChild(element);
}

function addItem() {
    // Get text input
    const userInput = document.getElementById("userInput");
    const toDoList = document.getElementById("itemsList");

    // Create list item
    const listItem = document.createElement("li");

    // Add input value to list item
    listItem.innerText = userInput.value;

    // Append child
    toDoList.appendChild(listItem);

    // Local Storage
    const itemArray = JSON.parse(localStorage.getItem("ListItems"));
    itemArray.push(userInput.value);
    localStorage.setItem("ListItems", JSON.stringify(itemArray));

    userInput.value = "";
}

function createLocalArray() {
    const toDoList = document.getElementById("itemsList");

    if (localStorage.getItem("ListItems") === null) {
        const Items = [];
        localStorage.setItem("ListItems", JSON.stringify(Items));
    } else {
        const itemArray = JSON.parse(localStorage.getItem("ListItems"));

        for (const item of itemArray) {
            const listItem = document.createElement("li");
            listItem.innerText = item;
            toDoList.appendChild(listItem);
        }
    }
}
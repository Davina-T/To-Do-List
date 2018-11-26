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

    if (userInput.value !== "") {
        // Create list item
        const listItem = document.createElement("li");

        // Add input value to list item
        listItem.innerHTML = `${userInput.value}<i class="fas fa-times"></i><i class="fas fa-check"></i>`;

        // Append child
        toDoList.appendChild(listItem);

        // Local Storage
        const itemArray = JSON.parse(localStorage.getItem("ListItems"));
        itemArray.push(userInput.value);
        localStorage.setItem("ListItems", JSON.stringify(itemArray));

        userInput.value = "";
    } else {
        alert("Please enter something");
    }
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
            listItem.innerHTML = `${item}<i class="fas fa-times"></i><i class="fas fa-check"></i>`;
            toDoList.appendChild(listItem);
        }
    }
}
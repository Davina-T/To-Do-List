function removeCheckbox() {
    var checkBox = document.getElementById("myCheck");

    if (checkBox.checked == false) {
        removeElement(checkBox);
    }
}

function removeElement(element) {
    element.parentElement.removeChild(element);
}

// Get elements
const itemlist = document.querySelector(".itemList");

function addItem() {
    // Get text input
    const userInput = document.getElementById("userInput");
    const toDoList = document.getElementById("itemsList");

    if (userInput.value !== "") {
        // Create list item
        const listItem = document.createElement("li");

        // Add input value to list item
        // const removebtn = document.createElement("button");
        // const checkbtn = document.createElement("button");

        listItem.classList.add("item");
        listItem.innerHTML = `<h5 class="item_name">${userInput.value}</h5>
                              <div class="item_icons">
                                <a href="#" class="complete_item item-icon"><i class="fas fa-check"></i></a>                              
                                <a href="#" class="remove_item item-icon"><i class="fas fa-times"></i></a>
                              </div>`;

        // removebtn.innerHTML = `<i class="fas fa-times" data-name="${userInput.value}"></i>`;
        // removebtn.addEventListener("click", removeItem);
        // checkbtn.innerHTML = `<i class="fas fa-check" data-name="${userInput.value}"></i>`;

        // Append child
        // listItem.appendChild(removebtn);
        // listItem.appendChild(checkbtn);
        toDoList.appendChild(listItem);

        // Local Storage
        const itemArray = JSON.parse(localStorage.getItem("ListItems"));
        itemArray.push(userInput.value);
        localStorage.setItem("ListItems", JSON.stringify(itemArray));

        // Event listeners to icons
        completeItem(userInput.value);


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
            listItem.classList.add("item");

            // const removebtn = document.createElement("button");
            // const checkbtn = document.createElement("button"); 
            
            // removebtn.innerHTML = `<i class="fas fa-times" data-name="${userInput.value}"></i>`
            // removebtn.addEventListener("click", removeItem);
            // checkbtn.innerHTML = `<i class="fas fa-check" data-name="${userInput.value}"></i>`

            listItem.innerHTML = `<h5 class="item_name">${item}</h5>
                                  <div class="item_icons">
                                    <a href="#" class="complete_item item-icon"><i class="fas fa-check"></i></a>                                  
                                    <a href="#" class="remove_item item-icon"><i class="fas fa-times"></i></a>                                   
                                  </div>`;

            // listItem.appendChild(removebtn);
            // listItem.appendChild(checkbtn);            
            toDoList.appendChild(listItem);
        }
    }
}

function completeItem(userinput) {
    const items = itemlist.querySelectorAll('.item');
    items.forEach(function(item) {
        if (item.querySelector(".item_name").textContent === userinput) {
            // Complete event listener
            item.querySelector(".complete_item").addEventListener("click", function () {
                item.querySelector(".item_name").classList.toggle("completed");
                this.classList.toggle("visibility");
            });
            
            // Remove event listener
            item.querySelector(".remove_item").addEventListener("click", function () {
                removeItem(item);
                alert("Item Successfully Removed");
            })
        }
    })
}

function removeItem(listItem) {
    // Local Storage


    removeElement(listItem);
}    
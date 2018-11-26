function removeCheckbox() {
    var checkBox = document.getElementById("myCheck");

    if (checkBox.checked == false) {
        removeElm(checkBox);
    }
}

function removeElm(element) {
    element.parentElement.removeChild(element);
}
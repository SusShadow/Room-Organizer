function saveNumber() {
    const inputElement = document.getElementById('length');
    const inputValueString = inputElement.value;
    const length = Number(inputValueString);
    

    const inputElement1 = document.getElementById('width');
    const inputValueString1 = inputElement1.value;
    const width = Number(inputValueString1);

    if (isNaN(length)) {
        console.log("Please enter a valid number.");
    } else {
        console.log("Length:", length);
    }

    if (isNaN(width)) {
        console.log("Please enter a valid number.");
    } else {
        console.log("Width:", width);
    }
    localStorage.setItem("length", length);
    localStorage.setItem("width", width);
    window.location.href = "display.html";
}

const displaySection = document.querySelector(".displaySection");
const clear = document.getElementById("clear");
const backspace = document.getElementById("backspace");
const numbers = document.querySelectorAll('.num');
const operators = document.querySelectorAll(".operator");

var contentDisplay = [];
var num1 = "";
var num2 = "";
var operator = "";


/* Listening to the clicks on the operator and doing certain task. */
operators.forEach(btn => btn.addEventListener('click', function() {
    operator = btn.innerText;
    num1 = contentDisplay.join("");
    contentDisplay.splice(0, contentDisplay.length);
    console.log(operator);
}))


/* This listen to "C" button, when clicked it clear the board and variables */
clear.addEventListener("click", function() {
    displaySection.innerHTML = "";
    contentDisplay.splice(0, contentDisplay.length);
    num1 = 0;
    num2 = 0;
    operator = "";
    console.log(contentDisplay);
});


/* It listens to backspace button, when clicked it clears the last element and refreshes the board. */
backspace.addEventListener('click', function(e) {
    if (operator === "") {
        displaySection.removeChild(displaySection.lastElementChild);
        contentDisplay.pop();
        num1 = num1.slice(0, -1);
        dis(contentDisplay.join(""));
    } else {
        displaySection.removeChild(displaySection.lastElementChild);
        contentDisplay.pop();
        num2 = num2.slice(0, -1);
        dis(contentDisplay.join(""));
    }
    console.log(contentDisplay);
})


/* this function display for whatever it has been called inside the board */
function dis(val) {
    const p = document.createElement('p');
    p.innerText = (val);
    displaySection.appendChild(p);
}


/* this listens to number button and add to variables to be used later. */
numbers.forEach(num => num.addEventListener('click', function() {
    displaySection.innerHTML = "";
    if (operator === "") {
        contentDisplay.push(this.innerText);
        dis(contentDisplay.join(""));
    } else {
        contentDisplay.push(this.innerText);
        dis(contentDisplay.join(""));
    }
    console.log(num1, typeof(num1), num2, typeof(num2), contentDisplay);
}))


/* This listens to "=" and completes the task as per the operator selection */
document.getElementById("=").addEventListener('click', function(e) {
    var result;
    num2 = contentDisplay.join("");
    displaySection.innerHTML = "";
    contentDisplay.splice(0, contentDisplay.length);
    switch (operator) {
        case "+":
            result = parseFloat(num1) + parseFloat(num2);
            break;
        case "-":
            result = parseFloat(num1) - parseFloat(num2);
            break;
        case "*":
            result = parseFloat(num1) * parseFloat(num2);
            break;
        case "/":
            result = parseFloat(num1) / parseFloat(num2);
            break;
    }
    dis(result.toFixed(2));
    num1 = result;
    num2 = "";
    contentDisplay = [...result.toString()];
    operator = "";
    console.log(result);
})

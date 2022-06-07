const displayLastValue = document.querySelector(".display_lastValue");
const displayCurrentValue = document.querySelector(".display_currentValue");
const buttonsNumbers = document.querySelectorAll(".calculator_number");
const buttonOperattors = document.querySelectorAll(".calculator_operator");


const display = new Display(displayLastValue, displayCurrentValue);

buttonsNumbers.forEach(button =>{
    button.addEventListener("click", ()=>display.addNumber(button.innerHTML));
});


buttonOperattors.forEach(buttonOp =>{
    buttonOp.addEventListener("click", ()=>display.operation(buttonOp.value))
});
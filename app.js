let numbers = ["", "", ""];
let i = 0
let operand;


const numberButtons = document.querySelector('.buttons-grid');
numberButtons.addEventListener('click', function (e) { doSomeMath(e.target) })

const deleteBtn = document.querySelector('#deleteButton')
deleteBtn.disabled = true;

function checkDelete() {
    if (numbers[0] === "" && numbers[1] === "") {
        deleteBtn.disabled = true;
    }
    else {
        deleteBtn.disabled = false;
    }
}

function doSomeMath(e) {
    console.log(e)
    if(e.id === "numPeriod"){
        e.id = "num.";
    }


    if ( e.id.slice(0,-1) === "num") {
        numbers[i] += e.id.slice(3);
        checkDelete();
        updateDisplay(numbers[i]);
    }
    else if ( e.id === "numAdd" || e.id === "numSubtract" || e.id === "numMultiply" || e.id === "numDivide" || e.id === "numEquals") {
        if (e.id === "numEquals") {
            if (numbers[2] != "") {
                numbers[0] = numbers[2];
            }
            operations(numbers, operand);
            checkDelete();
        }
        else {
            operand = e.id.slice(3);
            i = 1;
        }
    }
    else if (e.classList.value === "span2") {
        if (e.id === "clearButton") {
            numbers = ["", "", ""];
            i = 0;
            updateDisplay(0);
            checkDelete();
        }
        else if (e.id === "deleteButton") {
            numbers[i] = numbers[i].slice(0, -1);
            updateDisplay(numbers[i]);
        }
    }
}


function operations(arrayOfNumbers, operator) {
    switch (operator) {
        case "Add":
            numbers[2] = (parseFloat(arrayOfNumbers[0]) + parseFloat(arrayOfNumbers[1])).toString();
            resetAfterOp();
            updateDisplay(numbers[2]);
            break;
        case "Subtract":
            numbers[2] = (parseFloat(arrayOfNumbers[0]) - parseFloat(arrayOfNumbers[1])).toString();
            resetAfterOp();
            updateDisplay(numbers[2]);
            break;
        case "Multiply":
            numbers[2] = (parseFloat(arrayOfNumbers[0]) * parseFloat(arrayOfNumbers[1])).toString();
            resetAfterOp();
            updateDisplay(numbers[2]);
            break;
        case "Divide":
            numbers[2] = (parseFloat(arrayOfNumbers[0]) / parseFloat(arrayOfNumbers[1])).toString();
            resetAfterOp();
            updateDisplay(numbers[2]);
            break;

    }
}

function resetAfterOp() {
    numbers[0] = "";
    numbers[1] = "";
    i = 0;
}


function updateDisplay(num) {
    const display = document.querySelector('#display');
    display.textContent = num;
}


window.addEventListener('keydown', (e) => {
    console.log(e.key)
    if(parseInt(e.key) || e.key == 0){
        e.id = `num${e.key}`
       console.log(e);
       doSomeMath(e)
       // e.code.slice(0,-1) === "Numpad"
        
    }
    else {
      if(e.code === "NumpadAdd"){e.id = "numAdd"}
      if(e.code === "NumpadSubtract"){e.id = "numSubtract"}
      if(e.code === "NumpadMultiply"){e.id = "numMultiply"}
      if(e.code === "NumpadDivide"){e.id = "numDivide"}
      if(e.code === "NumpadEnter"){e.id = "numEquals"}
      console.log(e)
      doSomeMath(e)
    }

}
)




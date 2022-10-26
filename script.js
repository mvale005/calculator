const numBtns = document.querySelectorAll(".put-num-screen");
const calcDisplay = document.querySelector(".display");
const allClearBtn = document.querySelector("#clear-btn");
const operatorBtns = document.querySelectorAll(".put-operator-on");
const equalBtn = document.querySelector(".equal-btn");

let numOnDisplayCount = 0;
let calcDisplayText = "";
let firstOperand = null;
let secondOperand = null;
let sum = 0;
let difference = 0;
let product = 1;
let quotient = 1;
let result = "";

//#region logic to get numbers onto the calculator display

for (const numBtn of numBtns) {
    numBtn.addEventListener("click", addNumToDisplay);
}

function addNumToDisplay(e){
    
    numOnDisplayCount++;
    calcDisplayText+= e.target.innerText;

    if(calcDisplayText.startsWith("0")){
        calcDisplayText ="";
        numOnDisplayCount = 0
    }

    if (numOnDisplayCount <10)
        calcDisplay.innerText = calcDisplayText; 
}
//#endregion

//#region AC button logic
allClearBtn.addEventListener("click",clearScreen);

function clearScreen(e){

    firstOperand = null;
    secondOperand = null;
    console.clear();
    reset();
}

function reset(){
    numOnDisplayCount = 0;
    calcDisplay.innerText = "";
    calcDisplayText = "";
      
}

//#endregion

for (const operatorBtn of operatorBtns) {
    operatorBtn.addEventListener("click",addOperators)
}

function addOperators(e){
    let operator = e.target.innerText;
    console.log(operator);

    if((firstOperand === null) && (secondOperand=== null)){
        firstOperand = Number(calcDisplay.innerText);
        console.log(firstOperand);
        operate(firstOperand,secondOperand,operator);
        reset();
            
    } else if ((firstOperand !== null)&& (secondOperand===null)){
        secondOperand = Number(calcDisplay.innerText);
        console.log(secondOperand);
        operate(firstOperand,secondOperand,operator);
        reset();
    } else if ((firstOperand !== null)&& (secondOperand !==null)){
        secondOperand = Number(calcDisplay.innerText);
        operate(firstOperand,secondOperand,operator);
        reset();

    }
}

function operate(operandOne, operandTwo, operator){

    if(operator === "+"){
        if(operandTwo == null){
            sum = operandOne + 0;
            firstOperand = sum;
            result = sum;
        } else {
            sum = operandOne + operandTwo;
            firstOperand = sum;
            result = sum;
    
        }

    
     console.log(sum);

    } else if(operator === "-"){
        if(operandTwo == null){
            difference = operandOne - 0;
            firstOperand = difference;
            result = difference;
        } else {
            difference = operandOne - operandTwo;
            firstOperand = difference;
            result = difference;
        }

        console.log(difference);

    } else if(operator === "*"){
        if(operandTwo == null){
            product = operandOne * 1;
            firstOperand = product;
            result = product;
        } else {
            product = operandOne * operandTwo;
            firstOperand = product;
            result = product;
        }

        console.log(product);
    } else if(operator === "/"){
        if(operandTwo == null){
            quotient = operandOne / 1;
            firstOperand = quotient;
            result = quotient;
        } else {
            quotient = operandOne / operandTwo;
            firstOperand = quotient;
            result = quotient;
        }

        console.log(quotient);
    }






}


equalBtn.addEventListener("click",equalFunction);

function equalFunction(e){
    calcDisplay.innerText = result;
}

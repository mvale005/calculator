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
let answer = 0;
let operator = "";

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

//#region logic to +, /, * and -
for (const operatorBtn of operatorBtns) {
    operatorBtn.addEventListener("click",addOperators)
}

function addOperators(e){

    if(operator === e.target.innerText){
   

        if((firstOperand === null) && (secondOperand=== null)){
            firstOperand = Number(calcDisplay.innerText);
            //console.log(firstOperand);
            answer = operate(firstOperand,secondOperand,operator);
            reset();
            calcDisplay.innerText = answer;
                    
        } else if ((firstOperand !== null)&& (secondOperand===null)){
            secondOperand = Number(calcDisplay.innerText);
            console.log(secondOperand);
            answer = operate(firstOperand,secondOperand,operator);
            reset();
            calcDisplay.innerText = answer;
        
        } else if ((firstOperand !== null)&& (secondOperand !==null)){
            secondOperand = Number(calcDisplay.innerText);
            answer = operate(firstOperand,secondOperand,operator);
            reset();
            calcDisplay.innerText = answer;
            
        }
    } else {
        operator = e.target.innerText;
        firstOperand = Number(calcDisplay.innerText);
        reset();
    }

}
//#endregion

//#region logic to perform calculations
function operate(operandOne, operandTwo, operator){

    if(operator === "+"){

        sum = operandOne + operandTwo;
        firstOperand = sum;
        result = Number(sum);
        console.log(sum);
        calcDisplay.innerText = sum;
    

    } else if(operator === "-"){
        if(operandTwo == null){
            difference = operandOne - 0;
            firstOperand = difference;
            result = Number(difference);
           
        } else {
            difference = operandOne - operandTwo;
            firstOperand = difference;
            result = Number(difference);
            
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


 return result;



}
//#endregion

//#region Equal Button
equalBtn.addEventListener("click",equalFunction);

function equalFunction(e){
    calcDisplay.innerText = result;
}
//#endregion 
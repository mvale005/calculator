const numBtns = document.querySelectorAll(".put-num-screen");
const calcDisplay = document.querySelector(".display");
const allClearBtn = document.querySelector("#clear-btn");
const operatorBtns = document.querySelectorAll(".put-operator-on");
const dotBtn = document.querySelector(".dotBtn");

let numOnDisplayCount = 0;
let calcDisplayText = "";
let firstOperand = null;
let secondOperand = null;
let sum = 0;
let difference = 0;
let product = 1;
let quotient = 1;
let result = null;
let answer = 0;
let operator = "";
let operatorTwo = "";
let operatorCount = 0;
let opperatorArray = [];
let i = 0;//for opperatorArray
let dotCount = 0;
let equalBtnClicked = false;


//#region adding a decimal points
dotBtn.addEventListener("click",addDot);
function addDot(e){
 if(dotCount<1)   
  calcDisplayText+=e.target.innerText;
  calcDisplay.innerText = calcDisplayText;
  dotCount++;
}
//#endregion

//#region logic to get numbers onto the calculator display

for (const numBtn of numBtns) {
    numBtn.addEventListener("click", addNumToDisplay);
}

function addNumToDisplay(e){
    
    numOnDisplayCount++;
    calcDisplayText+= e.target.innerText;

    if(calcDisplayText.startsWith("0")){
        calcDisplayText ="";
        numOnDisplayCount = 0;
    }

    if (numOnDisplayCount <10)
        calcDisplay.innerText = calcDisplayText; 
}
//#endregion

//#region AC button logic and a reset function
allClearBtn.addEventListener("click",clearScreen);

function clearScreen(e){
 location.reload(); 
}

function reset(){
    numOnDisplayCount = 0;
    calcDisplay.innerText = "";
    calcDisplayText = ""; 
    dotCount = 0;    
}

//#endregion

//#region logic to +, /, * and -
for (const operatorBtn of operatorBtns) {
    operatorBtn.addEventListener("click",addOperators)
}

function addOperators(e){

    if(operatorCount>0){ 
 
        if(e.target.innerText !== "="){
       
            opperatorArray.push(e.target.innerText);
            operator = opperatorArray[i];
            operatorTwo = opperatorArray[i-1];
            console.log(" IF ");

        } else {
    
       

         operatorTwo = operator;
          operator = opperatorArray[i-1];
          console.log(opperatorArray);
          console.log("ELSE ");
          
      
        }

    
        if ((firstOperand !== null)&& (secondOperand===null)){
            secondOperand = Number(calcDisplay.innerText);
 
            if(operator !== operatorTwo)
                answer = operate(firstOperand,secondOperand,operatorTwo);
            else answer = operate(firstOperand,secondOperand,operator);
          
            reset();
            calcDisplay.innerText = answer;     
            operator = operatorTwo;
            i++;
        
        } else if ((firstOperand !== null)&& (secondOperand !==null)){
            
            secondOperand= Number(calcDisplay.innerText);

            if(operator !== operatorTwo)
                answer = operate(firstOperand,secondOperand,operatorTwo);
            else answer = operate(firstOperand,secondOperand,operator);

            reset();
            calcDisplay.innerText = answer;
            i++;           
        }
    } else {      
        opperatorArray.push(e.target.innerText);
        operator = opperatorArray[i];

         firstOperand = Number(calcDisplay.innerText);
        operatorCount++;
        answer = operate(firstOperand,secondOperand,operator)
        reset();
        i++;       
    }
}
//#endregion

//#region logic to perform calculations
function operate(operandOne, operandTwo, operator){

    if(operator === "+"){
        if(operator === operatorTwo){
            sum = operandOne + operandTwo;
            firstOperand = sum;
            result = Number(sum);

        return result;  
        } else {
            sum = result + operandTwo;  
            return result;
        }
      
    } else if(operator === "-"){
        if(operator === operatorTwo){
            difference = operandOne - operandTwo;
            firstOperand = difference;
            result = Number(difference);
        return result;
        } else {
            difference = result - operandTwo
            return result;
        }      
        
     } else if(operator === "*"){
        if(operator === operatorTwo){
            product = operandOne * operandTwo;
            firstOperand = product;
            result = Number(product);
        return result;
        } else {
            product = result * operandTwo
            return result;
        }
        
     } else if(operator === "/"){

        if(operandTwo == 0)
        return "CAN'T";
  
        if(operator === operatorTwo){
            quotient = operandOne / operandTwo;
            firstOperand = quotient;
            result = Number(quotient);

        return result;
        } else {
            quotient = result / operandTwo
            return result;
        }        
     }  
}
//#endregion


const numBtns = document.querySelectorAll(".put-num-screen");
const calcDisplay = document.querySelector(".display");


let numOnDisplayCount = 0;



for (const numBtn of numBtns) {
    numBtn.addEventListener("click", addNumToDisplay);
}

function addNumToDisplay(e){
    numOnDisplayCount++;

    if (numOnDisplayCount <10)
    calcDisplay.innerText += e.target.innerText;
}
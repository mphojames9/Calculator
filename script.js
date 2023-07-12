const display_1 = document.querySelector(".display_1");
const display_2 = document.querySelector(".display_2");
let results_display = document.querySelector(".display_3");
const numberBtn = document.querySelectorAll(".number");
const clearBtn = document.querySelector(".clearAll");
const deleteBtn = document.querySelector(".deleteBtn");
const operationBtn = document.querySelectorAll(".operationalBtn");
const equalBtn = document.querySelector(".equlBtn");

let disNum1 = "";
let disNum2 = "";
let result = null;
let haveDot = false;
let lastOperation = "";

numberBtn.forEach(button => button.addEventListener("click", (e)=>{
    if(e.target.innerText === "." && !haveDot){
        haveDot = true;
    }
    else if(e.target.innerText === "." && haveDot){
        return
    }
    disNum2 += e.target.innerText;
    display_2.innerText = disNum2;
}));

operationBtn.forEach(operation => operation.addEventListener("click", (e)=>{
    if(disNum2 === ""){
        return;
    }
    haveDot = false;
    const operation = e.target.innerText;
    if(disNum2 && disNum1 && lastOperation){
        mathOperation();
    }
    else{
        result = parseFloat(disNum2);
    }
    lastOperation = operation;
    clearVar(lastOperation);
}))

function clearVar(name){
    disNum1 += disNum2 +" "+ name + " ";
    display_1.innerText = disNum1;
    disNum2 = "";
    display_2.innerText ="";
    results_display.innerText = result;
}

function mathOperation(){
    if(lastOperation === "x"){
        result = parseFloat(result) * parseFloat(disNum2);
    } else if(lastOperation === "+"){
        result = parseFloat(result) + parseFloat(disNum2);
    } else if(lastOperation === "-"){
        result = parseFloat(result) - parseFloat(disNum2);
    }
    else if(lastOperation === "/"){
        result = parseFloat(result) / parseFloat(disNum2);
    }
    else if(lastOperation === "%"){
        result = parseFloat(result) % parseFloat(disNum2);
    }
}
    

equalBtn.addEventListener("click",(e)=>{
    mathOperation();
    haveDot = false;
    disNum1 += disNum2;
    display_1.innerText = disNum1;
    disNum2 = parseFloat(result);
    display_2.innerText = disNum2;
    results_display.innerText = "";
    disNum1 = "";
    disNum2 = "";
    lastOperation = "";
});

clearBtn.addEventListener("click",(e)=>{
    disNum1 = "";
    disNum2 = "";
    display_1.innerText = "";
    display_2.innerText = "0 ";
    results_display.innerText = "";
    result = "";
});

deleteBtn.addEventListener("click", (e)=>{
    disNum2 = "";
    display_2.innerText = "";
});


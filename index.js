// input
const bill = document.getElementById('bill')
const people = document.getElementById('people');
//  tip buttons
const b5percent = document.getElementById(".05");
const b10percent = document.getElementById(".10");
const b15percent = document.getElementById(".15");
const b25percent = document.getElementById(".25");
const b50percent = document.getElementById(".50");
const custom = document.getElementById("custom");

let billValue = bill.value
let tipValue = {
    fivePercent: b5percent.value,
    tenPercent: b10percent.value,
    fifteenPercent: b15percent.value,
    twentyfivePercent: b25percent.value,
    fiftyPercent: b50percent.value
}

function fivePercent() {
    
    document.getElementsByClassName("result").innerHTML = billValue * tipValue.fivePercent;  
}

function tenPercent() {
    console.log(billValue * tipValue.tenPercent)   
}

function fifteenPercent() {
    console.log(billValue * tipValue.fifteenPercent)   
}

function twentyFivePercent() {
    console.log(billValue * tipValue.twentyfivePercent)   
}

function fiftyPercent() {
    console.log(billValue * tipValue.fiftyPercent)   
}

function customValue() {
    console.log(billValue * custom.value)
}

<<<<<<< HEAD
// input
=======
>>>>>>> d6ef56e5e410e24c79c6a9e10908bdf61e45ae78
const bill = document.getElementById('bill')
const people = document.getElementById('people');
//  tip buttons
const b5percent = document.getElementById(".05");
const b10percent = document.getElementById(".10");
const b15percent = document.getElementById(".15");
const b25percent = document.getElementById(".25");
const b50percent = document.getElementById(".50");
const custom = document.getElementById("custom");
const tipTotal = document.getElementById("tiptotal");
const totalAmount = document.getElementById("totalamount");
<<<<<<< HEAD
=======
let buttons = document.querySelectorAll('.btn');
>>>>>>> d6ef56e5e410e24c79c6a9e10908bdf61e45ae78

let tipValue = {
    fivePercent: b5percent.value,
    tenPercent: b10percent.value,
    fifteenPercent: b15percent.value,
    twentyfivePercent: b25percent.value,
    fiftyPercent: b50percent.value
}


<<<<<<< HEAD
function fivePercent() { 
    tipTotal.innerHTML = "$" + ((bill.value * tipValue.fivePercent) / people.value).toFixed(2);  
}

function tenPercent() {
    tipTotal.innerHTML = "$" + ((bill.value * tipValue.tenPercent) / people.value).toFixed(2);    
}

function fifteenPercent() {
    tipTotal.innerHTML = "$" + ((bill.value * tipValue.fifteenPercent) / people.value).toFixed(2);   
}

function twentyFivePercent() {
    tipTotal.innerHTML = "$" + ((bill.value * tipValue.twentyfivePercent) / people.value).toFixed(2);   
}

function fiftyPercent() {
    tipTotal.innerHTML = "$" + ((bill.value * tipValue.fiftyPercent) / people.value).toFixed(2);  
=======


function fivePercent() { 
    tipTotal.innerHTML = "$" + ((bill.value * tipValue.fivePercent) / people.value).toFixed(2);
}

function tenPercent() {
    tipTotal.innerHTML = "$" + ((bill.value * tipValue.tenPercent) / people.value).toFixed(2);
}

function fifteenPercent() {
    tipTotal.innerHTML = "$" + ((bill.value * tipValue.fifteenPercent) / people.value).toFixed(2);
}

function twentyFivePercent() {
    tipTotal.innerHTML = "$" + ((bill.value * tipValue.twentyfivePercent) / people.value).toFixed(2);
}

function fiftyPercent() {
    tipTotal.innerHTML = "$" + ((bill.value * tipValue.fiftyPercent) / people.value).toFixed(2);
>>>>>>> d6ef56e5e410e24c79c6a9e10908bdf61e45ae78
}

function customValue() {
    tipTotal.innerHTML = "$" + ((bill.value * (custom.value / 100)) / people.value).toFixed(2);
}


<<<<<<< HEAD
function totalHandler(e) {
    e.preventDefault()
    let billValue = bill.value;
    let peopleValue = people.value;
    let result = billValue / peopleValue;
    totalAmount.innerHTML = `$${result.toFixed(2)}`;
}

document.addEventListener("change", totalHandler);
=======



function totalHandler() {
    
    let billValue = bill.value;
    let peopleValue = people.value;
    let result = billValue / peopleValue;
    
    totalAmount.innerHTML = `$${result.toFixed(2)}`;
    if(peopleValue === "0") {
        document.getElementById('people').style.outlineColor = 'red';
        document.getElementById('warning').style.display = 'block'
        totalAmount.innerHTML ='$0.00'
    } else {
        document.getElementById('people').style.outlineColor = 'lightGreen';
        document.getElementById('warning').style.display = 'none'
    }
}

document.addEventListener("change", totalHandler);

function resetHandler() {
    bill.value = 0
    people.value = 1
    totalAmount.innerHTML = '$0.00'
    tipTotal.innerHTML = '$0.00'
    custom.value = '';
}

>>>>>>> d6ef56e5e410e24c79c6a9e10908bdf61e45ae78

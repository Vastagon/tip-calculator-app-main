let bill = document.getElementById('bill')
let fivePercent = document.querySelector('#fivePercent')
let tenPercent = document.querySelector('#tenPercent')
let fifteenPercent = document.querySelector('#fifteenPercent')
let twentyFivePercent = document.querySelector('#twentyFivePercent')
let fiftyPercent = document.querySelector('#fiftyPercent')
let numberOfPeople = document.querySelector('#numberOfPeople')
let customPercent = document.querySelector('#custom')
let resetButton = document.querySelector('#reset')

let shownTipAmount = document.querySelector('#shownTipAmount')
let shownTotalAmount = document.querySelector('#shownTotalAmount')

let percentage = 0.00.toFixed(2);
let billTotal = 0.00.toFixed(2);
let peopleNum = 0.00.toFixed(2);
let tipAmount = 0.00.toFixed(2);
let totalPerPerson = 0.00.toFixed(2);

bill.addEventListener('keyup', function(event){//Save the bill total after pressing enter to billTotal
    if(event.keyCode === 13){
        billTotal = parseInt(bill.value);
        tipAmount = (billTotal * percentage) / peopleNum;
        totalPerPerson = (tipAmount + billTotal) / peopleNum;

        shownTipAmount.textContent = "$" + tipAmount.toFixed(2);
        shownTotalAmount.textContent = "$" + totalPerPerson.toFixed(2);
    }     
})

numberOfPeople.addEventListener('keyup', function(event){//Saves the number of people after pushing enter to peopleNum
    if(event.keyCode === 13){
        peopleNum = parseInt(numberOfPeople.value);

        tipAmount = ((billTotal * percentage) / peopleNum);
        totalPerPerson = (tipAmount + billTotal) / peopleNum;

        shownTipAmount.textContent = "$" + tipAmount.toFixed(2);
        shownTotalAmount.textContent = "$" + totalPerPerson.toFixed(2);
    }     
})

customPercent.addEventListener('keyup', function(event){//Saves the percentage after pushing enter to percentage
    if(event.keyCode === 13){
        percentage = customPercent.value / 100;

        tipAmount = ((billTotal * percentage) / peopleNum);
        totalPerPerson = (tipAmount + billTotal) / peopleNum;

        shownTipAmount.textContent = "$" + tipAmount.toFixed(2);
        shownTotalAmount.textContent = "$" + totalPerPerson.toFixed(2);
}     
})

resetButton.addEventListener('click', function(){//Reset button reloads the page
    window.location.reload();
})



///Different functions to change percentage. Could be cut down
function setPercent5(){
    percentage = .05;
    tipAmount = ((billTotal * percentage) / peopleNum);
    totalPerPerson = (tipAmount + billTotal) / peopleNum;

    shownTipAmount.textContent = "$" + tipAmount.toFixed(2);
    shownTotalAmount.textContent = "$" + totalPerPerson.toFixed(2);
}
function setPercent10(){
    percentage = .10;
    tipAmount = ((billTotal * percentage) / peopleNum);
    totalPerPerson = (tipAmount + billTotal) / peopleNum;

    shownTipAmount.textContent = "$" + tipAmount.toFixed(2);
    shownTotalAmount.textContent = "$" + totalPerPerson.toFixed(2);
}
function setPercent15(){
    percentage = .15;
    tipAmount = ((billTotal * percentage) / peopleNum);
    totalPerPerson = (tipAmount + billTotal) / peopleNum;

    shownTipAmount.textContent = "$" + tipAmount.toFixed(2);
        shownTotalAmount.textContent = "$" + totalPerPerson.toFixed(2);
}
function setPercent25(){
    percentage = .25;
    tipAmount = ((billTotal * percentage) / peopleNum);
    totalPerPerson = (tipAmount + billTotal) / peopleNum;

    shownTipAmount.textContent = "$" + tipAmount.toFixed(2);
    shownTotalAmount.textContent = "$" + totalPerPerson.toFixed(2);
}
function setPercent50(){
    percentage = .50;
    tipAmount = ((billTotal * percentage) / peopleNum);
    totalPerPerson = (tipAmount + billTotal) / peopleNum;

    shownTipAmount.textContent = "$" + tipAmount.toFixed(2);
    shownTotalAmount.textContent = "$" + totalPerPerson.toFixed(2);
}
fivePercent.addEventListener("click", setPercent5);
tenPercent.addEventListener("click", setPercent10);
fifteenPercent.addEventListener("click", setPercent15);
twentyFivePercent.addEventListener("click", setPercent25);
fiftyPercent.addEventListener("click", setPercent50);









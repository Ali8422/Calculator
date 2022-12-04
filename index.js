let num1=50
let num2=10
document.getElementById("num1-El").textContent+=num1
document.getElementById("num2-El").textContent+=num2
function sum(){
    document.getElementById("result-el").textContent = num1+num2
}
function sub(){
    document.getElementById("result-el").textContent = num1-num2
}
function mul(){
    document.getElementById("result-el").textContent = num1*num2
}
function div(){
    document.getElementById("result-el").textContent = num1/num2
}




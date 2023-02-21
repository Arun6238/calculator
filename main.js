const numbers  = document.querySelectorAll('.num')
const operators = document.querySelectorAll('.opr')
const result = document.querySelector('.result')
const displayAns = document.querySelector('.ans')

const inputSpace = document.querySelector('.inp-space')
const clrButton = document.querySelector('.btn01')
let expression = ''
const symbols = ['+','-','*','/']
inputSpace.value = 0;

// to check if an element is in an array
function checkElement(obj,e){
    if(obj.indexOf(e)+1){
        return true
    }
    else{
        return false
    }
}

for( let i of numbers){
    i.addEventListener('click',function(){
        add(i)
    });
}

for(let i of operators){
    i.addEventListener('click',function(){
        addOperator(i)
    })
}

clrButton.addEventListener('click',clear)

result.addEventListener('click',function(){
    displayAns.innerHTML = expression
    inputSpace.value = eval(expression)
    expression =  inputSpace.value
})

function add(button){
    let newDigit = button.innerHTML;

    if(expression.length == 0 && newDigit == 0)
        inputSpace.value = '0';

    else{
        expression += newDigit 
        inputSpace.value = expression
    }

    console.log(expression);
}

function addOperator(o){
    let operator = o.innerHTML;

    if(!expression.length == 0 && !checkElement( symbols,expression[expression.length-1] ) ){
        expression+=operator;
        inputSpace.value = expression
    }
    else if(operator == '-' && expression[expression.length-1] != '-' )
    {
        expression+=operator;
        inputSpace.value = expression
    
    }
    console.log(expression);
}

function evaluate(e){
    
}

function clear(){
    inputSpace.value = "0";
    displayAns.innerHTML = ''
    expression = '';
    // console.log(expression)
    // expression = ''
}
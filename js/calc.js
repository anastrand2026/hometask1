var backValue = 0, 
    operation = '',
    hasDot = false;


function addDigit( btn ) {
    const input = document.getElementById('display'); // найти Input id='display'

    if(input.value === "0" || operation == '='){
        input.value = btn.value;
        if(operation == '=')
            operation = '';
    } else {
        input.value = input.value + btn.value;
    }
}

function setDot(){
    if(hasDot)
        return;

    const input = document.getElementById('display');

    hasDot = true;
    if(operation == '='){
        input.value = '0.';
        operation = '';
    } else
        input.value = input.value + '.';
}

function backSpace(){
    const input = document.getElementById('display'),
        len = input.value.length;
    
    if(input.value[len - 1] == '.')
        hasDot = false;

    input.value = input.value.substr(0, len - 1);

    if(input.value == '')
        input.value = 0;
}

function clearAllCalc(){
    document.getElementById('display').value = 0;
    backValue = 0;
    operation = '';
    hasDot = false;
}

function clearEntry(){
     document.getElementById('display').value = 0;
     hasDot = false;
}

function calcOperation(value){
    if(value === undefined) 
        value = 0;

    switch(operation){
        case '-':
            value = backValue - value;
            break;
        
        case '+':
            value = backValue + value;
            break;

        case '*':
            value = backValue * value;
            break;
        
        case '/':
            value = backValue / value;
            break;

        default:
            // действия по умолчанию, если нет указанных значений выше
            return value;
    }

    return value;
}

function setOperation(oper){
    let input = document.getElementById('display'),
        value = 0;

    value = calcOperation(+input.value);

    operation = oper;
    backValue = value;
    input.value = 0;
}

function enterCalc() {
    let input = document.getElementById('display'),
        value = 0;

    value = calcOperation(+input.value);

    operation = '=';
    backValue = 0;
    input.value = value;
}
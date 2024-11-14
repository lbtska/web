function calculator() {
    let num1 = parseFloat(prompt("Input 1 num:"));
    let operator = prompt("Operation (+, -, *, /):");
    let num2 = parseFloat(prompt("Input 2 num:"));
    let result;
    
    switch(operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            if (num2 !== 0) {
                result = num1 / num2;
            } else {
                alert("Cant divide 0");
                return;
            }
            break;
        default:
            alert("Invalid operator");
            return;
    }
    
    alert(`Результат: ${num1} ${operator} ${num2} = ${result}`);
}
calculator(
);
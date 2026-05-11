function calulateAddition(num1, num2) {
    return num1 + num2;
}

function calculateSubtraction(num1, num2) {
    return num1 - num2;
}

function calculateMultiplication(num1, num2) {
    return num1 * num2;
}
function calculateDivision(num1, num2) {
    if (num2 === 0) {
        throw new Error("Cannot divide by zero");
    }   
    return num1 / num2;
}

document.getElementById("addbutton").addEventListener("click", function() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const result = calulateAddition(num1, num2);
    document.getElementById("result").innerHTML = "Result: " + result;
});
document.getElementById("subtractbutton").addEventListener("click", function() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const result = calculateSubtraction(num1, num2);
    document.getElementById("result").innerHTML = "Result: " + result;
});
document.getElementById("multiplybutton").addEventListener("click", function() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const result = calculateMultiplication(num1, num2);
    document.getElementById("result").innerHTML = "Result: " + result;
}); 
document.getElementById("dividebutton").addEventListener("click", function() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value); 
    try {
        const result = calculateDivision(num1, num2);
        document.getElementById("result").innerHTML = "Result: " + result;
    } catch (error) {
        document.getElementById("result").innerHTML = error.message;
    }
});

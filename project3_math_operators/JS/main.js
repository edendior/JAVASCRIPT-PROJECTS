// addition function
function add_Numbers() {
    var sum = 5 + 3;
    document.getElementById("Add").innerHTML = "5 + 3 = " + sum;
}

// subtraction function
function subtract_Numbers() {
    var difference = 10 - 4;
    document.getElementById("Subtract").innerHTML = "10 - 4 = " + difference;
}

// multiplication function
function multiply_Numbers() {
    var product = 6 * 7;
    document.getElementById("Multiply").innerHTML = "6 * 7 = " + product;
}

// modulus operator function
function simple_Modulus() {
    var Modulus = 22 % 5;
    document.getElementById("Modulus").innerHTML = "22 divided by 5 leaves a remainder of " + Modulus;
}

// increment function
function increment_Number() {
    var X = 7;
    X++;
    document.write(X);
}

// decrement function
function decrement_Number() {
    var Y = 10;
    Y--;
    document.write(Y);
}

// random number pop up
window.alert(Math.random() * 100);


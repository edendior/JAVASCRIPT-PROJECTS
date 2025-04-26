document.write(typeof "I am") //asking JS to tell us the type of the data

var expression = "I am " + 27 + " years old."; // string concatenation with a number and words
document.write(expression);

//is 5 the same as 5?
document.write(5 == 5);

//telling JS what X and Y equal. then asks JS to compare them
//based on the data given
X = 2
Y = 2
document.write(X === Y);

//is 10 greater than 5?
document.write(10 > 5);

// is 2 less than 8?
document.write(2 < 8);

// is it true that 5 is greater than 2 AND 10 greater than 5?
document.write(5 > 2 && 10 > 5 );

// is it true that 5 is greater than 10 OR 10 is greater than 5?
document.write(5 > 10 || 10 > 5);

function not_Function(){
    document.getElementById("Not").innerHTML = !(5 > 10); 
    // we're basically asking JS to lie and say 5 > 10 is true. 
}

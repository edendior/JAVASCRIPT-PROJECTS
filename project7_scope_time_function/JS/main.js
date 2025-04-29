function get_Date() { 
    var hour = new Date().getHours();
    if (hour < 12) { //if the time is less than 12 (earlier than noon), greeting is "good morning" 
        document.getElementById("Greeting").innerHTML = "Good Morning!";
    } else if (hour >= 12 && hour < 16) { //from noon to 4pm "good afternoon will diplay"
        document.getElementById("Greeting").innerHTML = "Good Afternoon!";
    } else {//this statement works because the time is based on 24 hours, meaning numbers 1-16 are covered above
        //from 5pm to 12am (16-24)
        document.getElementById("Greeting").innerHTML = "Good Evening!";
    }
}//"Good night" is not shown here though it technically could be with another 
//else if statement. However, people usually say "Good Night" at departure. 

// added this so the correct greeting will show as soon as the screen loads
//without needed direct user interaction
window.onload = get_Date;

// global variable 
globalExample = "friend";

//function assigns the local variable temp and uses just an if and else statement
//since water can only freeze at 32 degrees 
function checkTemp() {
    var temp = document.getElementById("temp").value; 
    if (temp <= 32) { //checks if temp is less than or equal to 32
        message = "your water will freeze, " + globalExample + "!"; 
        // if statement is true = displays the message above 
    }
    else { //if the temp is more than 32 display the message below
        message = "your water will not freeze, " + globalExample + ".";
    }

    document.getElementById("freezeCheck").innerHTML = message;
}

//function intentionally has an error to show how to debug with console.log()
function errorFunction() {
    var number = 5; //creates a variable called number
    // intentional typo "nummber" vs "number"
    console.log(nummber + 10); // <-- the typo is basically using a 
    //variable that does not exist bc it hasn't been defined.

    //Console message says:
    //main.js:40 Uncaught ReferenceError: nummber is not defined
    //at errorFunction (main.js:40:17)
    //at <anonymous>:1:1
}


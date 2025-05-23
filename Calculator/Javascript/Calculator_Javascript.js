//Creates an object to keep track of values
const Calculator = {
    //this will display 0 on the calculator screen.
    Display_Value: '0',
    //this will hold the first operand for any expressions, we set it to null for now.
    First_Operand: null,
    //this checks whether or not the second operand has been inputted by the user.
    Wait_Second_Operand: false,
    //this will hold the operator, we set it to null for now
    operator: null,
};

//this modifies values each time a button is clicked on.
 function Input_Digit(digit) { 
    const {Display_Value, Wait_Second_Operand } = Calculator; 
    //this checks if the Wait_Second_Operand is true and sets Display_Value
    //to the key was clicked on.
    if (Wait_Second_Operand === true) {
        Calculator.Display_Value = digit;
        Calculator.Wait_Second_Operand = false;
    } else {
        //this overwrites Display_Value id the current calue is 0
        //otherwise it adds onto it.
        Calculator.Display_Value = Display_Value === '0' ? digit : Display_Value + digit;
    }
 }

 //this section handles decimal points. 
 function Input_Decimal(dot) {
    //this ensures that accidental clicking of the decimal point doesn't
    //cause bugs in the operation.
    if (Calculator.Wait_Second_Operand === true) return;
    if (!Calculator.Display_Value.includes(dot)) {
        //we are saying that if the Display_Value does not containt a decimal point
        //we want to add a decimal point.
        Calculator.Display_Value += dot;
    }

 }
 //this section handles operators
 function Handle_Operator(Next_Operator) { 
    const {First_Operand, Display_Value, operator} = Calculator;
    //when an operator key is pressed we convert the current number 
    //displayed on the screento a number and then store the result in 
    //Calculator.First_Operand if it doesn't already exist. 
    const Value_of_Input = parseFloat(Display_Value);
    //checks if an operator already exists and if Wait_Second_Operand is true,
    //then updates the operator an exits from the function.
    if (operator && Calculator.Wait_Second_Operand) {
        Calculator.operator = Next_Operator;
        return;
    }
    if(First_Operand == null) {
        Calculator.First_Operand = Value_of_Input; 
    } else if (operator) {//checks if operator already exists
        const Value_Now = First_Operand || 0;
        //if operator exists, property lookup is performed for the operator 
        //in the Perform_Calculation object and the function that matches the
        //operator is exexcuted. 
        let result = Perform_Calculation[operator](Value_Now, Value_of_Input);
        //Here we add a ficed amount of numbers after the decimal. 
        result = Number(result).toFixed(9);
        //this will remove any trailing 0's
        result = (result *1).toString();
        Calculator.Display_Value = parseFloat(result);
        Calculator.First_Operand = parseFloat(result);
    }
    Calculator.Wait_Second_Operand = true;
    Calculator.operator = Next_Operator;
 }
 const Perform_Calculation = {
    '/': (First_Operand, Second_Operand) => First_Operand / Second_Operand,
    '*': (First_Operand, Second_Operand) => First_Operand * Second_Operand,
    '+': (First_Operand, Second_Operand) => First_Operand + Second_Operand,
    '-': (First_Operand, Second_Operand) => First_Operand - Second_Operand,
    '=': (First_Operand, Second_Operand) => Second_Operand
 };
 function Calculator_Reset() {
    Calculator.Display_Value = '0';
    Calculator.First_Operand = null;
    Calculator.Wait_Second_Operand = false;
    Calculator.operator = null;
 }
 //This function updates the calculator screen with the contents of Display_Value
 function Update_Display() {
    //makes use of the caulcutor-screen class to target the
    //input tag in the HTML document 
    const display = document.querySelector('.calculator-screen');
    display.value = Calculator.Display_Value;
 }

 Update_Display();
 //this section monitors button clicks
 const keys = document.querySelector('.calculator-keys');
 keys.addEventListener('click', (event) => {
    //the target variable is an object that represents the element 
    //that was clicked 
    const { target } = event;
    //if the element that was clicked on is not a button, exit the function 
    if (!target.matches('button')) {
        return;
    }
    if (target.classList.contains('operator')) {
        Handle_Operator(target.value);
        Update_Display();
        return;
    }
    if (target.classList.contains('decimal')) {
        Input_Decimal(target.value);
        Update_Display();
        return;
    }
    //Ensures that AC clears all inputs from the Calculator screen.
    if (target.classList.contains ('all-cleat')) {
        Calculator_Reset();
        Update_Display();
        return;
    }
    Input_Digit(target.value);
    Update_Display();
 })
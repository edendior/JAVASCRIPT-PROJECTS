function Vote_Function() { //ternanry operation that is checking age based on input. if the input is less than 18
    //the user can't vote. A message displays to the user depending on if their input is greater or less
    //than 18. 
    var age, Can_vote;
    age = document.getElementById("age").value;
    Can_vote = (age < 18) ? "You are too young":"You are old enough";
    document.getElementById("vote").innerHTML = Can_vote + " to vote";

}

function Person(first, last, age, eye) { // this function displays a characters data that's 
// linked to their own buttons. the "this" is a place holder for the names of the characters 
//which are described in their own variable. 
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
  }

var Jack = new Person("Jack", "Skellington", "Ageless", "black");
var Sally = new Person("Sally", "Stocking", 18, "brown");
var Zero = new Person("Zero", "Skellington", 3, "black");

function JackInfo() {
    document.getElementById("Jack_Info").innerHTML =
    "Jack is " + Jack.age + ". His last name is " + Jack.lastName + ". He has " 
    + Jack.eyeColor + " eyes.";
}

function SallyInfo() {
    document.getElementById("Sally_Info").innerHTML =
    "Sally is " + Sally.age + ". Her last name is " + Sally.lastName + ". She has " 
    + Sally.eyeColor + " eyes.";
}

function ZeroInfo() {
    document.getElementById("Zero_Info").innerHTML =
    "Zero is " + Zero.age + ". His last name is " + Zero.lastName + ". He has " 
    + Zero.eyeColor + " eyes.";
  }
  //below is a nested function that adds 1 to 9 and returns the answer (10).
  //a button has been added to the HTML to get the answer upon clicking. 
  function Nested_Function() {
    document.getElementById("Counting").innerHTML = Count();
    function Count(){
        var Starting_point = 9;
        function Plus_one() {Starting_point += 1;}
        Plus_one();
        return Starting_point;
    }
  }
function myFunction(){ //sets up function called myFunction which will display these two 
    //strings when called to create a whole sentence
    var sentence = "I am learning JavaScript";
    sentence += " it is so fun!"; //+= is the concatenation operator
    //it adds the first string to the second string
    document.getElementById("concatenate").innerHTML = sentence;
}
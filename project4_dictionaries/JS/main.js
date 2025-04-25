function my_Dictionary() { //creates the function my_Dictionary
    var Animal = {
        Species: "Cat",
        Color: "Black and White",
        Breed: "Maine Coon",
        Age: 5,
        Sound: "Meow!"
    };
    delete Animal.Sound; //deletes sound property
    document.getElementById("Dictionary").innerHTML = Animal.Sound; //calls for the sound property from animal variable
    // but it cannot be displayed because it was deleted
}

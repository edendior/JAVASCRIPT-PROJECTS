function full_Sentence(){ //all the different parts of the sentence are broken into 
    //their own variable. 
    var part_1 = "Together, ";
    var part_2 = "all these parts ";
    var part_3 = "create one ";
    var part_4 = "sentence.";
    var whole_sentence = part_1.concat(part_2, part_3, part_4); //here we are concatenating the 
    //variables together to form a full sentence. we can choose how it displays by how they're 
    //arranged in the string above. if we typed: part_2.concat(part_3, part_4, part_1), the sentence 
    // would be "all these parts create one sentence. Together," 
    document.getElementById("Concatenate").innerHTML = whole_sentence;
}

function slice_Method(){ //the slice method uses 2 variables for a full sentence then the section to be 
    //"sliced" and displayed. in this one "February" will be displayed when a button is clicked
    var Sentence = "February has 28 days.";
    var Section = Sentence.slice(0,9);
    document.getElementById("Slice").innerHTML = Section;
}

function string_Method(){//777 will be displayed when HTML calls the function through a user clicking a button
    var X =777;
    document.getElementById("Numbers_to_string").innerHTML=X.toString();
}
function precision_Method(){
    var X = 12938.3012987376112;
    document.getElementById("Precision").innerHTML = X.toPrecision(5);
    //shows the first 5 digits and rounds up or down based on 6th number. 
}
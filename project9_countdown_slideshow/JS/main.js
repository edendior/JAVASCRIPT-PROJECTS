function countdown() { 
    var seconds = document.getElementById("seconds").value;
    function tick(){
        seconds = seconds - 1;
        timer.innerHTML = seconds;
        var time = setTimeout(tick, 1000); //each number shown lasts 1 second 
        if (seconds == -1) {  //asks to count DOWN from what number is entered in the input field 
            alert("Go! Go! Go!");
            clearTimeout(time);
            timer.innerHTML = "";
        }
    }
    tick(); //calls the nested function "tick" to count down
}

let slideIndex = 1; //one slide/image shows at a time 

window.onload = function () { //browser will load with slide show's first image
  showSlides(slideIndex);
};

// next slide when image is clicked
function plusSlides(n) { //n represents the number of slides/images to move
  showSlides(slideIndex += n); //moves up one to next number in slide 
}

function showSlides(n) { //
  const slides = document.getElementsByClassName("mySlides"); //gets all slides

  if (slides.length === 0) return; //if there are no slides then exit early 

  if (n > slides.length) { //if n is greater than the number of slides go to the first slide
    slideIndex = 1;
  }
  if (n < 1) { //if n is less than 1 go to the last slide 
    slideIndex = slides.length;
  }

  for (let i = 0; i < slides.length; i++) { //hides the slides (if 1 is showing, hide 2 + 3)
    slides[i].style.display = "none";
  }

  slides[slideIndex - 1].style.display = "block"; //show the current slide based on updated slideIndex 
}

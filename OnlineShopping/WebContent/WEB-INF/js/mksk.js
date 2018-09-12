var slideIndex = 0;
showSlides();

function showSlides() {
	var i;
	var slideshowdiv = document.getElementById("slideshow-div");
	alert("slideshowdiv : " + slideshowdiv);
	var slides = slideshowdiv.getElementsByClassName("mySlides");
    alert("total slides : " + slides.length);
    var dots = document.getElementsByClassName("dot");
    alert("total dots : " + dots.length);
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1;}    
    
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 2000); // Change image every 2 seconds
}

var slideIndex = 0;
showSlides();

function showSlides() {
	var i;
	var slideshowdiv = document.getElementById("slideshow-div");
	var slides = slideshowdiv.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
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
    setTimeout(showSlides, 5000); // Change image every 2 seconds
};

/* Opening and Closing of Modal Boxes */

function closestEl(el, selector) {
    var doc = el.document || el.ownerDocument;
    var matches = doc.querySelectorAll(selector);
    var i;
    while (el) {
        i = matches.length - 1;
        while (i >= 0) {
            if (matches.item(i) === el) {
                return el;
            }
            i -= 1;
        }
        el = el.parentElement;
    }
    return el;
}
var modalLnks = document.querySelectorAll(".modalLink");
modalLnks.forEach(function addBtnClickEvent(lnk) {
    lnk.onclick = function showModal() {
        var modal = lnk.getAttribute("data-modal");
        document.getElementById(modal).style.display = "block";
    };
});

var closeBtns = document.querySelectorAll(".close");
closeBtns.forEach(function addCloseClickEvent(lnk) {
    lnk.onclick = function closeModal() {
        var modal = closestEl(lnk, ".modal");
        modal.style.display = "none";
    };
});

window.onclick = function closeOnClick(event) {
    if (event.target.className === "modal") {
        event.target.style.display = "none";
    }
};

/*
function openLink(evt, linkName) {
	console.log("evt : " + evt + " linkName : " + linkName);
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    console.log(tabcontent);
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
        console.log(tabcontent[i]);
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
        console.log(tablinks[i].className);
    }
    document.getElementById(linkName).style.display = "block";
    evt.currentTarget.className += " active";
};
*/

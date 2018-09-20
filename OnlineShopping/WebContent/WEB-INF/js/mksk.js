
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

/* Open Tab Contents */ 
function openTabContent(tabContent){
	var elem;
	var tabClass = document.querySelectorAll('.tabcontent');
    var i = 0, l = tabClass.length;
	for (i; i < l; i++) {
		tabClass[i].style.display = 'none';
	}
	document.getElementById(tabContent).style.display = "block";
	elem = document.querySelector('.topnav');
	elem.style.setProperty("margin",0);
}

/* Close Tab Contents if clicked anywhere else on the window */
var element = document.querySelectorAll('.tabcontent');
document.body.addEventListener('click', function(e) {
  var i = 0, l = element.length;
  for(i;i<l;i++)
  {
	if (e.target == element[i]) 
	{
		continue;
	} 
	else 
	{
		element[i].style.display = 'none';	
	}
  }
});


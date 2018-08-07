// html for button <span onclick="toDiv()" id="scrollBtn" title="Scroll"><i class="fas fa-arrow-circle-up"></i></span>
// When the user scrolls down 70px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 70 || document.documentElement.scrollTop > 70) {
        document.getElementById("scrollBtn").style.display = "block";
    } else {
        document.getElementById("scrollBtn").style.display = "none";
    }
}

function toDiv(){
var height1 = 70;

if (document.body.scrollTop > height1 || document.documentElement.scrollTop > height1) {
    var elmnt = document.getElementById("Home");
    elmnt.scrollIntoView();
}
}

// simple type writter effect in javascript
// <body onload=setTimeout(myFunction, 3000)"> - load effect on page load after 3 seconds
// <p id="demo"></p> - place the text on page

var i = 0;
var txt = 'Lorem ipsum dummy text blabla.'; // text to write
var speed = 50; // speed of type

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

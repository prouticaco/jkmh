function change(valeur)
{
    var n1 = this.name;
    var changer = document.getElementById("imgcrea");

    if (changer.style.visibility = 'hidden')
    {
        changer.style.visibility = 'visible';
    }
    else
    {
        changer.style.visibility = 'hidden';
    }
};


var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";
  }
  x[slideIndex-1].style.display = "block";
}


let profil = document.getElementById('img2')
let text = document.getElementById('art5')
let bjr = document.getElementById('bjr')

profil.addEventListener("click",
function(){
  if (text.style.visibility = "hidden") {
     text.style.visibility = "visible"
     profil.style.margin = "-460px 0 0 5%"
     bjr.style.visibility = "hidden"
     profil.style.transitionDuration="1s";
  }

})






let demarche = document.getElementById('demarche')
let imgcrea = document.getElementById('imgcrea')
let listedem = document.getElementById('navdem')

demarche.addEventListener("mouseenter",
function(){
  if (imgcrea.style.visibility = "visible") {
     imgcrea.style.visibility = "hidden"
     listedem.style.visibility = "visible"

  }

})


demarche.addEventListener("mouseleave",
function(){
  if (listedem.style.visibility = "visible") {
     imgcrea.style.visibility = "visible"
     listedem.style.visibility = "hidden"

  }

})



document.addEventListener('DOMContentLoaded', function() {
  window.onscroll = function(ev) {
    document.getElementById("cRetour").className = (window.pageYOffset > 100) ? "cVisible" : "cInvisible";
  };
});




let music = document.getElementById('music')

music.addEventListener("mouseenter",
function(){
  music.style.color = "#40A497";

});

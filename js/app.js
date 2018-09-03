/*var navBar = document.getElementById("soccer-nav");
var link1 = document.getElementById("link1");
var link2 = document.getElementById("link2");
var link3 = document.getElementById("link3");
var jumbo = document.getElementById("principal");
var tema = 0;*/
function cambiarTema(option){
    switch(option){
        case 0:
            document.getElementById("soccer-nav").classList.add("soccer-nav--default");
            document.getElementById("link1").classList.add("nav-link--soccer-site--default");
            document.getElementById("link2").classList.add("nav-link--soccer-site--default");
            document.getElementById("link3").classList.add("nav-link--soccer-site--default");
            document.getElementById("principal").classList.add("jumbotron--default");
            break;
        case 1:
            document.getElementById("soccer-nav").classList.add("soccer-nav--one");
            document.getElementById("link1").classList.add("nav-link--soccer-site--one");
            document.getElementById("link2").classList.add("nav-link--soccer-site--one");
            document.getElementById("link3").classList.add("nav-link--soccer-site--one");
            document.getElementById("principal").classList.add("jumbotron--one");
            break;
        case 2:
            document.getElementById("soccer-nav").classList.add("soccer-nav--two");
            document.getElementById("link1").classList.add("nav-link--soccer-site--two");
            document.getElementById("link2").classList.add("nav-link--soccer-site--two");
            document.getElementById("link3").classList.add("nav-link--soccer-site--two");
            document.getElementById("principal").classList.add("jumbotron--two");
            break;
    }
}
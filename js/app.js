cambiarTema(0);
function cambiarTema(option){
    switch(option){
        case 0:
            document.getElementById("soccer-nav").classList.add("soccer-nav--default");
            document.getElementById("link1").classList.add("nav-link--soccer-site--default");
            document.getElementById("link2").classList.add("nav-link--soccer-site--default");
            document.getElementById("link3").classList.add("nav-link--soccer-site--default");
            document.getElementById("principal").classList.add("jumbotron--default");

            document.getElementById("soccer-nav").classList.remove("soccer-nav--one");
            document.getElementById("link1").classList.remove("nav-link--soccer-site--one");
            document.getElementById("link2").classList.remove("nav-link--soccer-site--one");
            document.getElementById("link3").classList.remove("nav-link--soccer-site--one");            
            document.getElementById("principal").classList.remove("jumbotron--one");

            document.getElementById("soccer-nav").classList.remove("soccer-nav--two");
            document.getElementById("link1").classList.remove("nav-link--soccer-site--two");
            document.getElementById("link2").classList.remove("nav-link--soccer-site--two");
            document.getElementById("link3").classList.remove("nav-link--soccer-site--two");            
            document.getElementById("principal").classList.remove("jumbotron--two");
            
            break;
        case 1:
            document.getElementById("soccer-nav").classList.add("soccer-nav--one");
            document.getElementById("link1").classList.add("nav-link--soccer-site--one");
            document.getElementById("link2").classList.add("nav-link--soccer-site--one");
            document.getElementById("link3").classList.add("nav-link--soccer-site--one");
            document.getElementById("principal").classList.add("jumbotron--one");

            document.getElementById("soccer-nav").classList.remove("soccer-nav--default");
            document.getElementById("link1").classList.remove("nav-link--soccer-site--default");
            document.getElementById("link2").classList.remove("nav-link--soccer-site--default");
            document.getElementById("link3").classList.remove("nav-link--soccer-site--default");            
            document.getElementById("principal").classList.remove("jumbotron--default");

            document.getElementById("soccer-nav").classList.remove("soccer-nav--two");
            document.getElementById("link1").classList.remove("nav-link--soccer-site--two");
            document.getElementById("link2").classList.remove("nav-link--soccer-site--two");
            document.getElementById("link3").classList.remove("nav-link--soccer-site--two");            
            document.getElementById("principal").classList.remove("jumbotron--two");
            break;
        case 2:
            document.getElementById("soccer-nav").classList.add("soccer-nav--two");
            document.getElementById("link1").classList.add("nav-link--soccer-site--two");
            document.getElementById("link2").classList.add("nav-link--soccer-site--two");
            document.getElementById("link3").classList.add("nav-link--soccer-site--two");
            document.getElementById("principal").classList.add("jumbotron--two");

            document.getElementById("soccer-nav").classList.remove("soccer-nav--one");
            document.getElementById("link1").classList.remove("nav-link--soccer-site--one");
            document.getElementById("link2").classList.remove("nav-link--soccer-site--one");
            document.getElementById("link3").classList.remove("nav-link--soccer-site--one");            
            document.getElementById("principal").classList.remove("jumbotron--one");

            document.getElementById("soccer-nav").classList.remove("soccer-nav--default");
            document.getElementById("link1").classList.remove("nav-link--soccer-site--default");
            document.getElementById("link2").classList.remove("nav-link--soccer-site--default");
            document.getElementById("link3").classList.remove("nav-link--soccer-site--default");            
            document.getElementById("principal").classList.remove("jumbotron--default");
            break;
    }
}


function bigArea(x){
    console.log("creciooooo");
    if(document.documentElement.clientWidth >752){
      var casillas = document.getElementsByClassName("subpunto");
    
    for(i = 0; i < casillas.length; i++) {
      casillas[i].classList.add("col-md-1");  
      casillas[i].classList.remove("col-md-4");
      }

    x.classList.remove("col-md-1");
    x.classList.add("col-md-10");
    
    
    
    var titulos = document.getElementsByClassName("title");
    for(i = 0; i < titulos.length; i++) {
        titulos[i].style.display = "none"
      }
    var subtitulos = x.getElementsByClassName("subtitle")
    subtitulos[0].style.display = "block"  
    }
    
}

function normalArea(x){
    console.log("pequeno");
    
    var casillas = document.getElementsByClassName("subpunto");

    for(i = 0; i < casillas.length; i++) {
        casillas[i].classList.add("col-md-4");
        casillas[i].classList.remove("col-md-1");
      }

    x.classList.remove("col-md-10");
    var titulos = document.getElementsByClassName("title")
    for(i = 0; i < titulos.length; i++) {
        titulos[i].style.display = "block"
      }
      var subtitulos = x.getElementsByClassName("subtitle")
      subtitulos[0].style.display = "none"  
}

function changeActive(x){
    var index = document.getElementsByClassName("nav-item")
    for(i = 0; i < index.length; i++) {
        index[i].classList.remove("active");
      }
    x.classList.add("active");
    
}


window.onload = function(){ }
window.onresize = function(){ arreglarTamano()}


function arreglarTamano(){
  var images_carrusel = document.getElementsByClassName("image_carousel");
  console.log(images_carrusel);
  for(i = 1; i < images_carrusel.length; i++) {
    console.log(document.documentElement.clientWidth*.439)
    images_carrusel[i].style.maxHeight = (document.documentElement.clientWidth*.439)+"px";
    console.log(images_carrusel[i])
  }


  if(document.documentElement.clientWidth < 752){
    console.log("carr")
    var carrusel = document.getElementsByClassName("carrousel_images");
    var navbar = document.getElementsByClassName("navbar");
    console.log(carrusel[0])
    carrusel[0].style.marginTop = navbar[0].offsetHeight+"px";
    var navbarInic = document.getElementsByClassName("navbar");
    navbarInic[0].classList.add("gray");
  }else{
    var carrusel = document.getElementsByClassName("carrousel_images");
    carrusel[0].style.marginTop ="0px";
  }
}

window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementsByClassName("navbar");
console.log(navbar);
// Get the offset position of the navbar

var aliados = document.getElementsByClassName("Aliados");
var contacto = document.getElementsByClassName("contacto");
var proyectos = document.getElementsByClassName("Proyectos");
var nosotros = document.getElementsByClassName("nosotros");
var hexagonos = document.getElementsByClassName("hexagonos");



// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
    var sticky = navbar[0].offsetTop+100;
  
    if(document.documentElement.clientWidth > 752){
      if (window.pageYOffset >= sticky) {
        navbar[0].classList.add("gray");
      } else {
        navbar[0].classList.remove("gray");
      }
    }else{
      navbar[0].classList.add("gray");
    }
  

  if(window.pageYOffset-hexagonos[0].offsetTop < -90){
    console.log("inicio")
    console.log(window.pageYOffset-nosotros[0].offsetTop)
    var navbar_contacto = document.getElementsByClassName("nav_inicio"); 
    changeActive(navbar_contacto[0]);
    }

    if((window.pageYOffset-hexagonos[0].offsetTop > -90 ) && (window.pageYOffset-hexagonos[0].offsetTop < 30)){
      console.log("hexagonos")
      console.log(window.pageYOffset-hexagonos[0].offsetTop)
      var navbar_hexagonos = document.getElementsByClassName("nav_hexagonos"); 
      changeActive(navbar_hexagonos[0]);
    }

  if((window.pageYOffset-proyectos[0].offsetTop > -50 ) && (window.pageYOffset-proyectos[0].offsetTop < 30)){
    console.log("proyectos")
    console.log(window.pageYOffset-proyectos[0].offsetTop)
    var navbar_proyectos = document.getElementsByClassName("nav_proyectos"); 
    changeActive(navbar_proyectos[0]);
  }

  if((window.pageYOffset-nosotros[0].offsetTop > -150 ) && (window.pageYOffset-nosotros[0].offsetTop < 10)){
    console.log("nosotros")
    console.log(window.pageYOffset-nosotros[0].offsetTop)
    var navbar_nosotros = document.getElementsByClassName("nav_nosotros"); 
    changeActive(navbar_nosotros[0]);
  }

  if((window.pageYOffset-aliados[0].offsetTop > -80 ) && (window.pageYOffset-aliados[0].offsetTop < 30)){
    console.log("aliados")
    console.log(window.pageYOffset-aliados[0].offsetTop)
    var navbar_aliados = document.getElementsByClassName("nav_aliados"); 
    changeActive(navbar_aliados[0]);
  }


  if(window.pageYOffset-contacto[0].offsetTop > -500) {
    console.log("contactos")
    var navbar_contacto = document.getElementsByClassName("nav_contactos"); 
    changeActive(navbar_contacto[0]);
    }
} 
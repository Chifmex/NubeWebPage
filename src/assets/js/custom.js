

function bigArea(x){
    console.log("creciooooo");
    x.classList.add("col-10");
    x.classList.remove("col");
    var titulos = document.getElementsByClassName("title")
    for(i = 0; i < titulos.length; i++) {
        titulos[i].style.display = "none"
      }
    var subtitulos = x.getElementsByClassName("subtitle")
    subtitulos[0].style.display = "block"  
}

function normalArea(x){
    console.log("pequeno");
    x.classList.add("col");
    x.classList.remove("col-10");
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


window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementsByClassName("navbar");
console.log(navbar);
// Get the offset position of the navbar

var aliados = document.getElementsByClassName("Aliados");
var contacto = document.getElementsByClassName("contacto");
var proyectos = document.getElementsByClassName("Proyectos");
var nosotros = document.getElementsByClassName("nosotros");


// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
    var sticky = navbar[0].offsetTop+100;
  if (window.pageYOffset >= sticky) {
    navbar[0].classList.add("gray");
  } else {
    navbar[0].classList.remove("gray");
  }


  if(window.pageYOffset < nosotros[0].offsetTop-753) {
    var navbar_contacto = document.getElementsByClassName("nav_inicio"); 
    changeActive(navbar_contacto[0]);
    }
  
  console.log(proyectos[0].offsetTop);
  console.log(window.pageYOffset)  
  if((window.pageYOffset > proyectos[0].offsetTop-100) && (window.pageYOffset < proyectos[0].offsetTop+100)){
    var navbar_proyectos = document.getElementsByClassName("nav_proyectos"); 
    changeActive(navbar_proyectos[0]);
  }

  if((window.pageYOffset > nosotros[0].offsetTop-753) && (window.pageYOffset < nosotros[0].offsetTop+100)){
    var navbar_nosotros = document.getElementsByClassName("nav_nosotros"); 
    changeActive(navbar_nosotros[0]);
  }

  if((window.pageYOffset > aliados[0].offsetTop-800) && (window.pageYOffset < aliados[0].offsetTop+100)){
    var navbar_aliados = document.getElementsByClassName("nav_aliados"); 
    changeActive(navbar_aliados[0]);
  }


  if(window.pageYOffset > contacto[0].offsetTop-500) {
    var navbar_contacto = document.getElementsByClassName("nav_contactos"); 
    changeActive(navbar_contacto[0]);
    }
} 
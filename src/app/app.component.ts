import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Fundación NuBe';

  ngOnInit(){  
    console.log("oninit")
    var images_carrusel = document.getElementsByClassName("image_carousel") as HTMLCollectionOf<HTMLElement>;
    console.log(images_carrusel);
    for( var i = 1; i < images_carrusel.length; i++) {
    console.log(document.documentElement.clientWidth*.439)
    images_carrusel[i].style.maxHeight = (document.documentElement.clientWidth*.439)+"px";
    console.log(images_carrusel[i])
  }


    if(document.documentElement.clientWidth < 752){
      console.log("carr")
      var carrusel = document.getElementsByClassName("carrousel_images") as HTMLCollectionOf<HTMLElement>;
      var navbar = document.getElementsByClassName("navbar") as HTMLCollectionOf<HTMLElement>;
      console.log(carrusel[0]);
      carrusel[0].style.transform = navbar[0].offsetHeight+"px";
      var navbarInic = document.getElementsByClassName("navbar");
      navbarInic[0].classList.add("gray");
    }else{
      var carrusel = document.getElementsByClassName("carrousel_images") as HTMLCollectionOf<HTMLElement>;
      carrusel[0].style.marginTop ="0px";
    }
  }

   

}



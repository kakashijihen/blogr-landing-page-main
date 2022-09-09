'use strict';

const hamburgerIcon=document.getElementById("logo_hamburger");
const header = document.getElementById("section_top__header");
const navItems=document.querySelectorAll(".section_top__nav_links_item");

hamburgerIcon.addEventListener("click", () =>{
    header.classList.toggle("active");
})

navItems.forEach(function(nav){
    nav.addEventListener("click", function(){
        /*console.log(this)*/
        this.classList.toggle("open");
        if (nav.classList.contains("open")) {
            navItems.forEach(function(nav){
                nav.classList.remove("open");
            })
            nav.classList.toggle("open");
        }

    })
})
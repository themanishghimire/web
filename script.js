document.addEventListener("DOMContentLoaded", () => {

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

if(menuBtn){

menuBtn.addEventListener("click", () => {

if(navLinks.style.display === "flex"){
navLinks.style.display = "none";
}else{
navLinks.style.display = "flex";
navLinks.style.flexDirection = "column";
navLinks.style.position = "absolute";
navLinks.style.top = "80px";
navLinks.style.right = "20px";
navLinks.style.background = "#fff";
navLinks.style.padding = "20px";
navLinks.style.borderRadius = "12px";
navLinks.style.boxShadow = "0 10px 25px rgba(0,0,0,.1)";
}

});

}

});

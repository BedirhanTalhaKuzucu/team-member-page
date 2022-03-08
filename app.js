let a = document.getElementsByTagName("input")[0];

a.addEventListener( "change", myFunction)




function myFunction() {
    let element = document.querySelector(".main_container");
    element.classList.toggle("dark_mode");
 }
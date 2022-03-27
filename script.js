/* serch bar animation */
$(document).ready(function(){
    $("#search-icon").click(function(){
        $("#search-bar").animate({width :'toggle'})
    }) 
})
/* serch bar animation */

// load
let loadrel = document.querySelector(".loaderelement");

window.addEventListener("load", function(){
    loadrel.style.display = "none";
});
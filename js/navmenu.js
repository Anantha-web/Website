// When the user scrolls the page, execute myFunction
//to sticky navbar
window.onscroll = function() { myFunction() };

// Get the header
var navmenu = document.getElementById("myTop");

// Get the offset position of the navbar
var sticky = navmenu.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
    if (window.pageYOffset > sticky) {
        navmenu.classList.add("sticky");
    } else {
        navmenu.classList.remove("sticky");
    }
}

//hovering background color change
/*$("a").mouseenter(function() {
    $("a").navmenu("background-color", "pink");
});
$("a").mouseleave(function() {
    $("a").navmenu("background-color", "none");
});*/
//Hovering


document.getElementById("myTop").addEventListener("mouseover", function() {
    document.getElementById("myTop").style.backgroundColor = "pink";
});

document.getElementById("myTop").addEventListener("mouseout", function() {
    document.getElementById("myTop").style.backgroundColor = "none";
});


//hovering
/*
$("a").click(function() {
    $("a").css("background-color", "");
    $(this).css("background-color", "pink")

});
*/
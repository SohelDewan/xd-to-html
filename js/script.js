// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("menu");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}
   // back to top

   $('.back-to-top').click(function () {
     $('html,body').animate({
         scrollTop: 0,
     });
 });

 $(window).scroll(function () {
     var scrolling2 = $(this).scrollTop();

     if (scrolling2 > 550) {
         $('.back-to-top').fadeIn();
     } else {
         $('.back-to-top').fadeOut()
     }
 });


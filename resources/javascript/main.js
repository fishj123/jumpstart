// This is the jquery for the carousel using slick

$(document).ready(function(){
    $('.carousel').slick({
      accessibility: false,
      autoplay: true,
      autoplaySpeed: 4000,
      arrows: false,
      draggable: false,
      pauseOnFocus: false,
      pauseOnHover: false,
      swipe: false,
      touchMove: false,
      speed: 2000
    });

/*    
These are the steps for making the navigtion bar dissapear on scroll

1. Use the .scroll() event handler to select the window. 
2. Create a variable that stores the value of the .scrollTop() property of this
3. If y is greater than x by 50 or more, create a variable that stores the height of the navbar
4. Use the jQuery .animate() function to to change the top offset of the navbar to be the negative height of the navbar over 150ms
5. set x equal to y so that you always have a record of how far the user scrolled last time they finished scrolling. You need this record to compare in your control flow.
6. if x is greater than y by 50 or more, use the .animate() function to change the top offset of the navbar to 0px over 150 milliseconds.
7. set x equal to y so that you always have a record of how far the user scrolled last time they finished scrolling. You need this record to compare in your control flow.
*/

var userScrollNone = 0;

$(window).scroll(function() {

var userScrollTop = $(this).scrollTop();

if (userScrollTop - userScrollNone > 50) {
    var navBarHeight = $('.navbar').css('height');
    $('.navbar').animate({top: '-' + navBarHeight}, 150);
    userScrollNone = userScrollTop;

} else if (userScrollNone - userScrollTop > 50) {
    $('.navbar').animate({top:'0px'}, 150);
    userScrollNone = userScrollTop;
    }
});

});




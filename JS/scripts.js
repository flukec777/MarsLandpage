$(document).ready(function() {

/*--------------------------MOBILE NAVI------------------*/

$('.js--nav-icon').click(function() {
    var nav = $('.js--main-nav');
    
    nav.slideToggle(200);
    });
    
//media query nav fix
$(window).resize(function(){

var nav = $('.js--main-nav');

var icon = $('.js--nav-icon i');

if ($(window).width() > 767){

nav.css("display", "block");

icon.addClass('ion-close-round');

icon.removeClass('ion-navicon-round');

} else {

nav.css("display", "none");

icon.addClass('ion-navicon-round');

icon.removeClass('ion-close-round');

}

});
});

/*BUTTONS SCROLL*/
$('.js--scroll-to-games').click(function () {
    $('html, body').animate({scrollTop: $('.js--section-games').offset().top},
    1000);
});

/*NAV SCROLL*/

$(function() {
      $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top
            }, 1000);
            return false;
          }
        }
      });
    });
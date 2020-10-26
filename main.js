var openButton = $('.header-right > a');

var hamburgerMenu = $('.hamburger-menu');

var closeButton = $('.close');

openButton.click(function() {
    hamburgerMenu.addClass('active');
});

closeButton.click(function() {
    hamburgerMenu.removeClass('active');
})
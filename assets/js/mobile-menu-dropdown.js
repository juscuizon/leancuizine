$(document).ready(function() {
    $('#mobile-nav-button').click(function() {
        if ($('#mobile-menu').hasClass("closed")) {
	            $('#mobile-menu').addClass('opened');
	            $('#mobile-menu').removeClass('closed');
        } else {
            $('#mobile-menu').removeClass('opened');
            $('#mobile-menu').addClass('closed');
        }
    });
});
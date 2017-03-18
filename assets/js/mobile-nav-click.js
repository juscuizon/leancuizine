$(document).ready(function() {
    $('#mobile-nav-button').click(function() {
        if ($('#mobile-nav-button').hasClass("close")) {
	            $('#mobile-nav-button').addClass('open');
	            $('#mobile-nav-button').removeClass('close');
        } else {
            $('#mobile-nav-button').removeClass('open');
            $('#mobile-nav-button').addClass('close');
        }
    });
});
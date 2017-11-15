$(document).ready(function(){
    $('#quotes').slick({
        autoplay: true
    });

    $('#slides').slick({
        slidesToShow: 1,
        centerMode: true,
        variableWidth: true
    });
});
$(document).foundation()

$(document).ready(function() {
    $(".animsition").animsition({
        inClass: 'fade-in',
        outClass: 'fade-out',
        inDuration: 1200,
        outDuration: 1200,
        linkElement: 'a:not([target="_blank"]):not([href^="#"]):not([href^="mailto:"])',
        loading: true,
        loadingParentElement: 'body', //animsition wrapper element
        loadingClass: 'animsition-loading',
        timeout: true,
        timeoutCountdown: 300,
        onLoadEvent: true,
        browser: [ 'animation-duration', '-webkit-animation-duration'],
        // "browser" option allows you to disable the "animsition" in case the css property in the array is not supported by your browser.
        // The default setting is to disable the "animsition" in a browser that does not support "animation-duration".
        overlay : false,
        overlayClass : 'animsition-overlay-slide',
        overlayParentElement : 'body',
        transition: function(url){ window.location.href = url; }
    });
});

$(document).ready(function(){
    $('.home-project-carousel').slick({
        arrows: true,
        slidesToShow: 1,
        centerMode: true,
        variableWidth: true
    });
});           

$(document).ready(function(){
    $('.project-gallery').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        fade: true,
        adaptiveHeight: true
    });
});     

$(document).ready(function(){
    $('.testimonial-carousel').slick({
        arrows: true,
        slidesToShow: 1,
        centerMode: true,
        variableWidth: true
    });
});

// $("#registerModal").modal({
//     fadeDuration: 100
// });
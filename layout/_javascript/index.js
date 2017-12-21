/*Scroll do site*/
jQuery(document).ready(function ($) {
    $(".link").click(function (event) {
        event.preventDefault();
        $('html,body').animate({
            scrollTop: $(this.hash).offset().top
        }, 1000);
    });
});


/*Movimentação do Portfolio*/

function showAll() {
    $(".figurePort.design").fadeIn();
    $(".figurePort.identify").fadeIn();
    $(".figurePort.photography").fadeIn();
    $(".figurePort.ilustration").fadeIn();
    $(".figurePort.central").fadeIn();
}

function showDesign() {
    $(".figurePort.design").fadeIn();
    $(".figurePort.identify").fadeOut();
    $(".figurePort.photography").fadeOut();
    $(".figurePort.ilustration").fadeOut();
    $(".figurePort.central").fadeOut();
}

function showIdentify() {
    $(".figurePort.design").fadeOut();
    $(".figurePort.identify").fadeIn();
    $(".figurePort.photography").fadeOut();
    $(".figurePort.ilustration").fadeOut();
    $(".figurePort.central").fadeOut();
}

function showPhotography() {
    $(".figurePort.design").fadeOut();
    $(".figurePort.identify").fadeOut();
    $(".figurePort.photography").fadeIn();
    $(".figurePort.ilustration").fadeOut();
    $(".figurePort.central").fadeOut();
}

function showIlustration() {
    $(".figurePort.design").fadeOut();
    $(".figurePort.identify").fadeOut();
    $(".figurePort.photography").fadeOut();
    $(".figurePort.ilustration").fadeIn();
    $(".figurePort.central").fadeOut();
}
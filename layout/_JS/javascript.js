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
jQuery(document).ready(

    function ($) {
        $(".buttonPort.all").click(
            function () {
                $(".figurePort.design").fadeIn();
                $(".figurePort.identify").fadeIn();
                $(".figurePort.photography").fadeIn();
                $(".figurePort.ilustration").fadeIn();
                $(".figurePort.central").fadeIn();
            }
        )
    }
);

jQuery(document).ready(

    function ($) {
        $(".buttonPort.design").click(
            function () {
                $(".figurePort.design").fadeIn();
                $(".figurePort.identify").fadeOut();
                $(".figurePort.photography").fadeOut();
                $(".figurePort.ilustration").fadeOut();
                $(".figurePort.central").fadeOut();
            }
        )
    }
);

jQuery(document).ready(

    function ($) {
        $(".buttonPort.identify").click(
            function () {
                $(".figurePort.design").fadeOut();
                $(".figurePort.identify").fadeIn();
                $(".figurePort.photography").fadeOut();
                $(".figurePort.ilustration").fadeOut();
                $(".figurePort.central").fadeOut();
            }
        )
    }
);

jQuery(document).ready(

    function ($) {
        $(".buttonPort.photography").click(
            function () {
                $(".figurePort.design").fadeOut();
                $(".figurePort.identify").fadeOut();
                $(".figurePort.photography").fadeIn();
                $(".figurePort.ilustration").fadeOut();
                $(".figurePort.central").fadeOut();
            }
        )
    }
);

jQuery(document).ready(

    function ($) {
        $(".buttonPort.ilustration").click(
            function () {
                $(".figurePort.design").fadeOut();
                $(".figurePort.identify").fadeOut();
                $(".figurePort.photography").fadeOut();
                $(".figurePort.ilustration").fadeIn();
                $(".figurePort.central").fadeOut();
            }
        )
    }
);

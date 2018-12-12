$(document).ready(function () {

    $(".single-portfolio").mouseenter(function () {
        $(this).find(".overlay").css("visibility", "visible");
        // $(this).find(".overlay").addClass("overlayAnimate");
        $(this).find(".overlay").addClass("animated fadeIn");
    });
    $(".single-portfolio").mouseleave(function () {
        $(this).find(".overlay").css("visibility", "hidden");
        // $(this).find(".overlay").removeClass("overlayAnimate");
        $(this).find(".overlay").removeClass("animated fadeIn");

    });

        $(".all-portfolios").isotope({
            itemSelector: '.single-portfolio',
            layoutMode: 'fitRows',
        });

        $('ul.filter li').click(function(){

            $("ul.filter li").removeClass("active");
            $(this).addClass("active");

            var selector = $(this).attr('data-filter');
            $(".all-portfolios").isotope({
                filter: selector,
                animationOptions: {
                    duration: 750,
                    easing: 'linear',
                    queue: false,
                }
            });
            return false;
        });
});



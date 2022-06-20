'use strict'
{
    $(".menu-trigger").click(function () {
        $(".menu-trigger").toggleClass("active");
        $("#global-nav").toggleClass("active");
    });
}
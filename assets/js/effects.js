$(document).ready(function () {
    $("[data-bs-hover-animate]").mouseenter(function () {
        $(this).addClass("animated " + $(this).attr("data-bs-hover-animate"))
    }).mouseleave(function () {
        $(this).removeClass("animated " + $(this).attr("data-bs-hover-animate"))
    })
});
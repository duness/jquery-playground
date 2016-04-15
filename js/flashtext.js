function flashtext() {
    $("article#flashtext p").addClass("flash");
    $("article#flashtext p").css("transition", "0.2s");
    flash = setInterval(function(){$('article#flashtext p').toggleClass('flash');}, 500);
}

$(function() {
    $("article#flashtext button" ).click(function() {
        flashtext();
    });
});



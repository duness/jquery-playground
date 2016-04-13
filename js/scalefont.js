scaled = false;

function scalefont(scalefrom, scaleto) {
    if(!scaled) {
        $("article#scalefont h2").css("font-size", scalefrom);
    }
    
    if(scaled) {
        $("article#scalefont h2").css("font-size", scalefrom);
        
    }
    scaled = true;
    $("article#scalefont h2").css("transition", "0.4s");
    
}

$(function() {
    $("article#scalefont button" ).click(function() {
        scalefont(12,40);
    });
});



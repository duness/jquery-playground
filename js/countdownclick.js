var countdown = 0;
var locked = false;

function countdownclick(countfrom) {
    if(!locked) {
        countdown = countfrom;
        locked = true;
    }
    
    var check = function() {
        
        if(countdown == 0) return;
        
        if(countdown <= countfrom) {
            $("article#countdownclick button").text(--countdown);

            setTimeout(check, 100);
        } 
    }
    check();
    
}

$(function() {
    $("article#countdownclick button" ).click(function() {
        countdownclick(10);
    });
});

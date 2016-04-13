var globalcounter = 0;

function countdownclick(countfrom) {
//    var counter = countfrom;
    if(globalcounter == 0) globalcounter = countfrom;

    
    
    
    while(globalcounter > 0) {
        globalcounter--;
        $("article#countdownclick button").text(globalcounter);
        console.log(globalcounter);
        setTimeout(countdownclick, 2000);
    }
        
    
}

$(function() {
    $("article#countdownclick button" ).click(function() {
        countdownclick(10);
    });
});



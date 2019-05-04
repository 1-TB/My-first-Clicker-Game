var cookies = 0;
var cursors = 0;
function cookieClick(number){
    cookies = cookies + number;
    document.getElementById("cookies").innerHTML = cookies;
}
function buyCursor(){
    var cursorCost = Math.floor(10 * Math.pow(1.1,cursors));     
    if(cookies >= cursorCost){                                   
        cursors = cursors + 1;                                   
    	cookies = cookies - cursorCost;                          
        document.getElementById("cursors").innerHTML = cursors;
        document.getElementById("cookies").innerHTML = cookies;  
    }
    var nextCost = Math.floor(10 * Math.pow(1.1,cursors));       
    document.getElementById("cursorCost").innerHTML = nextCost;  
}

// About to make a loop xD

window.setInterval(function(){
cookieClick(cursors);

}, 1000);

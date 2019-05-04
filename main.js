var cookies = 0;
var cursors = 0;
var fatpeople = 0;
var fatgain = 0;
var income = 0;
function cookieClick(number){
    cookies = cookies + number;
    document.getElementById("cookies").innerHTML = cookies;
}
function buyCursor(){
    var cursorCost = Math.floor(10 * Math.pow(1.5,cursors));     
    if(cookies >= cursorCost){                                   
        cursors = cursors + 1;                                   
    	cookies = cookies - cursorCost;                          
        document.getElementById("cursors").innerHTML = cursors;
        document.getElementById("cookies").innerHTML = cookies;  
    }
    var nextCost = Math.floor(10 * Math.pow(1.5,cursors));       
    document.getElementById("cursorCost").innerHTML = nextCost;  
   
}
function buyFatpeople(){
    var fatCost = Math.floor(10000 * Math.pow(1.1,fatpeople)); 
    if (cookies >= fatCost){
        fatpeople = fatpeople + 1;                                   
    	cookies = cookies - fatCost;    
        document.getElementById("fatpeople").innerHTML = fatpeople;
    }
    var nextCost = Math.floor(10000 * Math.pow(1.1,fatpeople));       
    document.getElementById("fatCost").innerHTML = nextCost; 
    
}

function calculateIncome(){
var temp = fatpeople * 300;
 var income = temp + cursors;
    document.getElementById("income").innerHTML = income;
}

// About to make a loop xD

window.setInterval(function(){
var fatgain = fatpeople * 300;
cookieClick(cursors);
cookieClick(fatgain);
calculateIncome();
}, 1000);

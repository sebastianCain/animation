var c = document.getElementById("slate");
var ctx = c.getContext("2d");
//ctx.fillRect(50, 75, 100, 200);
ctx.fillStyle = "#ff00ff";

var animateDot = function() {
    
    var width = 0;
    var wdir = true;
    var rid = 0;
    document.getElementById("stop").disabled = true;
    
    var circle = function() {
	if (rid == 0) {
	    //first run
	    document.getElementById("circle").disabled = true;
	    document.getElementById("dvd").disabled = true;
	    document.getElementById("stop").disabled = false;
	    width = 0;
	    wdir = true;
	}

	ctx.beginPath();
	ctx.clearRect(0, 0, c.width, c.height);
	ctx.arc(c.width/2, c.height/2, width, 0, Math.PI * 2);
	ctx.fill();

	if (wdir) { width += 5; } else { width -= 5; }
	if (width == c.height || width == 0) { wdir = !wdir; }
        
	rid = window.requestAnimationFrame(circle);
    }

    var x = 50;
    var y = 50;
    var xdir = true;
    var ydir = true;
    
    var dvd = function() {
	if (rid == 0) {
	    //first run
	    document.getElementById("circle").disabled = true;
	    document.getElementById("dvd").disabled = true;
	    document.getElementById("stop").disabled = false;
	    x = 50;
	    y = 50;
	    xdir = true;
	    ydir = true;
     
	}
	console.log("lol");
	ctx.beginPath();
	ctx.clearRect(0, 0, c.width, c.height);
	ctx.arc(x, y, 25, 0, Math.PI * 2);
	ctx.fill();

	if (xdir) { x += 2; } else { x -= 2; }
	if (ydir) { y += 2; } else { y -= 2; }
	if (x == 24 || x == c.width - 24) { xdir = !xdir; }
	if (y == 24 || y == c.height - 24) { ydir = !ydir; }
	
	rid = window.requestAnimationFrame(dvd);
    };
    
    var stop = function() {
	window.cancelAnimationFrame(rid);
	rid = 0;
	document.getElementById("circle").disabled = false;
	document.getElementById("dvd").disabled = false;
	document.getElementById("stop").disabled = true;
    };

    var circlebtn = document.getElementById("circle");
    circlebtn.addEventListener("click", circle);
    var dvdbtn = document.getElementById("dvd");
    dvdbtn.addEventListener("click", dvd);
    var stopbtn = document.getElementById("stop");
    stopbtn.addEventListener("click", stop);

};

animateDot();
//window.requestAnimationFrame(drawdot);
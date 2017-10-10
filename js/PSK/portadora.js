$(document).ready(function(){

	var canvas = document.getElementById("portadora");
	var ctx = canvas.getContext('2d');

	var init = 0;
	var inc = 0;
	var byteArray = [];

	for(var i = 0 ; i < canvas.width/100 + 100; i++){
		byteArray[i] = (Math.random()*2 > 1? 1 : -1);
	}

	function draw(){

		var ampPort = 45;
		var period = 100;
		var velAngular = 2*Math.PI/period;
		var x = 0;
		var y = 125;
		
		ctx.strokeStyle = "#33ff77";
		ctx.lineWidth = 1;

		ctx.fillStyle = "black";
		ctx.fill();
		ctx.fillRect(0,0,700,400);

		//init = inc;

		for(var i = 0 ; i < canvas.width/period + period;i++){
			var factor = byteArray[i];
			for(var j = 0 ; j < period;j++){
				ctx.beginPath();
				ctx.moveTo(x,y);
				x++;
				y = -1*factor*ampPort*Math.sin(init) + 125;
				init+=velAngular;
				ctx.lineTo(x,y);
				ctx.stroke();
			}
		}

		//inc+=velAngular;

		ctx.strokeStyle = "#3333ff";
        ctx.lineWidth = 1;
        
        //eixo X
        ctx.moveTo(0,canvas.height/2);
		ctx.lineTo(canvas.width,canvas.height/2);
		ctx.stroke();
        //eixo Y    
        ctx.moveTo(50,0);
		ctx.lineTo(50,250);
		ctx.stroke();

	}
	setInterval(draw,16);
});

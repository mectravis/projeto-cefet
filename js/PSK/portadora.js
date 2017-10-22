$(document).ready(function(){

	var canvas = document.getElementById("portadora");
	var ctx = canvas.getContext('2d');

	init = 0;
	inc = 0;
	var id;

	function draw(){
		
		ampPort = $("#ampPort").val();
		period = $("#myselect2").val()*5;
		velAngular = 2*Math.PI/period;
		x = 0;
		y = 125;

		ctx.strokeStyle = "#33ff77";
		ctx.lineWidth = 1;

		ctx.fillStyle = "black";
		ctx.fill();
		ctx.fillRect(0,0,700,400);

		init = inc;

		for(var i = 0 ; i < 700 + period;i++){
			ctx.beginPath();
			ctx.moveTo(x,y);
			x++;
			y = ampPort*Math.sin(init) + 125;
			init+=velAngular;
			ctx.lineTo(x,y);
			ctx.stroke();
		}
		inc+=velAngular;

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

	$("#click").click(function(){
		if(id === null){
			id = setInterval(draw,16);
		}else{
			clearInterval(id);
			id = setInterval(draw,16);
		}
		
		
	});
	


});

$(document).ready(function(){

	var canvas = document.getElementById("sinal");
	var ctx = canvas.getContext('2d');
	var byteArray = [];

	function draw(){

		var amp = $("#ampPort").val();
		var period = $("#myselect2").val()*5;
		var velAngular = 2*Math.PI/period;
		var init = 0;
		var x = 0;
		var y = 125;

		for(var i = 0 ; i < canvas.width/period;i++){
			byteArray[i] = (Math.random()*2 < 1 ? 1 : -1);
		}

		ctx.strokeStyle = "#33ff77";
		ctx.lineWidth = 1;

		ctx.fillStyle = "black";
		ctx.fill();
		ctx.fillRect(0,0,700,400);

		for(var i = 0 ; i < canvas.width/period + period;i++){
			var factor = byteArray[i];
			for(var j = 0 ; j < period;j++){
				ctx.beginPath();
				ctx.moveTo(x,y);
				x++;
				y = -1*factor*amp*Math.sin(init) + 125;
				init+=velAngular;
				ctx.lineTo(x,y);
				ctx.stroke();
			}
		}

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
		draw();
	});
	


});

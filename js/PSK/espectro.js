$(document).ready(function(){

	espectro = document.getElementById("espec");
	ctxE = espectro.getContext("2d");

	xspacing = 0;
	yspacing = 0;

	function get(){

		ampPort = $("#ampPort").val() * 3;
		period = 20;
		velAngularEspectro = 2*Math.PI/period;
		start = 0;
		i = 0;
		j = 250;
		
	}

	function spec(){

		ctxE.fillStyle = "black";
		ctxE.fill();
		ctxE.fillRect(0,0,700,400);

		ctxE.strokeStyle = "#33ff77";
		ctxE.lineWidth = 1;

		for(var x = 0; x < 700 ; x++){

			ctxE.beginPath();
			ctxE.moveTo(i,j);
			i++;
			j = 20*Math.random()*Math.sin(start) + 250;
			start+= velAngularEspectro;
			if(i > 60 && i < 60 + period){
				j = 20*Math.random()*Math.sin(start) + 250;
			}else if(i > 246  && i < 246 + period){
				j = ampPort*Math.sin(start) + 250;
			}else if(i > 433 && i < 431 + period){
				j = 20*Math.random()*Math.sin(start) + 250;
			}
			ctxE.lineTo(i,j);
			ctxE.stroke();
		}
	}

	$("#click").click(function(){
        
        interval2 = setInterval(function(){
            get();
			spec();    
        },7);
		
	
	});
	
	/*Iframe*/

	$("#tela").click(function(){
		$("#iframe").css("display","block");
	});

	$("#fechar").click(function(){
		$("#iframe").css("display","none");
	});

});
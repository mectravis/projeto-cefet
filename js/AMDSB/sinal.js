$(document).ready(function(){
    
    
    var sinal = document.getElementById("sinal");
    var ctxS= sinal.getContext("2d");
    
    
        var inicio = 0;
        var inicio2 = 0;
        var inc = 0;
        var inc2 = 0;
    
    function set(){
        
        ampMod= $("#ampMod").val();
        freqMod = $("#myselect").val();
        velAngular2 = 2*Math.PI/freqMod;
        
        ampPort = $("#ampPort").val();
        freqPort = $("#myselect2").val();
        velAngular = 2*Math.PI/freqPort;
        
        z = 0;
        w = 125;
            
    }
    
    function loop(){
        
        ctxS.fillStyle = "black";
		ctxS.fill();
		ctxS.fillRect(0,0,700,400);

		ctxS.strokeStyle = "#33ff77";
		ctxS.lineWidth = 1;
        

        inicio = inc;
        inicio2 = inc2;
        
        for(var count = 0; count < 700; count++){
            
            ctxS.beginPath();
            ctxS.moveTo(z,w);
            z++;
            w = ampPort*Math.cos(inicio) + (ampMod/2)*Math.cos(inicio+inicio2) + (ampMod/2)*Math.cos(inicio-inicio2) +125;
            inicio += velAngular;
            inicio2 += velAngular2;
            ctxS.lineTo(z,w);
            ctxS.stroke();
        }
        
        inc += velAngular/8;
        inc2 += velAngular/8;
        
        
        ctxS.strokeStyle = "#3333ff";
        ctxS.lineWidth = 1;
            
        //eixo X
        ctxS.moveTo(0,125);
		ctxS.lineTo(493,125);
		ctxS.stroke();
        //eixo Y    
        ctxS.moveTo(50,0);
		ctxS.lineTo(50,250);
		ctxS.stroke()
        
        
    }
    

    
    $("#click").click(function(){
       setInterval(function(){
           set();
           loop();
           
           
       },7);
    })
    

});
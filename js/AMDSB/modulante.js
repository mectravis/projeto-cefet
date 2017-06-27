$(document).ready(function(){
    
    
    var modulante = document.getElementById("modulante");
    var ctxM= modulante.getContext("2d");
    
    var inicio2 = 0;
    var inc2 = 0;
    
    function set(){
        
        ampMod= $("#ampMod").val();
        freqMod = $("#myselect").val();
        velAngular2 = 2*Math.PI/freqMod;
        a = 0;
        b = 125;
            
    }
    
    function loop(){
        
        ctxM.fillStyle = "black";
		ctxM.fill();
		ctxM.fillRect(0,0,700,400);

		ctxM.strokeStyle = "#33ff77";
		ctxM.lineWidth = 1;
        

        
        ampMod = $("#ampMod").val();
        inicio2 = inc2;
        
        for(var count = 0; count < 700; count++){
            
            ctxM.beginPath();
            ctxM.moveTo(a,b);
            a++;
            b = -ampMod*Math.sin(inicio2) + 125;
            inicio2 += velAngular2;
            ctxM.lineTo(a,b);
            ctxM.stroke();
        }
        
        inc2 += velAngular2/2;
        
        ctxM.strokeStyle = "#3333ff";
        ctxM.lineWidth = 1;
        
        
        //eixo X
        ctxM.moveTo(0,125);
		ctxM.lineTo(493,125);
		ctxM.stroke();
        //eixo Y    
        ctxM.moveTo(50,0);
		ctxM.lineTo(50,250);
		ctxM.stroke();

        
        
        
        
        
        
        
    }
    

    
    $("#click").click(function(){
       setInterval(function(){
           set();
           loop();
           
           
       },7);
    })
    

});
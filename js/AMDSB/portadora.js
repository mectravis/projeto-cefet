$(document).ready(function(){
    
    
    var portadora = document.getElementById("portadora");
    var ctxP= portadora.getContext("2d");
    
    var inicio = 0;
    var inc = 0;
    
    function set(){
        
        ampPort = $("#ampPort").val();
        freqPort = $("#myselect2").val();
        velAngular = 2*Math.PI/freqPort;
        x = 0;
        y = 125;
            
    }
    
    function loop(){
        
        ctxP.fillStyle = "black";
		ctxP.fill();
		ctxP.fillRect(0,0,700,400);

		ctxP.strokeStyle = "#33ff77";
		ctxP.lineWidth = 1;
        
 
        ampPort = $("#ampPort").val();
        inicio = inc;
        
        ind = $("#ampMod").val()/$("#ampPort").val();
        $("#indice").val(ind);
        
        for(var count = 0; count < 495; count++){
            
            ctxP.beginPath();
            ctxP.moveTo(x,y);
            x++;
            y = -ampPort*Math.sin(inicio) + 125;
            inicio += velAngular;
            ctxP.lineTo(x,y);
            ctxP.stroke();
        }
        
        inc += velAngular/2;
        
        ctxP.strokeStyle = "#3333ff";
        ctxP.lineWidth = 1;   
        
        //eixo X
        ctxP.moveTo(0,125);
		ctxP.lineTo(493,125);
		ctxP.stroke();
        //eixo Y    
        ctxP.moveTo(50,0);
		ctxP.lineTo(50,250);
		ctxP.stroke();
    }
    

    
    $("#click").click(function(){
       setInterval(function(){
           set();
           loop();
           
           
       },17);
    })
    

});
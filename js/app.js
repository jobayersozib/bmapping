

/*

object:bps_obj
Drawing object . this object holds all drawing methods and poperties.

*/

var bps_obj={
    /**
     function:create_node
     param:e(object)
     this function will call if click event occur inside canvas area. this function will create circle and remove 
     both line and circle in canvas area.
    */
   
    create_node:function(e){
        
         if( e.target.nodeName==='LINE' || e.target.parentNode.nodeName==="svg" ){
              
                 e.target.parentNode.removeChild(e.target);
                }
            else{
             
                    var svg=document.getElementById("mysvg");
                    var svgNS = svg.namespaceURI;
                    var el=document.createElementNS(svgNS,'circle');
                    el.setAttribute("cx",e.clientX-55);
                    el.setAttribute("cy",e.clientY-50);
                    el.setAttribute("r",10);
                    el.setAttribute("stroke","black");
                    el.setAttribute("stroke-width",3);
                    el.setAttribute("fill","red");
                    svg.appendChild(el);
                }
    },
    
    /**
     function:create_line
     param:e(object)
     this function will call if click event occur inside canvas area. this function will create line.
    */
    create_line:function(e){
                    
                    var svg=document.getElementById("mysvg");
                    var svgNS = svg.namespaceURI;
                    var el=document.createElementNS(svgNS,'line');
                    var x1=Number(document.getElementById("SX").value)+10;
                    var y1=document.getElementById("SY").value;
                    var x2=Number(document.getElementById("EX").value)-10;
                    var y2=document.getElementById("EY").value;
                    el.setAttribute("x1",x1);
                    el.setAttribute("y1",y1);
                    el.setAttribute("x2",x2);
                   
                    el.setAttribute("y2",y2);
                     el.setAttribute("stroke","black");
                    el.setAttribute("stroke-width",3);
                    svg.appendChild(el);
     

    }
    
   
}
    
    
document.getElementById("mysvg").addEventListener("click",bps_obj.create_node,false);

document.getElementById("submit").addEventListener("click",bps_obj.create_line,false);




addEventListener("mousemove",function(e){
   if(e.target.nodeName==="circle"){
       var x=e.target.getAttribute("cx");
       var y=e.target.getAttribute("cy");
    document.getElementById("mx").innerHTML="Mouse X position: "+x;
    document.getElementById("my").innerHTML="Mouse Y position: "+y;
   }
},false);


addEventListener("load",setInterval(function(){
    document.getElementById("maptext").textContent=document.getElementById("mysvg").innerHTML;
    
},1000));
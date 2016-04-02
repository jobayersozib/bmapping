/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var bps_obj={
    create_node:function(e){
        
         if(e.target.parentNode.nodeName==="svg"){
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
    }
    
   
}
    
    
document.getElementById("mysvg").addEventListener("click",bps_obj.create_node,true);


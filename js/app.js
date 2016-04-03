/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var bps_obj={
   
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
    }
    
   
}
    
    
document.getElementById("mysvg").addEventListener("click",bps_obj.create_node,false);

document.getElementById("submit").addEventListener("click",function(e) {
     /*var svg=document.getElementById("mysvg");
      var x1=document.getElementById("SX").value;
      var y1=document.getElementById("SY").value;
      var x2=document.getElementById("EX").value;
      var y2=document.getElementById("EY").value;
                   
     svg.innerHTML +='<line x1='+x1+' y1='+y1+' x2='+x2+' y2='+y2+' stroke="black" stroke-width="3"/>';
     
     */
     var svg=document.getElementById("mysvg");
                    var svgNS = svg.namespaceURI;
                    var el=document.createElementNS(svgNS,'line');
                    var x1=document.getElementById("SX").value;
                    var y1=document.getElementById("SY").value;
                    var x2=document.getElementById("EX").value;
                    var y2=document.getElementById("EY").value;
                    el.setAttribute("x1",x1);
                    el.setAttribute("y1",y1);
                    el.setAttribute("x2",x2);
                   
                    el.setAttribute("y2",y2);
                     el.setAttribute("stroke","black");
                    el.setAttribute("stroke-width",3);
                    svg.appendChild(el);
     
})
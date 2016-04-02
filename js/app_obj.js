 function create_node(e){
         if(e.target.nodeName==="circle"){
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
    
    function a(e){
        alert("hi"+e.target.nodeName);
    }

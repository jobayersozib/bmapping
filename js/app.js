

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
    set_node_name:"",
    get_node_name:function(x){
        bps_obj.set_node_name=x;
    },
   create_node:function(e){
        
         if( e.target.nodeName==='LINE' ||e.target.nodeName==="TEXT" || e.target.parentNode.nodeName==="svg" ){
             
                if(confirm("Do you want to remove the "+e.target.nodeName)){                  
                 e.target.parentNode.removeChild(e.target);
                   }
                }
            else{
             
                    var svg=document.getElementById("mysvg");
                    var svgNS = svg.namespaceURI;
                    var el=document.createElementNS(svgNS,'circle');
                   
                    
                    
                    el.setAttribute("cx",e.clientX-55);
                    el.setAttribute("cy",e.clientY-70);
                    el.setAttribute("name",document.getElementsByTagName("circle").length+100);
        
                    el.setAttribute("r",7);
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
              
                  
     

    },
    node_name:function(){
        
        var svg=document.getElementById("mysvg");
        var svgNS = svg.namespaceURI;
        var itext=document.createElementNS(svgNS,"text");
        itext.textContent=bps_obj.set_node_name;
        itext.setAttribute("x",bps_obj.returnX());
       itext.setAttribute("y",bps_obj.returnY());
       itext.setAttribute("text-align","center");
        //alert(this.returnX());
         svg.appendChild(itext);
        
        
    },
    returnX:function(){
        return document.getElementById("mx").innerHTML-10;
    },
    returnY:function(){
        return document.getElementById("my").innerHTML-10;
    },
    search_node:function(){
        var select_all_node=document.getElementsByTagName("circle");
         var node_num=document.getElementById("search_text").value;
        var test=false;
         for(var i=0;i<select_all_node.length;i++){
             
            if(select_all_node[i].getAttribute("name")===node_num){
             select_all_node[i].setAttribute("fill","green");
            test=true;
            break;
            }
       
       
    }
        if(!test){
            alert("not found");
        }
   
    }
   
}
    
    
document.getElementById("mysvg").addEventListener("click",bps_obj.create_node,false);

document.getElementById("submit").addEventListener("click",bps_obj.create_line,false);
document.getElementById("node_name").addEventListener("click",bps_obj.node_name,false);




addEventListener("mousemove",function(e){
   if(e.target.nodeName==="circle"){
       var x=e.target.getAttribute("cx");
       var y=e.target.getAttribute("cy");
       
       bps_obj.get_node_name(e.target.getAttribute("name"));
      
    document.getElementById("mx").innerHTML=x;
    document.getElementById("my").innerHTML=y;
    
    
    
    
   }
},false);


addEventListener("load",setInterval(function(){
    document.getElementById("maptext").textContent=document.getElementById("mysvg").innerHTML;
    
},1000));




var search_button=document.getElementById("search_button");
search_button.addEventListener("click",bps_obj.search_node);




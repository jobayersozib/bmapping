var xhttp=new XMLHttpRequest();

function s(){
    
    xhttp.onreadystatechange = function() {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
     document.getElementById("mysvg").innerHTML = xhttp.responseText;
    }
  };
  xhttp.open("GET","../bmap/"+document.getElementById("myText").value, true);
  xhttp.send();

}


var search_bmap=document.getElementById("submit_building_name");
search_bmap.addEventListener("click",s,false);

document.getElementById("fs").addEventListener("click",function() {
    var select_all_node=document.getElementsByTagName("circle");
         var node_num=document.getElementById("source").value;
        
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
   
    
   
},true);


document.getElementById("fd").addEventListener("click",function() {
    var select_all_node=document.getElementsByTagName("circle");
         
         var node_num=document.getElementById("destination").value;
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
   
    
   
},true);
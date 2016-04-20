var search={
    search_source:function(){
        var select_all_node=document.getElementsByTagName("circle");
         var node_num1=document.getElementById("source").value;
        
        var test=false;
         for(var i=0;i<select_all_node.length;i++){
             
            if(select_all_node[i].getAttribute("name")===node_num1){
             select_all_node[i].setAttribute("fill","green");
            test=true;
            break;
            }
       
       
    }
    
       if(!test){
            alert("not found");
        }
    
          
    
    },
    search_destination:function(){
        
        var select_all_node=document.getElementsByTagName("circle");
         var node_num1=document.getElementById("destination").value;
        
        var test=false;
         for(var i=0;i<select_all_node.length;i++){
             
            if(select_all_node[i].getAttribute("name")===node_num1){
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

document.getElementById("fs").addEventListener("click",search.search_source,false);
document.getElementById("fd").addEventListener("click",search.search_destination,false);
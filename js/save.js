document.getElementById("save").addEventListener("click",function(){
    var xmlhttp=new XMLHttpRequest();
    var formdata=new FormData();
    var b_name=document.getElementById("building_id").value;
    var b_content=document.getElementById("maptext").innerHTML;
    var b_floor=document.getElementById("floor_num").value;
    formdata.append("name",b_name);
    formdata.append("content",b_content);
    formdata.append("floornum",b_floor);
    xmlhttp.onreadystatechange = function() {
     if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            document.getElementById("save").innerHTML="save";
            alert(xmlhttp.responseText);
            
        }
        else{
            document.getElementById("save").innerHTML="saving......."
        }
        };
xmlhttp.open("POST","../php/index.php", true);
xmlhttp.send(formdata);


    
},false);

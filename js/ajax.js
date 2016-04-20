var xmlhttp= new XMLHttpRequest();

document.getElementById("submit_building_name").addEventListener("click",function(){

xmlhttp.onreadystatechange = function() {
  if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
   document.getElementById("mysvg").innerHTML = xmlhttp.responseText;
 }
};
xmlhttp.open("GET","../bmap/"+document.getElementById("myText").value, true);
xmlhttp.send();
//alert("../bmap/"+document.getElementById("myText").value);


},false);

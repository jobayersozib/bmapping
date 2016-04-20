<?php
error_reporting(E_WARNING);
require_once("../inc/bmap.php");


$name=$_POST['name'];
$content=$_POST['content'];
$floor=$_POST['floornum'];
if(!is_dir("../bmap/".$name)){
    mkdir("../bmap/".$name);
    if(!file_exists("../bmap/".$name."/".$floor)){
        file_put_contents("../bmap/".$name."/".$floor,htmlspecialchars_decode($content));
        echo "success";
    }
    else{
        echo "file exists try again";
    }
    
    
}

else{
    if(!file_exists("../bmap/".$name."/".$floor)){
        file_put_contents("../bmap/".$name."/".$floor,$content);
        echo "success";
    }
    else{
        echo "file exists try again";
    }
   
}

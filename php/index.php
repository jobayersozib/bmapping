<?php

require_once("../inc/bmap.php");


$file_name=$_POST['search'];
if(file_exists("../bmap/".$file_name)){
    echo "found";
}
else{
    echo "nothing found";
}


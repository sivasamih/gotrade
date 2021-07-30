<?php 
header("Access-Control-Allow-Origin: *");
header("Content-Type:application/json");
$url=  "http://goread.in/"; //"http://gotrade.goread.in/";
 $response["url"] = $url;
 echo json_encode($response); exit;
?>
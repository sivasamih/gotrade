<?php

$hostname="sg2nlmysql17plsk.secureserver.net:3306";
	$username="gotrade";
	$password="@Gotrade123";
	$dbname="your_dbusername";
	$usertable="gotrade";
	// $yourfield = "your_field";
	
	mysqli_connect($hostname,$username, $password) or die ("<html><script language='JavaScript'>alert('Unable to connect to database! Please try again later.'),history.go(-1)</script></html>");
	mysqli_select_db($dbname);

header("Content-Type:application/json");

 
if (isset($_GET['email']) && $_GET['password']!="") {
 
 $email = $_GET['email'];
 $password = $_GET['password'];
 $query = "SELECT count(*) as count FROM `users` WHERE email=$email and password=$password";
 $result = mysqli_query($query);
 $row = mysqli_fetch_array($result,MYSQLI_ASSOC);  
 $response["result1"] = $result; 
        $response["row"] = $row;
 if($result){
    while($row = mysqli_fetch_array($result)){
        $count = $row["count"];
        
        $response["status"] = true;  
        $response["result"] = $result; 
        $response["row"] = $row;
        $response["count"] = $count; 
    }
}else{
    $response["status"] = false;  
    $response["result"] = "Error"; 
    
}
  

 
} else {
 $response["status"] = "false";

}
echo json_encode($response); exit;

 ?>
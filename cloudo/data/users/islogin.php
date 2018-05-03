<?php
//data/users/islogin.php
require_once("../init.php");
session_start();
@$uid=$_SESSION["uid"];
if($uid!=null){
	$sql="select uname from kd_user where uid=$uid";
	$result=mysqli_query($conn,$sql);
	$row=mysqli_fetch_row($result);
	echo json_encode(["ok"=>1, "uname"=>$row[0],"uid"=>$uid]);
}else{
	echo json_encode(["ok"=>-1]);
}
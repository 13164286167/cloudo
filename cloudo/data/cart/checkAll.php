<?php
//data/cart/checkAll.php
require_once("../init.php");
session_start();
@$uid=$_SESSION["uid"];
@$is_checked=$_REQUEST["is_checked"];
if($uid!=null&&$is_checked!=null){
	$sql="update kd_shopping_cart set is_checked=$is_checked where uid=$uid";
	mysqli_query($conn,$sql);
}
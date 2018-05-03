<?php
//data/cart/shop_cart_count.php
require_once("../init.php");
session_start();
@$uid=$_SESSION["uid"];

if($uid!=null){
	$sql="select count(cid) from kd_shopping_cart WHERE uid=$uid";
	$result=mysqli_query($conn,$sql);
	$count=mysqli_fetch_row($result)[0];

}
echo json_encode($count);
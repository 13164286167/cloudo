<?php
//data/cart/checkOne.php
require_once("../init.php");
@$cid=$_REQUEST["cid"];
@$is_checked=$_REQUEST["is_checked"];
if($cid!=null&&$is_checked!=null){
	$sql="update kd_shopping_cart set is_checked=$is_checked where cid=$cid";
	mysqli_query($conn,$sql);
}
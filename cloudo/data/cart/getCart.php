<?php
//data/cart/getCart.php
require_once("../init.php");
session_start();
@$uid=$_SESSION["uid"];
$cart=[];
if($uid!=null){
	$sql="select *, (select pic from kd_new_product where pid=cpid limit 1) as pic from kd_shopping_cart inner join kd_new_product on pid=cpid where uid=$uid";
	$result=mysqli_query($conn,$sql);
	$cart=mysqli_fetch_all($result,1);
}
echo json_encode($cart);
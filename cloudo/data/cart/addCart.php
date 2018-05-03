<?php
//data/cart/addCart.php
require_once("../init.php");
session_start();
@$uid=$_SESSION["uid"];
@$cpid=$_REQUEST["cpid"];
@$count=$_REQUEST["count"];
if($uid!=null&&$cpid!=null&&$count!=null){
	$sql="select * from kd_shopping_cart where uid=$uid and cpid=$cpid";
	$result=mysqli_query($conn,$sql);
	$row=mysqli_fetch_row($result);
	$cid=$row[0];
	if($row==null)
		$sql="insert into kd_shopping_cart values (null, $uid, $cpid, $count, 0)";
	else
		$sql="update kd_shopping_cart set count=count+$count where cid=$cid";
	$result=mysqli_query($conn,$sql);
	$rs=mysqli_affected_rows($conn);
	if($rs>0){
	    echo '{"code":1,"msg":"加入购物车成功"}';
	}else{
	    echo '{"code":-1,"msg":"加入购物车失败"}';
	}
}


<?php
//data/users/signin.php
require_once("../init.php");
@$phone=$_REQUEST["phone"];
@$upwd=$_REQUEST["upwd"];
if($phone!=null&&$upwd!=null){
	$sql="SELECT * FROM kd_user WHERE phone='$phone' AND binary upwd='$upwd'";
	$result=mysqli_query($conn,$sql);
	$row=mysqli_fetch_row($result);
	if($row!=null){
		session_start();
		$_SESSION["uid"]=$row[0];

		echo '{"code":1,"msg":"登录成功!"}';
	}else
		echo '{"code":-1,"msg":"用户名或密码错误"}';
}

<?php
	require("../init.php");
	@$pid=$_REQUEST["pid"];
//	$output=[
//		"product"=>[],
//		"pics"=>[],
//		"specs"=>[]
//	];
	if($pid!=null){
		$sql="SELECT * FROM `kd_new_product` WHERE pid=$pid";
		$result=mysqli_query($conn,$sql);
		$output=mysqli_fetch_all($result,1)[0];
//		$sql="SELECT * FROM `xz_laptop_pic` WHERE laptop_id=$lid";
//		$result=mysqli_query($conn,$sql);
//		$output["pics"]=mysqli_fetch_all($result,1);
//		$fid=$output["product"]["family_id"];
//		$sql="SELECT lid,spec FROM `xz_laptop` WHERE family_id=$fid";
//		$result=mysqli_query($conn,$sql);
//		$output["specs"]=mysqli_fetch_all($result,1);
		echo json_encode($output);
	}else{
		echo json_encode($output);
	}
?>
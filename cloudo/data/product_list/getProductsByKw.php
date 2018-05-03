<?php
require("../init.php");
$output=[
	"count"=>0,
	"pageSize"=>9,
	"pageCount"=>0,
	"pageNo"=>0,
	"products"=>[]
];
@$kw=$_REQUEST["kw"];
@$pno=$_REQUEST["pno"];
if($kw!=null&&$pno!=null){
	$kws=explode(" ",$kw);
	for($i=0;$i<count($kws);$i++){
		$kws[$i]=" title like '%".$kws[$i]."%' ";
	}
	$where=implode(" and ",$kws);
	$sql=" select *,(select md from xz_laptop_pic where laptop_id=lid limit 1) as md from xz_laptop where $where ";
	$result=mysqli_query($conn,$sql);
	$count=count(mysqli_fetch_all($result,1));
	$pageCount=ceil($count/$output["pageSize"]);
	$output["count"]=$count;
	$output["pageCount"]=$pageCount;
	$output["pageNo"]=$pno;
	$sql.=" limit ".$pno*$output["pageSize"].",".$output["pageSize"];
	$result=mysqli_query($conn,$sql);
	$output["products"]=mysqli_fetch_all($result,1);
}
echo json_encode($output);


?>
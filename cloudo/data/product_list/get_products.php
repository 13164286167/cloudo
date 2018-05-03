<?php
require_once("../init.php");
@$key=$_REQUEST["key"];
@$low=$_REQUEST["low"];
@$high=$_REQUEST["high"];
@$pno=$_REQUEST["pno"];
@$pageSize=$_REQUEST["pageSize"];
@$sort=$_REQUEST["sort"];

if(!$key){
    $key="";
}
if(!$low){
    $low=0;
}
if(!$high){
    $high=200000;
}
if(!$pno){
    $pno=1;
}
if(!$pageSize){
    $pageSize=12;
}

$sql="SELECT count(pid) FROM kd_new_product WHERE title like '%$key%' AND price>=$low AND price<=$high";
$rs=mysqli_query($conn,$sql);
$count=mysqli_fetch_row($rs);
$pageCount=ceil($count[0]/$pageSize);
$offset=($pno-1)*$pageSize;
$sql=" SELECT * FROM kd_new_product WHERE  title like '%$key%' AND price>=$low AND price<=$high";
if($sort){
$sql.=" ORDER BY price $sort ";
}
$sql.=" limit $offset,$pageSize";

$rs=mysqli_query($conn,$sql);
$rows=mysqli_fetch_all($rs,1);
$output=["pno"=>$pno,"pageSize"=>$pageSize,"pageCount"=>$pageCount,"data"=>$rows];
echo json_encode($output);

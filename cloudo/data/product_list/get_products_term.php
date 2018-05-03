<?php
require_once("../init.php");
@$key=$_REQUEST["key"];
@$low=$_REQUEST["low"];
@$high=$_REQUEST["high"];
@$pno=$_REQUEST["pno"];
@$pageSize=$_REQUEST["pageSize"];
@$sort=$_REQUEST["sort"];
@$order=$_REQUEST["order"];
@$brand=$_REQUEST["brand"];

@$color=$_REQUEST["color"];
@$gender=$_REQUEST["gender"];
@$size=$_REQUEST["size"];
//$brand="VIVETTA";
//$color=["黄色"];
//$sort=["裙子"];
//$order="desc";
//$gender="0";
//$size="16岁";
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
if($brand){
    for($i=0;$i<count($brand);$i++){
    		$brand[$i]=" brandName = "."'".$brand[$i]."'";
    	}
    $brandA=implode(" or ",$brand);
    $sqlBrand=" AND $brandA ";
}
if($sort){
    for($i=0;$i<count($sort);$i++){
    		$sort[$i]=" sort = "."'".$sort[$i]."'";
    	}
    	$sortA=implode(" or ",$sort);
    $sqlSort=" AND $sortA";
}
if($size){
    for($i=0;$i<count($size);$i++){
    		$size[$i]=" size = "."'".$size[$i]."'";
    	}
    	$sizeA=implode(" or ",$size);
    $sqlSize=" AND $sizeA";
}
if($color){
    for($i=0;$i<count($color);$i++){
        		$color[$i]=" color = "."'".$color[$i]."'";
        	}
        	$colorA=implode(" or ",$color);
        $sqlColor=" AND $colorA";
}
if($order){
    if($order!="default"){
    if($order=="价格最高")$order="desc";
    if($order=="价格最低")$order="asc";
        $sqlOrder=" ORDER BY price $order ";
    }
}
if($gender=="男孩"||$gender=="女孩"||$gender=="0"||$gender=="1"){
    if($gender=="男孩")$gender="1";
    if($gender=="女孩")$gender="0";
    $sqlGender=" AND gender='".$gender."' ";
}
if($brand){$sql.=$sqlBrand;}
if($sort){$sql.=$sqlSort;}
if($size){$sql.=$sqlSize;}
if($color){$sql.=$sqlColor;}
if($gender=="0"||$gender=="1"){$sql.=$sqlGender;}
if($order){$sql.=$sqlOrder;}
$rs=mysqli_query($conn,$sql);
$count=mysqli_fetch_row($rs);
$pageCount=ceil($count[0]/$pageSize);
$offset=($pno-1)*$pageSize;
$sql=" SELECT * FROM kd_new_product WHERE  title like '%$key%' AND price>=$low AND price<=$high";
if($brand){$sql.=$sqlBrand;}
if($sort){$sql.=$sqlSort;}
if($size){$sql.=$sqlSize;}
if($color){$sql.=$sqlColor;}
if($gender=="0"||$gender=="1"){$sql.=$sqlGender;}
if($order){$sql.=$sqlOrder;}
$sql.=" limit $offset,$pageSize";
$rs=mysqli_query($conn,$sql);
$rows=mysqli_fetch_all($rs,1);
$output=["pno"=>$pno,"pageSize"=>$pageSize,"pageCount"=>$pageCount,"data"=>$rows,"size"=>$size,"order"=>$order,"gender"=>$gender,"brand"=>$brand];
echo json_encode($output);


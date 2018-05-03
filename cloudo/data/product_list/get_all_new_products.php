<?php
    require_once("../init.php");

    $sql="SELECT * FROM kd_new_product";
    $result=mysqli_query($conn,$sql);
    $output=mysqli_fetch_all($result,1);
    echo json_encode($output);

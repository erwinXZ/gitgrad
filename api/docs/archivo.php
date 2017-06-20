<?php
$file = $_FILES["file"]["name"];
$id = $_POST['id'];
echo $id;
  $a = date("h-m-s-d-m-y-");
if($file && move_uploaded_file($_FILES["file"]["tmp_name"], "files/".$a.$file))
{
	echo $file;
}
$mysqli = new mysqli('localhost', 'root', '', 'srdd');
$mysqli->multi_query(" CALL uploadProjectS('".$a.$file."','".$id."')");
$res = $mysqli->store_result();
// $res->fetch_assoc());

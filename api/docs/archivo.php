<?php
header('Access-Control-Allow-Origin: *'); 
$file = $_FILES["file"]["name"];
$id = $_POST['id'];
// echo $id;
  $a = date("h-m-s-d-m-y-");
if($file && move_uploaded_file($_FILES["file"]["tmp_name"], "files/".$a.$file))
{
	// echo $file;
   // $mysqli = new mysqli('localhost', 'root', '', 'srdd');
    // $mysqli = new mysqli("localhost", "my_user", "my_password", "world");
    
    $link = mysqli_connect('localhost', 'root', '', 'srdd');

/* comprobar conexión */
if (mysqli_connect_errno()) {
    printf("Conexión fallida: %s\n", mysqli_connect_error());
    exit();
}

$query  = " CALL uploadProjectS('".$a.$file."',".$id.")";
// $query .= "SELECT Name FROM City ORDER BY ID LIMIT 20, 5";

/* ejecutar multi consulta */
if (mysqli_multi_query($link, $query)) {
    do {
        /* almacenar primer juego de resultados */
        if ($result = mysqli_store_result($link)) {
            while ($row = mysqli_fetch_row($result)) {
                printf("%s\n", $row[0]);
            }
            mysqli_free_result($result);
        }
        /* mostrar divisor */
        if (mysqli_more_results($link)) {
            printf("-----------------\n");
        }
    } while (mysqli_next_result($link));
}

}

// $res->fetch_assoc());

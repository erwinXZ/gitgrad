<?php
    
if ( !empty( $_FILES ) ) {

    // $connect = mysqli_connect("localhost", "root", "", "srdd");
    // $query = "SELECT * FROM tbl_empleado ORDER BY id ASC";
    // $result = mysqli_query($connect, $query);

    $tempPath = $_FILES[ 'file' ][ 'tmp_name' ];
    $uploadPath = dirname( __FILE__ ) . DIRECTORY_SEPARATOR . 'docs' . DIRECTORY_SEPARATOR . $_FILES[ 'file' ][ 'name' ];

    move_uploaded_file( $tempPath, $uploadPath );

    $answer = array( 'answer' => 'File transfer completed' );
    $json = json_encode( $answer );

    echo $json;

} else {

    echo 'No files';

}

?>
